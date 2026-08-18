import React,{useState} from 'react'
import type {ComponentSpec} from './system'
import {tokenValues} from './system'

function Card({title,children,className=''}:{title:string;children:React.ReactNode;className?:string}){return <section className={`card doc-card ${className}`}><h3>{title}</h3>{children}</section>}
function CodeBlock({code}:{code:string}){const[copied,setCopied]=useState(false);const copy=async()=>{try{await navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1200)}catch{}};return <section className="card code-card"><div className="code-toolbar"><strong>Code</strong><button type="button" className="copy-button" onClick={copy}>{copied?'Copiado':'Copiar código'}</button></div><pre><code>{code}</code></pre></section>}
export function ComponentPage({spec,preview,controls,code,stateLab,behaviorLab,eventLog,previewClass=''}:{spec:ComponentSpec;preview:React.ReactNode;controls:React.ReactNode;code:string;stateLab?:React.ReactNode;behaviorLab?:React.ReactNode;eventLog?:string;previewClass?:string}){
 const parity=spec.parity??[{status:'MATCH' as const,note:'API, dimensões e documentação exibidas nesta página foram derivadas do component set e das páginas do Vellora no Figma.'}]
 return <><div className="breadcrumb">Components / {spec.name} · Figma {spec.figma}</div><div className="page-head"><div><h1>{spec.name}</h1><p>{spec.description}</p><div className="page-meta"><span className="meta-chip">Status: UNKNOWN — NEEDS DEFINITION</span><span className="meta-chip">Version: Vellora 1.0 baseline</span><span className="meta-chip">Layer: Component</span><span className="meta-chip">Owner: UNKNOWN — NEEDS DEFINITION</span></div></div></div>
 {parity.map((p,i)=><div key={i} className={`parity-banner ${p.status.toLowerCase()}`}><strong>{p.status}</strong> · {p.note}</div>)}
 <div className="component-layout"><section className="card preview-card"><div className="card-head"><strong>Interactive Preview</strong><small>1:1 · no scaling</small></div><div className={`preview-stage ${previewClass}`}>{preview}</div></section><aside className="card controls"><h3>Controls · public API</h3>{controls}{eventLog!==undefined?<div className="event-log" aria-live="polite">{eventLog||'Nenhuma ação executada.'}</div>:null}</aside></div>
 {stateLab?<section className="card card-pad" style={{marginTop:18}}><h2 className="section-heading">States · live interaction + forced reference</h2>{stateLab}</section>:null}
 {behaviorLab?<section className="card card-pad" style={{marginTop:18}}><h2 className="section-heading">Consumer behavior lab · outside component API</h2>{behaviorLab}</section>:null}
 <div className="docs-grid">
 <Card title="Props / Variants / States" className="props-card"><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Notes</th></tr></thead><tbody>{spec.figmaProps.map(p=><tr key={p.name}><td><code>{p.name}</code></td><td><code>{p.type}</code></td><td><code>{p.defaultValue}</code></td><td>{p.notes??''}</td></tr>)}</tbody></table></Card>
 <Card title="Anatomy"><ul>{spec.anatomy.map(x=><li key={x}>{x}</li>)}</ul></Card>
 <Card title="Usage / Don’t"><p><strong>Use:</strong> {spec.usage}</p><p style={{marginTop:8}}><strong>Don’t:</strong> {spec.dont}</p></Card>
 <Card title="Behavior"><p>{spec.behavior}</p></Card>
 <Card title="Content / Content limits"><p>{spec.content}</p></Card>
 <Card title="Accessibility"><p>{spec.accessibility}</p></Card>
 <Card title="Keyboard / Focus"><p>{spec.keyboard}</p></Card>
 <Card title="Responsive"><p>{spec.responsive}</p></Card>
 <Card title="Tokens"><ul>{spec.tokens.map(t=><li key={t}><code>{t}</code>{tokenValues[t]?` = ${tokenValues[t]}`:''}</li>)}</ul></Card>
 <Card title="Edge Cases"><p>{spec.edgeCases}</p></Card>
 <Card title="Dependencies / Changelog"><p><strong>Dependencies:</strong> {spec.dependencies}</p><p style={{marginTop:8}}><strong>Changelog:</strong> {spec.changelog}</p></Card>
 </div><CodeBlock code={code}/></>
}

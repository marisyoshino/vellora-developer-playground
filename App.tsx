import React,{useEffect,useState} from 'react'
import {nav,componentSpecs} from './system'
import {ComponentPlayground} from './Playgrounds'
import {docsRoutes} from './DocsPages'

function useRoute(){const[r,setR]=useState(location.hash.slice(1)||'overview');useEffect(()=>{const f=()=>setR(location.hash.slice(1)||'overview');addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);return r}
export default function App(){
 const route=useRoute();const[query,setQuery]=useState('');const[open,setOpen]=useState(false)
 useEffect(()=>setOpen(false),[route])
 const Docs=docsRoutes[route]
 const page=componentSpecs[route]?<ComponentPlayground id={route}/>:Docs?<Docs/>:<div className="parity-banner unknown"><strong>UNKNOWN</strong> · Route not defined.</div>
 return <div className="app"><aside className={`sidebar ${open?'open':''}`}><a className="brand" href="#overview"><span className="brand-mark">V</span><span><strong>Vellora</strong><small>Developer Playground</small></span></a><nav>{nav.map(([section,items])=><React.Fragment key={section}><div className="nav-section">{section}</div>{items.filter(([,label])=>label.toLowerCase().includes(query.toLowerCase())).map(([id,label])=><a href={`#${id}`} key={id} className={`nav-link ${route===id?'active':''}`}><span className="nav-dot"/>{label}</a>)}</React.Fragment>)}</nav></aside><section className="workspace"><header className="topbar"><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Abrir navegação">☰</button><div className="search"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Buscar página ou componente..." aria-label="Buscar no playground"/></div><div className="top-meta"><span className="pill">Figma contract</span><span className="version">Vellora 1.0+</span></div></header><main>{page}</main></section></div>
}

import React,{useEffect,useId,useRef} from 'react'
import {Icon,IconName} from './Icon'

export type Size='Medium'|'Large'
export type InteractionState='Default'|'Hover'|'Focused'|'Pressed'|'Disabled'

export type ButtonProps={
 label?:string;showIcon?:boolean;icon?:React.ReactNode|null;size?:Size;style?:'Primary'|'Secondary'|'Ghost';state?:InteractionState;onClick?:()=>void
}
export function Button({label='Continuar',showIcon=false,icon=null,size='Medium',style='Primary',state='Default',onClick}:ButtonProps){
 const off=state==='Disabled'
 return <button type="button" className={`vl-button ${size.toLowerCase()} ${style.toLowerCase()} state-${state.toLowerCase()}`} disabled={off} onClick={onClick}>{showIcon?icon:null}<span>{label}</span></button>
}

export type DestructiveButtonProps={label?:string;showIcon?:boolean;icon?:React.ReactNode|null;size?:Size;state?:InteractionState;onClick?:()=>void}
export function DestructiveButton({label='Cancelar consulta',showIcon=false,icon=null,size='Medium',state='Default',onClick}:DestructiveButtonProps){
 const off=state==='Disabled'
 return <button type="button" className={`vl-button destructive ${size.toLowerCase()} state-${state.toLowerCase()}`} disabled={off} onClick={onClick}>{showIcon?icon:null}<span>{label}</span></button>
}

export type IconButtonProps={icon?:React.ReactNode|null;accessibleLabel?:string;size?:Size;style?:'Primary'|'Secondary'|'Ghost';state?:InteractionState;onClick?:()=>void}
export function IconButton({icon=null,accessibleLabel='Abrir opções',size='Medium',style='Primary',state='Default',onClick}:IconButtonProps){
 const off=state==='Disabled'
 return <button type="button" aria-label={accessibleLabel} className={`vl-icon-button ${size.toLowerCase()} ${style.toLowerCase()} state-${state.toLowerCase()}`} disabled={off} onClick={onClick}>{icon}</button>
}

export type FieldState='Default'|'Hover'|'Focused'|'Filled'|'Error'|'Disabled'
export type InputFieldProps={
 helper?:string;icon?:React.ReactNode|null;label?:string;showHelper?:boolean;showLabel?:boolean;showLeadingIcon?:boolean;size?:Size;state?:FieldState;value?:string;onChange?:(value:string)=>void
}
export function InputField({helper='Como aparece no documento',icon=null,label='Nome completo',showHelper=true,showLabel=true,showLeadingIcon=false,size='Medium',state='Default',value='Digite seu nome',onChange}:InputFieldProps){
 const reactId=useId();const id=`vl-input-${reactId.replace(/:/g,'')}`
 const disabled=state==='Disabled'
 const actualFilled=state==='Filled'||(value.length>0&&value!=='Digite seu nome'&&state==='Default')
 const displayState=actualFilled&&state==='Default'?'Filled':state
 return <div className={`vl-field ${size.toLowerCase()} state-${displayState.toLowerCase()}`}>
  {showLabel?<label htmlFor={id}>{label}</label>:null}
  <div className="vl-field-control">{showLeadingIcon?<span className="leading-icon" aria-hidden="true">{icon}</span>:null}<input id={id} value={value} disabled={disabled} aria-label={showLabel?undefined:label} aria-invalid={state==='Error'} aria-describedby={showHelper?`${id}-help`:undefined} onChange={e=>onChange?.(e.target.value)}/></div>
  {showHelper?<small id={`${id}-help`}>{helper}</small>:null}
 </div>
}

export type TextareaProps={helper?:string;label?:string;rows?:'3'|'5';showHelper?:boolean;showLabel?:boolean;state?:FieldState;value?:string;onChange?:(value:string)=>void}
export function Textarea({helper='Até 500 caracteres',label='Motivo da consulta',rows='3',showHelper=true,showLabel=true,state='Default',value='Descreva o que você está sentindo',onChange}:TextareaProps){
 const reactId=useId();const id=`vl-textarea-${reactId.replace(/:/g,'')}`
 const actualFilled=state==='Filled'||(value.length>0&&value!=='Descreva o que você está sentindo'&&state==='Default')
 const displayState=actualFilled&&state==='Default'?'Filled':state
 return <div className={`vl-field vl-textarea rows-${rows} state-${displayState.toLowerCase()}`}>
  {showLabel?<label htmlFor={id}>{label}</label>:null}
  <textarea id={id} value={value} disabled={state==='Disabled'} aria-label={showLabel?undefined:label} aria-invalid={state==='Error'} aria-describedby={showHelper?`${id}-help`:undefined} onChange={e=>onChange?.(e.target.value)}/>
  {showHelper?<small id={`${id}-help`}>{helper}</small>:null}
 </div>
}

export type SelectFieldProps={
 helper?:string;icon?:React.ReactNode|null;label?:string;showHelper?:boolean;showLabel?:boolean;size?:Size;state?:FieldState;value?:string;expanded?:boolean;controlsId?:string;triggerRef?:React.RefObject<HTMLButtonElement|null>;onTrigger?:()=>void;onKeyDown?:React.KeyboardEventHandler<HTMLButtonElement>
}
export function SelectField({helper='Escolha uma opção',icon=null,label='Especialidade',showHelper=true,showLabel=true,size='Medium',state='Default',value='Selecione',expanded=false,controlsId,triggerRef,onTrigger,onKeyDown}:SelectFieldProps){
 const internalRef=useRef<HTMLButtonElement>(null);const ref=triggerRef??internalRef
 const reactId=useId();const id=`vl-select-${reactId.replace(/:/g,'')}`
 return <div className={`vl-field ${size.toLowerCase()} vl-select-field state-${state.toLowerCase()}`}>
  {showLabel?<label id={`${id}-label`}>{label}</label>:null}
  <button ref={ref} id={id} type="button" className="vl-field-control select-trigger" role="combobox" aria-haspopup="listbox" aria-expanded={expanded} aria-controls={expanded?controlsId:undefined} aria-labelledby={showLabel?`${id}-label ${id}`:undefined} aria-label={showLabel?undefined:label} aria-describedby={showHelper?`${id}-help`:undefined} disabled={state==='Disabled'} onClick={onTrigger} onKeyDown={onKeyDown}><span>{value}</span>{icon??<Icon name="Chevron Down" size={20}/>}</button>
  {showHelper?<small id={`${id}-help`}>{helper}</small>:null}
 </div>
}

export type SelectOptionProps={
 label?:string;selected?:boolean;state?:'Default'|'Hover'|'Focused'|'Disabled';optionId?:string;optionRef?:React.Ref<HTMLButtonElement>;onSelect?:()=>void;onKeyDown?:React.KeyboardEventHandler<HTMLButtonElement>;onPointerMove?:()=>void
}
export function SelectOption({label='Opção',selected=false,state='Default',optionId,optionRef,onSelect,onKeyDown,onPointerMove}:SelectOptionProps){
 return <button ref={optionRef} id={optionId} type="button" role="option" aria-selected={selected} className={`vl-select-option ${selected?'selected':''} state-${state.toLowerCase()}`} disabled={state==='Disabled'} onClick={onSelect} onKeyDown={onKeyDown} onPointerMove={onPointerMove}><span>{label}</span>{selected?<Icon name="Check" size={20}/>:null}</button>
}

export type CheckboxProps={label?:string;selected?:'False'|'True'|'Indeterminate';state?:'Default'|'Hover'|'Focused'|'Disabled';onSelectedChange?:(s:'False'|'True'|'Indeterminate')=>void}
export function Checkbox({label='Aceito os termos',selected='False',state='Default',onSelectedChange}:CheckboxProps){
 const disabled=state==='Disabled'
 const toggle=()=>{if(disabled)return;if(selected==='False')onSelectedChange?.('True');else if(selected==='True')onSelectedChange?.('False');else onSelectedChange?.('True')}
 return <button type="button" role="checkbox" aria-checked={selected==='Indeterminate'?'mixed':selected==='True'} className={`vl-choice checkbox state-${state.toLowerCase()} selected-${selected.toLowerCase()}`} disabled={disabled} onClick={toggle}><span className="choice-box" aria-hidden="true"><span className="choice-mark">{selected==='True'?'✓':selected==='Indeterminate'?'−':''}</span></span><span>{label}</span></button>
}

export type RadioProps={
 label?:string;selected?:boolean;state?:'Default'|'Hover'|'Focused'|'Disabled';onSelectedChange?:(v:boolean)=>void;
 tabIndex?:number;onKeyDown?:React.KeyboardEventHandler<HTMLButtonElement>;ariaPosInSet?:number;ariaSetSize?:number
}
export function Radio({label='Psicologia',selected=false,state='Default',onSelectedChange,tabIndex=0,onKeyDown,ariaPosInSet,ariaSetSize}:RadioProps){
 return <button type="button" role="radio" aria-checked={selected} aria-posinset={ariaPosInSet} aria-setsize={ariaSetSize} tabIndex={tabIndex} className={`vl-choice radio state-${state.toLowerCase()} ${selected?'selected':''}`} disabled={state==='Disabled'} onKeyDown={onKeyDown} onClick={()=>onSelectedChange?.(true)}><span className="radio-ring"><span/></span><span>{label}</span></button>
}

export type RadioGroupOption={label:string;value:string;disabled?:boolean}
export type RadioGroupProps={label:string;options:RadioGroupOption[];value?:string;onValueChange?:(value:string)=>void}
export function RadioGroup({label,options,value,onValueChange}:RadioGroupProps){
 const labelId=useId()
 const enabled=options.filter(option=>!option.disabled)
 const selectedEnabledIndex=enabled.findIndex(option=>option.value===value)
 const tabbableValue=selectedEnabledIndex>=0?enabled[selectedEnabledIndex]?.value:enabled[0]?.value
 const onGroupKeyDown=(event:React.KeyboardEvent<HTMLDivElement>)=>{
  if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)) return
  const buttons=Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button[role="radio"]:not(:disabled)'))
  if(!buttons.length) return
  const current=buttons.indexOf(document.activeElement as HTMLButtonElement)
  const direction=event.key==='ArrowUp'||event.key==='ArrowLeft'?-1:1
  const next=(Math.max(current,0)+direction+buttons.length)%buttons.length
  event.preventDefault()
  buttons[next]?.focus()
  buttons[next]?.click()
 }
 return <fieldset className="vl-radio-group">
  <legend id={labelId}>{label}</legend>
  <div role="radiogroup" aria-labelledby={labelId} className="vl-radio-group-items" onKeyDown={onGroupKeyDown}>
   {options.map((option,index)=><Radio key={option.value} label={option.label} selected={value===option.value} state={option.disabled?'Disabled':'Default'} tabIndex={!option.disabled&&option.value===tabbableValue?0:-1} ariaPosInSet={index+1} ariaSetSize={options.length} onSelectedChange={()=>onValueChange?.(option.value)}/>)}
  </div>
 </fieldset>
}

export type SwitchProps={checked?:boolean;label?:string;state?:'Default'|'Hover'|'Focused'|'Disabled';onCheckedChange?:(v:boolean)=>void}
export function Switch({checked=false,label='Ativar câmera',state='Default',onCheckedChange}:SwitchProps){
 return <button type="button" role="switch" aria-checked={checked} className={`vl-switch state-${state.toLowerCase()} ${checked?'checked':''}`} disabled={state==='Disabled'} onClick={()=>onCheckedChange?.(!checked)}><span className="switch-track"><span className="switch-thumb"/></span><span className="switch-label">{label}</span></button>
}

export type BadgeProps={label?:string;size?:'Small'|'Medium';tone?:'Brand'|'Success'|'Warning'|'Danger'|'Info'|'Neutral'}
export function Badge({label='Confirmado',size='Small',tone='Brand'}:BadgeProps){return <span className={`vl-badge ${size.toLowerCase()} ${tone.toLowerCase()}`}>{label}</span>}

export type AvatarProps={initials?:string;size?:'Small'|'Medium'|'Large';status?:'Online'|'Away'|'Offline'}
export function Avatar({initials='ML',size='Small',status='Online'}:AvatarProps){return <span className={`vl-avatar ${size.toLowerCase()}`}><span className="avatar-initials">{initials}</span><span className={`avatar-status ${status.toLowerCase()}`} aria-hidden="true"/><span className="sr-only">Status: {status}</span></span>}

export type TabItemProps={label?:string;selected?:boolean;state?:'Default'|'Hover'|'Focused'|'Disabled';onSelect?:()=>void;id?:string;tabIndex?:number;ariaControls?:string;onKeyDown?:React.KeyboardEventHandler<HTMLButtonElement>}
export function TabItem({label='Resumo',selected=false,state='Default',onSelect,id,tabIndex,ariaControls,onKeyDown}:TabItemProps){return <button id={id} type="button" role="tab" aria-selected={selected} aria-controls={ariaControls} tabIndex={tabIndex} className={`vl-tab state-${state.toLowerCase()} ${selected?'selected':''}`} disabled={state==='Disabled'} onClick={onSelect} onKeyDown={onKeyDown}><span className="tab-label">{label}{selected?<span className="tab-indicator" aria-hidden="true"/>:null}</span></button>}

export type TabsListItem={label:string;value:string;panel:React.ReactNode;disabled?:boolean}
export type TabsListProps={label?:string;items:TabsListItem[];value:string;onValueChange?:(value:string)=>void}
export function TabsList({label='Seções',items,value,onValueChange}:TabsListProps){
 const uid=useId().replace(/:/g,'')
 const enabledIndexes=items.map((item,index)=>item.disabled?-1:index).filter(index=>index>=0)
 const selectedIndex=Math.max(0,items.findIndex(item=>item.value===value&&!item.disabled))
 const activeIndex=items[selectedIndex]?.disabled?(enabledIndexes[0]??0):selectedIndex
 const move=(event:React.KeyboardEvent<HTMLButtonElement>,index:number)=>{
  const key=event.key;if(!['ArrowLeft','ArrowRight','Home','End'].includes(key))return
  event.preventDefault();if(!enabledIndexes.length)return
  const current=Math.max(0,enabledIndexes.indexOf(index))
  const nextIndex=key==='Home'?enabledIndexes[0]:key==='End'?enabledIndexes[enabledIndexes.length-1]:enabledIndexes[(current+(key==='ArrowLeft'?-1:1)+enabledIndexes.length)%enabledIndexes.length]
  onValueChange?.(items[nextIndex].value)
  requestAnimationFrame(()=>document.getElementById(`vl-tab-${uid}-${nextIndex}`)?.focus())
 }
 return <div className="vl-tabs-composition">
  <div role="tablist" aria-label={label} className="vl-tabs-list">
   {items.map((item,index)=><TabItem key={item.value} id={`vl-tab-${uid}-${index}`} label={item.label} selected={index===activeIndex} state={item.disabled?'Disabled':'Default'} tabIndex={index===activeIndex?0:-1} ariaControls={`vl-tabpanel-${uid}-${index}`} onSelect={()=>!item.disabled&&onValueChange?.(item.value)} onKeyDown={e=>move(e,index)}/>)}
  </div>
  {items.map((item,index)=>index===activeIndex?<div key={item.value} id={`vl-tabpanel-${uid}-${index}`} role="tabpanel" aria-labelledby={`vl-tab-${uid}-${index}`} className="vl-tab-panel">{item.panel}</div>:null)}
 </div>
}

export type AlertProps={action?:boolean;actionLabel?:string;body?:string;title?:string;tone?:'Info'|'Success'|'Warning'|'Danger';onAction?:()=>void}
export function Alert({action=false,actionLabel='Tentar novamente',body='A qualidade do vídeo pode oscilar por alguns instantes.',title='Conexão instável',tone='Info',onAction}:AlertProps){return <div className={`vl-alert ${tone.toLowerCase()}`} role="status"><strong>{title}</strong><p>{body}</p>{action?<button type="button" onClick={onAction}>{actionLabel}</button>:null}</div>}

export type DoctorCardProps={availability?:'Available'|'Busy'|'Offline';featured?:boolean;name?:string;nextSlot?:string;rating?:string;specialty?:string}
export function DoctorCard({availability='Available',featured=false,name='Dra. Marina Lopes',nextSlot='Hoje, 16:30',rating='★ 4,9 · 128 avaliações',specialty='Psicologia · CRP 06/123456'}:DoctorCardProps){
 const av=availability==='Busy'?'Agenda cheia hoje':availability==='Offline'?'Indisponível':nextSlot
 return <article className={`vl-doctor-card ${featured?'featured':''}`} aria-label={`${name}, ${specialty}, ${av}`}><div className="doctor-head"><div className="doctor-avatar"/><div><h3>{name}</h3><p>{specialty}</p></div></div><p className="doctor-rating">{rating}</p><span className={`doctor-availability ${availability.toLowerCase()}`}>{av}</span></article>
}

type AppointmentCardCommon={actionLabel?:string;date?:string;professional?:string;title?:string;onAction?:()=>void}
export type AppointmentCardProps=AppointmentCardCommon&(
 {status?:'Upcoming'|'Today';action?:boolean}|
 {status:'Completed'|'Cancelled';action?:false}
)
export function AppointmentCard({action=false,actionLabel='Entrar na consulta',date='12 ago · 16:30',professional='Dra. Marina Lopes',status='Upcoming',title='Psicologia',onAction}:AppointmentCardProps){
 const labels={Upcoming:'Próxima consulta',Today:'Hoje',Completed:'Concluída',Cancelled:'Cancelada'} as const
 const allowedAction=action&&(status==='Upcoming'||status==='Today')
 return <article className={`vl-appointment-card ${status.toLowerCase()}`}><span className="appointment-status">{labels[status]}</span><h3>{title}</h3><p>{professional}</p><span className="appointment-date">{date}</span>{allowedAction?<button type="button" onClick={onAction}>{actionLabel}</button>:null}</article>
}

export type DeviceCheckRowProps={detail?:string;device?:'Camera'|'Microphone'|'Connection';label?:string;status?:'Checking'|'Ready'|'Warning'|'Error'}
export function DeviceCheckRow({detail='Verificando acesso…',device='Camera',label, status='Checking'}:DeviceCheckRowProps){
 const names={Camera:'Câmera',Microphone:'Microfone',Connection:'Conexão'} as const;const result={Checking:'Verificando',Ready:'Pronto',Warning:'Atenção',Error:'Erro'} as const
 return <div className="vl-device-row" role="status"><span className={`device-dot ${status.toLowerCase()}`}/><span className="device-copy"><strong>{label??names[device]}</strong><small>{detail}</small></span><span className={`device-result ${status.toLowerCase()}`}>{result[status]}</span></div>
}

export type FaceGuidanceStatusProps={detail?:string;layout?:'Compact'|'Expanded';status?:'Scanning'|'Ready'|'Warning'|'Error';title?:string}
export function FaceGuidanceStatus({detail,layout='Compact',status='Scanning',title}:FaceGuidanceStatusProps){
 const defaultCopy={
  Scanning:{title:'Procurando seu rosto',detail:'Olhe para a câmera'},
  Ready:{title:'Rosto enquadrado',detail:'Você está pronto'},
  Warning:{title:'Ajuste necessário',detail:'Centralize e melhore a iluminação'},
  Error:{title:'Não foi possível detectar',detail:'Verifique a permissão da câmera'}
 } as const
 const copy=defaultCopy[status]
 return <div className={`vl-face-status ${layout.toLowerCase()} ${status.toLowerCase()}`} role="status"><span className="face-signal" aria-hidden="true"/><div><strong>{title??copy.title}</strong><span>{detail??copy.detail}</span></div></div>
}

export type CameraGuidanceOverlayProps={controls?:boolean;detail?:string;status?:'Tracking'|'Ready'|'Warning'|'Error';title?:string;onCamera?:()=>void;onMicrophone?:()=>void;onExit?:()=>void}
export function CameraGuidanceOverlay({controls=false,detail,status='Tracking',title,onCamera,onMicrophone,onExit}:CameraGuidanceOverlayProps){
 const defaultCopy={
  Tracking:{title:'Centralize seu rosto',detail:'Mantenha os olhos na altura indicada'},
  Ready:{title:'Enquadramento pronto',detail:'Permaneça nessa posição'},
  Warning:{title:'Ajuste a posição',detail:'Afaste-se um pouco e melhore a luz'},
  Error:{title:'Câmera indisponível',detail:'Revise a permissão do navegador'}
 } as const
 const copy=defaultCopy[status];const resolvedTitle=title??copy.title;const resolvedDetail=detail??copy.detail
 return <div className={`vl-camera-overlay ${status.toLowerCase()}`}><div className="camera-shade"/><svg className="camera-face-frame" width="220" height="290" viewBox="0 0 220 290" fill="none" aria-hidden="true"><ellipse cx="110" cy="145" rx="109" ry="144" stroke="currentColor" strokeWidth="2" strokeDasharray={status==='Ready'?undefined:'12 8'}/></svg><span className="sr-only" role="status">{resolvedTitle}. {resolvedDetail}</span>{controls?<div className="camera-controls"><button type="button" onClick={onCamera}>Câmera</button><button type="button" onClick={onMicrophone}>Microfone</button><button type="button" onClick={onExit}>Sair</button></div>:<div className="camera-guide"><strong>{resolvedTitle}</strong><span>{resolvedDetail}</span></div>}</div>
}

export type CallControlProps={icon?:React.ReactNode|null;label?:string;state?:'Default'|'Active'|'Focused'|'Disabled';tone?:'Neutral'|'Danger'|'Inverse';onActiveChange?:(active:boolean)=>void;onPress?:()=>void}
export function CallControl({icon=<Icon name="Mic"/>,label='Microfone',state='Default',tone='Neutral',onActiveChange,onPress}:CallControlProps){
 const active=state==='Active';const disabled=state==='Disabled'
 const press=()=>{if(disabled)return;if(tone==='Danger')onPress?.();else onActiveChange?.(!active)}
 return <div className={`vl-call-control ${tone.toLowerCase()} state-${state.toLowerCase()}`}><button type="button" disabled={disabled} aria-pressed={tone==='Danger'?undefined:active} aria-label={label} onClick={press}>{icon}</button><span>{label}</span></div>
}

export type DesktopHeaderProps={active?:'Início'|'Especialistas'|'Agenda'|'Documentos';onActiveChange?:(v:'Início'|'Especialistas'|'Agenda'|'Documentos')=>void;onNotifications?:()=>void}
export function DesktopHeader({active='Início',onActiveChange,onNotifications}:DesktopHeaderProps){
 const routes=['Início','Especialistas','Agenda','Documentos'] as const
 return <header className="vl-desktop-header"><div className="header-brand"><img className="header-logo" src="/vellora-logo.svg" alt="Vellora"/></div><nav aria-label="Navegação principal">{routes.map(r=><button key={r} className={active===r?'active':''} aria-current={active===r?'page':undefined} onClick={()=>onActiveChange?.(r)}>{r}</button>)}</nav><div className="header-actions"><IconButton icon={<Icon name="Bell" size={20}/>} accessibleLabel="Notificações" size="Medium" style="Ghost" onClick={onNotifications}/><Avatar initials="MA" size="Medium" status="Online"/></div></header>
}

export const FigmaIcon=({name,size=24}:{name:IconName;size?:number})=><Icon name={name} size={size}/>

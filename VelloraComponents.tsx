import React,{useEffect,useId,useRef} from 'react'
import {Icon,IconName} from './Icon'
const VELLORA_LOGO_DATA_URL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQzMiIgaGVpZ2h0PSIyOTQiIHZpZXdCb3g9IjAgMCAxNDMyIDI5NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3Ny4yMjYgMjU1LjcyMUMyNDcuNzgxIDMwMC43IDE3OS4xOTYgMzA2LjgzNSAxNDIuMTY4IDI2OC4xMzZDMTI2LjkzNiAyNTIuMjE3IDExNS4wMDggMjMwLjE3MSAxMDMuMjAxIDIxMS40OTZMNTMuNDk4OSAxMzQuMDQyTDIwLjI0NjcgODIuODUzQzE0Ljc1NzIgNzQuNDUxOCA4LjExODk3IDY1LjM5ODQgMy41NjE3OSA1Ni42MjA5Qy00Ljk5MzMzIDQwLjE0MjQgMi43OTg0NSAxOS43Mjc3IDE2Ljk4NTEgOS4zNDg5M0MyNS45NTY2IDIuODIyMzIgMzcuMTU4NSAwLjEzNzI1NSA0OC4xMTQ3IDEuODg1NDFDNTcuNTE3MyAzLjQ2Mjk5IDY2LjIwOTUgNy44ODcyMyA3My4wMTU5IDE0LjU2MTZDODAuNjQ0NCAyMi4xMDUxIDg5LjU3NjcgMzguMzg2MSA5NS4yMzQ0IDQ3LjkwMzhMMTIyLjc3OCA5My45OTczQzEyOC40MzggMTAzLjQ0MSAxMzQuODU4IDExNC44MSAxNDEuMjE1IDEyMy41MUMxNDEuNTQyIDEyNy4zNzYgMjAxLjMxNyAyMjMuOTcgMjA3LjExNyAyMzIuMTc5QzIxMC43MjIgMjM3LjM3MiAyMTUgMjQyLjA2NCAyMTkuODM4IDI0Ni4xMzNDMjM2LjExNyAyNTkuOTA1IDI1Ny4zNTQgMjY0LjYzNyAyNzcuMjI2IDI1NS43MjFaIiBmaWxsPSIjMEI2NjU1Ii8+CjxwYXRoIGQ9Ik0yNzMuNDE3IDEyMC45MDRDMjg1LjI0NiAxMDMuODMxIDI5NC45NDkgODQuOTAyMyAzMDYuMzMgNjcuNTY2OEMzMTggNTAuNzAyMyAzMjcuNjQ2IDI3LjI1NCAzNDIuMzI3IDEzLjAyNDdDMzY1Ljc1NiAtOS42ODI0OSA0MDguNDMyIDEuODYzMzMgNDEzLjQ2NyAzNS41NTk4QzQxNi4yNjYgNTQuMjg1MSA0MDQuODE0IDY2LjA2MDMgMzk0Ljg4NiA4MC41ODE3TDM2Ny4xODEgMTIxLjEwNUMzMzcuNzg1IDE2NC43NzcgMzA4LjYxNSAyMDguNjAxIDI3OS42NzEgMjUyLjU3NEwyNzcuMjI2IDI1NS43MjFDMjU3LjM1NCAyNjQuNjM3IDIzNi4xMTcgMjU5LjkwNSAyMTkuODM4IDI0Ni4xMzNDMjE1IDI0Mi4wNjQgMjEwLjcyMiAyMzcuMzcyIDIwNy4xMTcgMjMyLjE3OUMyMDEuMzE3IDIyMy45NyAxNDEuNTQyIDEyNy4zNzYgMTQxLjIxNSAxMjMuNTFDMTU5LjgyNCAxNDYuNjc5IDE4NC41NDMgMTU3LjMwNSAyMTQuMzI3IDE1NC45M0MyNDAuMDQ5IDE1Mi44NzkgMjU3LjE0NiAxNDAuMDQ1IDI3My40MTcgMTIwLjkwNFoiIGZpbGw9IiMwQjY2NTUiLz4KPHBhdGggZD0iTTE0MS4yMTUgMTIzLjUxQzE1OS44MjQgMTQ2LjY3OSAxODQuNTQzIDE1Ny4zMDUgMjE0LjMyNyAxNTQuOTNDMjQwLjA0OSAxNTIuODc5IDI1Ny4xNDYgMTQwLjA0NSAyNzMuNDE3IDEyMC45MDRDMjY1LjkxMyAxNDAuNzE2IDI0MS41NDIgMTcyLjIyIDIzMC40ODQgMTkxLjYzNUMyMjQuNDczIDIwMi4xODggMjA3LjUxMyAyMDMuMjM5IDE5Ni40ODcgMjAxLjkzQzIxNS4xNzggMjMzLjIxNCAyMzYuMzcxIDI2Ny40OTYgMjc5LjY3MSAyNTIuNTc0TDI3Ny4yMjYgMjU1LjcyMUMyNTcuMzU0IDI2NC42MzcgMjM2LjExNyAyNTkuOTA1IDIxOS44MzggMjQ2LjEzM0MyMTUgMjQyLjA2NCAyMTAuNzIyIDIzNy4zNzIgMjA3LjExNyAyMzIuMTc5QzIwMS4zMTcgMjIzLjk2OSAxNDEuNTQyIDEyNy4zNzYgMTQxLjIxNSAxMjMuNTFaIiBmaWxsPSIjRTVGMEVEIi8+CjxwYXRoIGQ9Ik0xMzM3LjQzIDExOC42MThDMTM2Mi4wMyAxMTQuNDUxIDEzOTIuOTMgMTI1Ljc4MSAxNDA5LjY4IDE0My45MjZDMTQxOC45MSAxNTMuOTI2IDE0MjUuNTcgMTY2LjgxIDE0MjguODEgMTc5Ljk3M0MxNDI5Ljk2IDE4NC42NSAxNDMwLjY1IDE4OS40MjggMTQzMC44NyAxOTQuMjRDMTQzMS41NiAyMDYuODkgMTQzMC42MyAyMjAuMzAyIDE0MzAuODMgMjMzLjQ4MUMxNDMwLjA2IDI0NS42MzkgMTQzMy4zMiAyNjAuNTA2IDE0MjkuMTEgMjcxLjg0NkMxNDI3LjgyIDI3My44ODggMTQyMi4xOSAyNzQuOTc0IDE0MjAuMjUgMjc0Ljg4OUMxMzk0LjUyIDI3My43NTkgMTM5My42MyAyODEuMDI4IDEzOTMuMTcgMjU0LjI0OUMxMzg1LjQyIDI2Mi41MSAxMzgwLjU4IDI2NS4yMjcgMTM3MC42OSAyNzAuNTk5QzEzNjguNjQgMjcxLjk5NiAxMzY0Ljk0IDI3My4xOTEgMTM2Mi41NyAyNzQuMDI3QzEzMzkuNiAyODIuMTI3IDEzMTEuODMgMjc1LjU5MiAxMjkyLjkxIDI2MC44NDNDMTI3Ni42OCAyNDguMjQyIDEyNjYuMiAyMjkuNjUxIDEyNjMuODMgMjA5LjI1MUMxMjYxLjMyIDE4OC4xOTggMTI2Ny4zMSAxNjcuMDE1IDEyODAuNDcgMTUwLjM4OEMxMjk1IDEzMi4xNTIgMTMxNC4yNCAxMjEuMjc5IDEzMzcuNDMgMTE4LjYxOFpNMTM1Ni4xNiAyNDIuMTEzQzEzODAuNDcgMjM3LjIzMyAxMzk2LjI0IDIxMy42IDEzOTEuNDIgMTg5LjI4NEMxMzg2LjU4IDE2NC45NjggMTM2Mi45OCAxNDkuMTQ3IDEzMzguNjQgMTUzLjkyQzEzMTQuMjMgMTU4LjcwNyAxMjk4LjM1IDE4Mi4zOTYgMTMwMy4xOSAyMDYuNzg3QzEzMDguMDQgMjMxLjE3OSAxMzMxLjc2IDI0Ny4wMDggMTM1Ni4xNiAyNDIuMTEzWiIgZmlsbD0iIzBCNjY1NSIvPgo8cGF0aCBkPSJNMTA0Ny41NyAxMTYuMzU0QzEwOTIuNjUgMTEwLjUyMiAxMTMzLjk2IDE0Mi4yNzYgMTEzOS44OSAxODcuMzM1QzExNDUuODIgMjMyLjM5NCAxMTE0LjE0IDI3My43NDggMTA2OS4wOCAyNzkuNzc2QzEwMjMuODkgMjg1LjgyMiA5ODIuMzU3IDI1NC4wMzkgOTc2LjQxNCAyMDguODQyQzk3MC40NjIgMTYzLjY0NSAxMDAyLjM0IDEyMi4yMDQgMTA0Ny41NyAxMTYuMzU0Wk0xMDYwLjU4IDI0My4wMDdDMTA4NS40IDI0MS42ODUgMTEwNC40OCAyMjAuNTU2IDExMDMuMjcgMTk1Ljc0MUMxMTAyLjA1IDE3MC45MjYgMTA4MSAxNTEuNzYzIDEwNTYuMTYgMTUyLjg3NEMxMDMxLjE5IDE1My45OTEgMTAxMS44OCAxNzUuMTk0IDEwMTMuMDkgMjAwLjE1OUMxMDE0LjMyIDIyNS4xMjMgMTAzNS42MSAyNDQuMzM3IDEwNjAuNTggMjQzLjAwN1oiIGZpbGw9IiMwQjY2NTUiLz4KPHBhdGggZD0iTTcxNi43NDcgMTE4LjU5NEM3MTguNDg2IDExOC40MzYgNzIwLjI0MiAxMTguMzA3IDcyMS45ODkgMTE4LjIwNkM3NjguMzI4IDExNS41OTYgODAxLjM2IDE0OC42MSA4MDMuNDMzIDE5My41OTFDODAzLjczNSAyMDAuMzIzIDgwMi40NyAyMDguNzkzIDc5NC4wMzcgMjA5LjI2MUM3ODEuOTI5IDIwOS45MzQgNzY5LjcxNiAyMDkuNjMxIDc1Ny42MDggMjA5LjYxQzczMy4wMTggMjA5LjQ2OSA3MDguNDM2IDIwOS41MjQgNjgzLjg1MyAyMDkuNzc1QzY5Mi41NDEgMjQyLjg5NyA3MjIuOTE5IDI1My4xNTkgNzUyLjg0OSAyMzYuNDg2Qzc1OS40OTQgMjMyLjc4MSA3NjQuMTY0IDIyMy4yMjQgNzcyLjU0IDIyNi43OTRDNzc4LjMyMSAyMzIuNzE1IDc5NS4zMjYgMjQzLjAxNiA3ODYuNzg3IDI1Mi4wMTRDNzU4LjcyNyAyODEuNTgxIDcwOC4xMSAyODYuNDg1IDY3NS40MTEgMjYxLjY0NkM2NTkuMjY2IDI0OS4zMTEgNjQ4LjYyNiAyMzEuMTIgNjQ1Ljc5IDIxMS4wMDVDNjQyLjY5NiAxODguOTQyIDY0OC42OTcgMTY2LjU2OSA2NjIuNDE2IDE0OS4wMTJDNjc1LjgwOSAxMzEuNTkyIDY5NS4xMjEgMTIxLjQxNCA3MTYuNzQ3IDExOC41OTRaTTY4NS4yNjQgMTgwLjQzN0M2OTguNzg2IDE4MC44NSA3MTIuMzIyIDE4MC45OTkgNzI1Ljg1IDE4MC44ODNDNzM4LjQ4IDE4MC45MDIgNzUxLjA5NCAxODEuMTk3IDc2My42NzQgMTgwLjA1MkM3NjAuMjcgMTYwLjM4NiA3NDQuMzAxIDE1MC4zNTEgNzI1LjE0OCAxNTAuNDkyQzcwNC4xMzQgMTUyLjIyNyA2OTMuMjg0IDE2MC44NzYgNjg1LjI2NCAxODAuNDM3WiIgZmlsbD0iIzBCNjY1NSIvPgo8cGF0aCBkPSJNNDcyLjYzNyA1NC4yMzQ1QzQ3OS45MjMgNTQuNzcxNSA0OTMuNDQ3IDUyLjIyMjcgNDk2LjgzMyA1OS43NDY2QzUwNC4xMTQgNzUuOTI0OCA1MTAuNzYyIDkyLjQzNiA1MTcuNjQ5IDEwOC43OTVMNTU5LjA1NyAyMDcuMDA1QzU3MS4yNzkgMTg1LjM1OCA2MjEuODQzIDYyLjk0MSA2MjkuNTQyIDU2LjYzMTRDNjM0LjIzMiA1Mi43ODgzIDY1Mi43NzYgNTQuMjcwNCA2NTguNzUyIDU0Ljc1MTFDNjYxLjI4MiA1NC45NTUxIDY2Mi45OTQgNTUuNjc2NiA2NjQuNjc5IDU3LjYwNDNDNjY3LjA1NSA2My44NjI0IDY0Ny40MzEgMTAxLjE3MiA2NDMuNTMzIDExMC4zOTlDNjI5LjA5NSAxNDMuODI5IDYxMy4xNzEgMTc2LjczNyA1OTguMTAzIDIwOS45NzlDNTg4LjcyNCAyMzAuMDggNTgwLjYyNiAyNTAuNzY1IDU3MC4xNzYgMjcwLjM0NEM1NjYuODQ0IDI3Ni41ODcgNTUyLjk3MiAyNzUuNTI1IDU0Ny42NCAyNzIuMzQxQzU0NS45NTYgMjcwLjY0NyA1NDQuMTQ1IDI2Ni41OTggNTQzLjI2NCAyNjQuNTA4QzUxNi4wNTIgMTk5Ljk5NyA0ODkuNjcxIDEzNS4xMzQgNDYyLjY3MyA3MC41MzY3QzQ1Ny4yNTggNTcuNTgyMiA0NTguNTM0IDU1LjAxMDYgNDcyLjYzNyA1NC4yMzQ1WiIgZmlsbD0iIzBCNjY1NSIvPgo8cGF0aCBkPSJNMTk3LjA0OCAwLjY5NTQwOUMyMjkuNjE0IC00LjMwNTg1IDI2MC4wMDcgMTguMjEwNCAyNjQuNjk4IDUwLjgxMTZDMjY5LjM4OCA4My40MTM2IDI0Ni41NzMgMTEzLjU3OSAyMTMuOTE3IDExNy45NTRDMTgxLjcwMiAxMjIuMjcgMTUyLjAyMSA5OS44Mzc1IDE0Ny4zOTUgNjcuNjc2MkMxNDIuNzY3IDM1LjUxNCAxNjQuOTIxIDUuNjI5NzQgMTk3LjA0OCAwLjY5NTQwOVoiIGZpbGw9IiNFNUYwRUQiLz4KPHBhdGggZD0iTTkxMC40MTUgNTQuNzMxNUM5MTYuNjEyIDU0LjM1NjkgOTM1LjIwMSA1My4zOTcxIDk0MC42MjIgNTUuOTU2NUM5NDUuMzgyIDU4LjIwMjUgOTQ0LjA2NyA3NC40NDYgOTQ0LjE0MSA4MC4xMjIyQzk0NC4yNjMgOTAuMDU5NCA5NDQuMTk4IDEwMS4wNzYgOTQ0LjE0MSAxMTEuNDI3Qzk0My45MTIgMTQwLjkwNyA5NDMuODYzIDE3MC4zODggOTQzLjk3IDE5OS44NjlDOTQzLjk3IDIwNi40MyA5NDIuOSAyMjQuNDkzIDk0NC42OTYgMjI5LjYyQzk0OC43MjEgMjQxLjEwOSA5NjIuOTc1IDIzNy41MDIgOTY2LjM4IDIzOS4yODZDOTcwLjIyNSAyNDUuMDE4IDk2OC40MzcgMjU3LjEyOSA5NjguNzIzIDI2My45Qzk2OS4xMzEgMjczLjMxIDk2My4yMiAyNzMuODI2IDk1NS45MjIgMjc0LjczMkM5NTIuMjU2IDI3NS4yMzQgOTQ2Ljc5NCAyNzUuMjc2IDk0My4yMDIgMjc0Ljg1OEM5MzEuNzQgMjczLjU3NSA5MjEuMjkgMjY3LjY4NyA5MTQuMjYxIDI1OC41NDdDOTEwLjI0NCAyNTMuMzc2IDkwNS4xMDkgMjQyLjg1NyA5MDUuMDI3IDIzNi4yNzFDOTA0LjQxNSAxODYuODAyIDkwMy4yMzEgMTM3LjAwNiA5MDUuNDc2IDg3LjU1OEM5MDUuOTkgNzYuMTc2MiA5MDAuMjkyIDYyLjQzMjUgOTEwLjQxNSA1NC43MzE1WiIgZmlsbD0iIzBCNjY1NSIvPgo8cGF0aCBkPSJNODI1LjUwMSA1NC42MTIzQzgzMC42MDMgNTQuMzU2OSA4NTYuNDI2IDUyLjkyNDYgODU3LjczMyA1Ny41NDQ3Qzg2MC41NTcgNjcuNTExMyA4NTkuNDA2IDg2LjU3MjkgODU5LjM3NCA5Ny4zMjc5TDg1OS4zNTcgMTgxLjk4N0M4NTkuMzMzIDE5Ni45NjcgODU4LjkgMjEyLjEwNCA4NTkuNjY3IDIyNy4wMzZDODYwLjEyNSAyMzUuODk5IDg2NS44MzEgMjM3LjUxNiA4NzMuNTg3IDIzNy4xNDhDODkwLjUzNiAyMzYuMzQgODg1LjA1IDI1Ny4yODEgODg1LjE5NiAyNjcuNjc1Qzg4NS4yMjkgMjcwLjA0NSA4ODIuMzU1IDI3Mi4yNDQgODgwLjYxNiAyNzMuNDY2Qzg2My41NTMgMjc3LjE4NSA4NDQuMzE5IDI3NC44NTMgODMyLjA4MSAyNjEuMjQzQzgyNi42MTkgMjU1LjE0OSA4MjMuMDExIDI0Ny42MyA4MjEuNjcyIDIzOS41NjJDODIwLjM3NCAyMzEuNzUyIDgyMC44OCAyMTcuNzU5IDgyMC45MTMgMjA5LjQ0M0w4MjAuOTc4IDE2Mi44NjNMODIwLjkzNyAxMDAuMjVDODIwLjg4OCA4OC42MDUxIDgyMC42NjggNzYuNjc0OCA4MjAuOTM3IDY1LjA1MDdDODIxLjA2IDU5LjYzNzMgODIxLjY4OCA1Ny45NjkxIDgyNS41MDEgNTQuNjEyM1oiIGZpbGw9IiMwQjY2NTUiLz4KPHBhdGggZD0iTTEyMzkuMyAxMTguNTQzQzEyNDMuMjYgMTE3LjkxNSAxMjY1LjM1IDExNi42ODIgMTI2NC44MSAxMjQuMDk1QzEyNjQuMzMgMTMwLjcyNiAxMjYzLjE1IDE0NS4zNjggMTI1OS41NSAxNTAuODI1QzEyNTQuNzggMTU0LjYwNCAxMjQ2Ljc1IDE1My4yNzkgMTI0MC45MSAxNTMuNTMzQzExNzUuOTMgMTU2LjM1NiAxMjEzLjQ0IDI1OS43MiAxMTk4Ljk5IDI3Mi41NzNDMTE5NC4xNyAyNzYuODU2IDExNzUuNDcgMjc0LjcwMyAxMTY4Ljk1IDI3NC41MjZDMTE2OC4wNSAyNzQuMzM5IDExNjUuNTMgMjczLjIwNiAxMTY1LjA4IDI3Mi42NDVDMTE2MS43MSAyNjguNDg2IDExNjMuMDIgMjUyLjU0NyAxMTYzLjAzIDI0Ny42MTZWMjA2Ljg4QzExNjMuMDMgMTk3LjAzIDExNjIuMDQgMTI0LjI1IDExNjQuNjIgMTIxLjE0MkMxMTY3LjAzIDExOS40NjUgMTE2OS40NiAxMTguNjg5IDExNzIuNDggMTE4Ljc5OUMxMTk4LjI0IDExOS43MjcgMTIwMC4zOSAxMTMuNTU1IDEyMDAuNDMgMTQxLjI5MkMxMjAwLjgxIDE0MC43MDkgMTIwMS4yMSAxNDAuMTQgMTIwMS42NCAxMzkuNTg3QzEyMTEuMjIgMTI2Ljk1OCAxMjIzLjk0IDEyMC42NzIgMTIzOS4zIDExOC41NDNaIiBmaWxsPSIjMEI2NjU1Ii8+Cjwvc3ZnPgo='

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
 return <header className="vl-desktop-header"><div className="header-brand"><img className="header-logo" src={VELLORA_LOGO_DATA_URL} alt="Vellora"/></div><nav aria-label="Navegação principal">{routes.map(r=><button key={r} className={active===r?'active':''} aria-current={active===r?'page':undefined} onClick={()=>onActiveChange?.(r)}>{r}</button>)}</nav><div className="header-actions"><IconButton icon={<Icon name="Bell" size={20}/>} accessibleLabel="Notificações" size="Medium" style="Ghost" onClick={onNotifications}/><Avatar initials="MA" size="Medium" status="Online"/></div></header>
}

export const FigmaIcon=({name,size=24}:{name:IconName;size?:number})=><Icon name={name} size={size}/>

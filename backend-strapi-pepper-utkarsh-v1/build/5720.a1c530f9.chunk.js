"use strict";(self.webpackChunkutkarsh_pepper_assessment=self.webpackChunkutkarsh_pepper_assessment||[]).push([[5720],{55720:(K,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var a=_(92132),o=_(57693),n=_(5041),A=_(21272),R=_(55506),C=_(5409),l=_(23549),U=_(15126),v=_(63299),B=_(67014),t=_(59080),i=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),W=_(48940),P=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),N=_(51187),j=_(39404),V=_(58692),F=_(501),Z=_(57646),x=_(23120),X=_(44414),$=_(25962),e=_(14664),G=_(42588),H=_(90325),z=_(62785),Q=_(87443),c=_(41032),Y=_(22957),J=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(73652),s_=_(62965),O_=_(58330),M_=_(55151),D_=_(79077),P_=_(67031);const m=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},5041:(K,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(55506),n=_(67031),A=_(54894),R=_(17703),C=_(23549);const l="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:L,isLoading:I}=(0,C.m)(),d=(0,o.hN)(),{pathname:O}=(0,R.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=i??{};a.useEffect(()=>{if(L||I)return;const W=!n(M)&&!window.sessionStorage.getItem(`${l}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),W&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${O}`,"true")}})},[d,i,O,t,I,M,E,T,D,L])}}}]);

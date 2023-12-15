import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface LexiVault {
  'acceptCase' : ActorMethod<[Principal, number], number>,
  'caseLogin' : ActorMethod<[number], boolean>,
  'createReqToLawyer' : ActorMethod<[Array<string>], undefined>,
  'getAccepted' : ActorMethod<[], Array<quoteToLawyer>>,
  'getAllCases' : ActorMethod<[], Array<quoteToLawyer>>,
  'getRequests' : ActorMethod<[], Array<quoteToLawyer>>,
}
export interface quoteToLawyer {
  'client' : Principal,
  'clientName' : string,
  'caseType' : string,
  'dateTentative' : string,
  'caseBriefs' : string,
  'caseAgainst' : string,
  'InstrumentURI' : string,
}
export interface _SERVICE extends LexiVault {}

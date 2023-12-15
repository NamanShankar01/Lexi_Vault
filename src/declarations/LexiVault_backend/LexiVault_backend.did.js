export const idlFactory = ({ IDL }) => {
  const quoteToLawyer = IDL.Record({
    'client' : IDL.Principal,
    'clientName' : IDL.Text,
    'caseType' : IDL.Text,
    'dateTentative' : IDL.Text,
    'caseBriefs' : IDL.Text,
    'caseAgainst' : IDL.Text,
    'InstrumentURI' : IDL.Text,
  });
  const LexiVault = IDL.Service({
    'acceptCase' : IDL.Func([IDL.Principal, IDL.Nat32], [IDL.Nat32], []),
    'caseLogin' : IDL.Func([IDL.Nat32], [IDL.Bool], ['query']),
    'createReqToLawyer' : IDL.Func([IDL.Vec(IDL.Text)], [], []),
    'getAccepted' : IDL.Func([], [IDL.Vec(quoteToLawyer)], ['query']),
    'getAllCases' : IDL.Func([], [IDL.Vec(quoteToLawyer)], ['query']),
    'getRequests' : IDL.Func([], [IDL.Vec(quoteToLawyer)], ['query']),
  });
  return LexiVault;
};
export const init = ({ IDL }) => { return []; };

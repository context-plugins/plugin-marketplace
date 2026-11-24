import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * State code for sub-country geo-targeting (e.g., "CA"). Only valid with country "US". Paid add-on:
 * +2 credits, on top of the base cost and any other add-on
 * ([pricing](/guides/providers#state-level-targeting)).
 */
export const StateParameter = {
  Al: "AL",
  Ak: "AK",
  Az: "AZ",
  Ar: "AR",
  Ca: "CA",
  Co: "CO",
  Ct: "CT",
  De: "DE",
  Dc: "DC",
  Fl: "FL",
  Ga: "GA",
  Hi: "HI",
  Id: "ID",
  Il: "IL",
  In: "IN",
  Ia: "IA",
  Ks: "KS",
  Ky: "KY",
  La: "LA",
  Me: "ME",
  Md: "MD",
  Ma: "MA",
  Mi: "MI",
  Mn: "MN",
  Ms: "MS",
  Mo: "MO",
  Mt: "MT",
  Ne: "NE",
  Nv: "NV",
  Nh: "NH",
  Nj: "NJ",
  Nm: "NM",
  Ny: "NY",
  Nc: "NC",
  Nd: "ND",
  Oh: "OH",
  Ok: "OK",
  Or: "OR",
  Pa: "PA",
  Ri: "RI",
  Sc: "SC",
  Sd: "SD",
  Tn: "TN",
  Tx: "TX",
  Ut: "UT",
  Vt: "VT",
  Va: "VA",
  Wa: "WA",
  Wv: "WV",
  Wi: "WI",
  Wy: "WY",
} as const;
export type StateParameter = (typeof StateParameter)[keyof typeof StateParameter] | (string & {});

export const stateParameterSchema: EnumSchema<StateParameter> = s.enumOf<StateParameter>(StateParameter);

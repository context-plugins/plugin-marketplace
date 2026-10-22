import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AvsResponseCode = {
  Match: "match",
  NoMatch: "no_match",
  PartialMatchAddress: "partial_match_address",
  PartialMatchPostcode: "partial_match_postcode",
  PartialMatchName: "partial_match_name",
  Unavailable: "unavailable",
} as const;
export type AvsResponseCode = (typeof AvsResponseCode)[keyof typeof AvsResponseCode] | (string & {});

export const avsResponseCodeSchema: EnumSchema<AvsResponseCode> = s.enumOf<AvsResponseCode>(AvsResponseCode);

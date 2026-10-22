import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CvvResponseCode = {
  Match: "match",
  NoMatch: "no_match",
  Unavailable: "unavailable",
  NotProvided: "not_provided",
} as const;
export type CvvResponseCode = (typeof CvvResponseCode)[keyof typeof CvvResponseCode] | (string & {});

export const cvvResponseCodeSchema: EnumSchema<CvvResponseCode> = s.enumOf<CvvResponseCode>(CvvResponseCode);

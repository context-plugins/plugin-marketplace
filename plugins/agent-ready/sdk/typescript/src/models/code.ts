import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  NoResults: "NO_RESULTS",
  InvalidQuery: "INVALID_QUERY",
  RateLimited: "RATE_LIMITED",
  Timeout: "TIMEOUT",
  Internal: "INTERNAL",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);

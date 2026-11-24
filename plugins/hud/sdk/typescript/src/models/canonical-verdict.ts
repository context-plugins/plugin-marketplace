import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CanonicalVerdict = {
  Passed: "passed",
  Failed: "failed",
  Unknown: "unknown",
} as const;
export type CanonicalVerdict = (typeof CanonicalVerdict)[keyof typeof CanonicalVerdict] | (string & {});

export const canonicalVerdictSchema: EnumSchema<CanonicalVerdict> =
  s.enumOf<CanonicalVerdict>(CanonicalVerdict);

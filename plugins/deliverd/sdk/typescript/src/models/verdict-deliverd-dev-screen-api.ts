import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerdictDeliverdDevScreenApi = {
  Allow: "allow",
  Redact: "redact",
  Ask: "ask",
  Deny: "deny",
} as const;
export type VerdictDeliverdDevScreenApi =
  | (typeof VerdictDeliverdDevScreenApi)[keyof typeof VerdictDeliverdDevScreenApi]
  | (string & {});

export const verdictDeliverdDevScreenApiSchema: EnumSchema<VerdictDeliverdDevScreenApi> =
  s.enumOf<VerdictDeliverdDevScreenApi>(VerdictDeliverdDevScreenApi);

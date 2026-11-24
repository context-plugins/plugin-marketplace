import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PolicyJidScreenApi = {
  Strict: "strict",
  Balanced: "balanced",
  Permissive: "permissive",
} as const;
export type PolicyJidScreenApi = (typeof PolicyJidScreenApi)[keyof typeof PolicyJidScreenApi] | (string & {});

export const policyJidScreenApiSchema: EnumSchema<PolicyJidScreenApi> =
  s.enumOf<PolicyJidScreenApi>(PolicyJidScreenApi);

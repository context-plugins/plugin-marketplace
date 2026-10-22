import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Scope of the approval grant. Only applicable when isGranted is true and requestType is EXECUTION.
 */
export const GrantScope = {
  CurrentRequest: "CURRENT_REQUEST",
  CurrentSession: "CURRENT_SESSION",
  Always: "ALWAYS",
} as const;
export type GrantScope = (typeof GrantScope)[keyof typeof GrantScope] | (string & {});

export const grantScopeSchema: EnumSchema<GrantScope> = s.enumOf<GrantScope>(GrantScope);

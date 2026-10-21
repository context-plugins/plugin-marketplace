import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReleasePolicyScope = {
  /** List of environment keys this policy applies to */
  environmentKeys?: string[];
  /** List of flag tag keys this policy applies to */
  flagTagKeys?: string[];
};

export const releasePolicyScopeSchema: Schema<ReleasePolicyScope> = s.object<ReleasePolicyScope>({
  environmentKeys: s.optional(s.array(s.string())),
  flagTagKeys: s.optional(s.array(s.string())),
});

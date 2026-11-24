import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The policy to handle conflicts when migrating resources, defaults to SKIP if not
 * specified.
 */
export const ConflictPolicy = {
  ConflictPolicyUnspecified: "CONFLICT_POLICY_UNSPECIFIED",
  Skip: "SKIP",
  Overwrite: "OVERWRITE",
} as const;
export type ConflictPolicy = (typeof ConflictPolicy)[keyof typeof ConflictPolicy] | (string & {});

export const conflictPolicySchema: EnumSchema<ConflictPolicy> = s.enumOf<ConflictPolicy>(ConflictPolicy);

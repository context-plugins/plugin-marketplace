import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the scope for a ReadPermission, WritePermission, or GrantPermission object */
export const ScopeType = {
  Global: "GLOBAL",
  Own: "OWN",
} as const;
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType] | (string & {});

export const scopeTypeSchema: EnumSchema<ScopeType> = s.enumOf<ScopeType>(ScopeType);

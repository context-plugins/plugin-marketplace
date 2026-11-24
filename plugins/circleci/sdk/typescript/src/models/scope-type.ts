import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScopeType = {
  Project: "project",
} as const;
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType] | (string & {});

export const scopeTypeSchema: EnumSchema<ScopeType> = s.enumOf<ScopeType>(ScopeType);

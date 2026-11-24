import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Scope = {
  AssignedToMe: "assigned_to_me",
  AssignedToOthers: "assigned_to_others",
  All: "all",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);

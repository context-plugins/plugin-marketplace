import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Scope3 = {
  All: "all",
  Member: "member",
  Team: "team",
} as const;
export type Scope3 = (typeof Scope3)[keyof typeof Scope3] | (string & {});

export const scope3Schema: EnumSchema<Scope3> = s.enumOf<Scope3>(Scope3);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Immutable. The scope of this dimension. */
export const Scope1 = {
  DimensionScopeUnspecified: "DIMENSION_SCOPE_UNSPECIFIED",
  Event: "EVENT",
  User: "USER",
  Item: "ITEM",
} as const;
export type Scope1 = (typeof Scope1)[keyof typeof Scope1] | (string & {});

export const scope1Schema: EnumSchema<Scope1> = s.enumOf<Scope1>(Scope1);

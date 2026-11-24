import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. EnvironmentType selected for the environment. */
export const Type7 = {
  EnvironmentTypeUnspecified: "ENVIRONMENT_TYPE_UNSPECIFIED",
  Base: "BASE",
  Intermediate: "INTERMEDIATE",
  Comprehensive: "COMPREHENSIVE",
} as const;
export type Type7 = (typeof Type7)[keyof typeof Type7] | (string & {});

export const type7Schema: EnumSchema<Type7> = s.enumOf<Type7>(Type7);

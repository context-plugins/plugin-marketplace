import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of metric to use. */
export const Type2DoiTReportsApi = {
  Basic: "basic",
  Custom: "custom",
  Extended: "extended",
} as const;
export type Type2DoiTReportsApi =
  | (typeof Type2DoiTReportsApi)[keyof typeof Type2DoiTReportsApi]
  | (string & {});

export const type2DoiTReportsApiSchema: EnumSchema<Type2DoiTReportsApi> =
  s.enumOf<Type2DoiTReportsApi>(Type2DoiTReportsApi);

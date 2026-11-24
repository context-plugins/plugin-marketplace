import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Report type. */
export const Type1DoiTReportsApi = {
  Custom: "custom",
  Preset: "preset",
  Managed: "managed",
} as const;
export type Type1DoiTReportsApi =
  | (typeof Type1DoiTReportsApi)[keyof typeof Type1DoiTReportsApi]
  | (string & {});

export const type1DoiTReportsApiSchema: EnumSchema<Type1DoiTReportsApi> =
  s.enumOf<Type1DoiTReportsApi>(Type1DoiTReportsApi);

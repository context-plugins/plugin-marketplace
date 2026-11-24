import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The source type. */
export const Type1ApigeeProjectsApi = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  ApigeeX: "APIGEE_X",
} as const;
export type Type1ApigeeProjectsApi =
  | (typeof Type1ApigeeProjectsApi)[keyof typeof Type1ApigeeProjectsApi]
  | (string & {});

export const type1ApigeeProjectsApiSchema: EnumSchema<Type1ApigeeProjectsApi> =
  s.enumOf<Type1ApigeeProjectsApi>(Type1ApigeeProjectsApi);

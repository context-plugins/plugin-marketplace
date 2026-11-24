import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of the definition. */
export const TypeApigeeProjectsApi = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  Schema: "SCHEMA",
} as const;
export type TypeApigeeProjectsApi =
  | (typeof TypeApigeeProjectsApi)[keyof typeof TypeApigeeProjectsApi]
  | (string & {});

export const typeApigeeProjectsApiSchema: EnumSchema<TypeApigeeProjectsApi> =
  s.enumOf<TypeApigeeProjectsApi>(TypeApigeeProjectsApi);

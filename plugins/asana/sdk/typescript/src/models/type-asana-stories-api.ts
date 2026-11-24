import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeAsanaStoriesApi = {
  Comment: "comment",
  System: "system",
} as const;
export type TypeAsanaStoriesApi =
  | (typeof TypeAsanaStoriesApi)[keyof typeof TypeAsanaStoriesApi]
  | (string & {});

export const typeAsanaStoriesApiSchema: EnumSchema<TypeAsanaStoriesApi> =
  s.enumOf<TypeAsanaStoriesApi>(TypeAsanaStoriesApi);

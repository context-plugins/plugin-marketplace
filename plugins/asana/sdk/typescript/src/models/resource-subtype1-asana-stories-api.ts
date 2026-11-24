import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the custom field. Must be one of the given values. */
export const ResourceSubtype1AsanaStoriesApi = {
  Text: "text",
  Enum: "enum",
  MultiEnum: "multi_enum",
  Number: "number",
  Date: "date",
  People: "people",
} as const;
export type ResourceSubtype1AsanaStoriesApi =
  | (typeof ResourceSubtype1AsanaStoriesApi)[keyof typeof ResourceSubtype1AsanaStoriesApi]
  | (string & {});

export const resourceSubtype1AsanaStoriesApiSchema: EnumSchema<ResourceSubtype1AsanaStoriesApi> =
  s.enumOf<ResourceSubtype1AsanaStoriesApi>(ResourceSubtype1AsanaStoriesApi);

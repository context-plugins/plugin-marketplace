import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the custom field. Must be one of the given values. */
export const ResourceSubtypeAsanaCustomFieldSettingsApi = {
  Text: "text",
  Enum: "enum",
  MultiEnum: "multi_enum",
  Number: "number",
  Date: "date",
  People: "people",
} as const;
export type ResourceSubtypeAsanaCustomFieldSettingsApi =
  | (typeof ResourceSubtypeAsanaCustomFieldSettingsApi)[keyof typeof ResourceSubtypeAsanaCustomFieldSettingsApi]
  | (string & {});

export const resourceSubtypeAsanaCustomFieldSettingsApiSchema: EnumSchema<ResourceSubtypeAsanaCustomFieldSettingsApi> =
  s.enumOf<ResourceSubtypeAsanaCustomFieldSettingsApi>(ResourceSubtypeAsanaCustomFieldSettingsApi);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The metadata field type. */
export const Type6DoiTReportsApi = {
  Fixed: "fixed",
  Label: "label",
  Tag: "tag",
  ProjectLabel: "project_label",
  SystemLabel: "system_label",
} as const;
export type Type6DoiTReportsApi =
  | (typeof Type6DoiTReportsApi)[keyof typeof Type6DoiTReportsApi]
  | (string & {});

export const type6DoiTReportsApiSchema: EnumSchema<Type6DoiTReportsApi> =
  s.enumOf<Type6DoiTReportsApi>(Type6DoiTReportsApi);

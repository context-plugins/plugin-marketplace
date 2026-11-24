import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of the target. If split type is "attribution_group", then target type must be "attribution".
 * Otherwise split types and target types must be the same.
 */
export const Type4DoiTReportsApi = {
  Datetime: "datetime",
  Fixed: "fixed",
  Optional: "optional",
  Label: "label",
  Tag: "tag",
  ProjectLabel: "project_label",
  SystemLabel: "system_label",
  Attribution: "attribution",
  AttributionGroup: "attribution_group",
  Gke: "gke",
  GkeLabel: "gke_label",
} as const;
export type Type4DoiTReportsApi =
  | (typeof Type4DoiTReportsApi)[keyof typeof Type4DoiTReportsApi]
  | (string & {});

export const type4DoiTReportsApiSchema: EnumSchema<Type4DoiTReportsApi> =
  s.enumOf<Type4DoiTReportsApi>(Type4DoiTReportsApi);

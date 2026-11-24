import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the origin. */
export const Type3 = {
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
  Unallocated: "unallocated",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);

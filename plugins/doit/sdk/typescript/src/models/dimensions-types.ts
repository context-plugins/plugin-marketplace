import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Dimension filter type. Always pair `type` with `id` on scope filters. Discover valid `id` +
 * `type` pairs for your account with `GET /analytics/v1/dimensions`. `allocation_rule` replaces
 * `attribution`; `allocation` replaces `attribution_group`.
 */
export const DimensionsTypes = {
  Datetime: "datetime",
  Fixed: "fixed",
  Optional: "optional",
  Label: "label",
  Tag: "tag",
  ProjectLabel: "project_label",
  SystemLabel: "system_label",
  Attribution: "attribution",
  AttributionGroup: "attribution_group",
  Allocation: "allocation",
  AllocationRule: "allocation_rule",
  Gke: "gke",
  GkeLabel: "gke_label",
} as const;
export type DimensionsTypes = (typeof DimensionsTypes)[keyof typeof DimensionsTypes] | (string & {});

export const dimensionsTypesSchema: EnumSchema<DimensionsTypes> = s.enumOf<DimensionsTypes>(DimensionsTypes);

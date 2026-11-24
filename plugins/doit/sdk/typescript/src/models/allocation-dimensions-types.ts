import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Dimension filter type for allocation rule components. See `DimensionsTypes` for per-value
 * meanings. Allocation components do not support `allocation`, `attribution`, or
 * `attribution_group` types.
 */
export const AllocationDimensionsTypes = {
  Datetime: "datetime",
  Fixed: "fixed",
  Optional: "optional",
  Label: "label",
  Tag: "tag",
  ProjectLabel: "project_label",
  SystemLabel: "system_label",
  AllocationRule: "allocation_rule",
  Gke: "gke",
  GkeLabel: "gke_label",
} as const;
export type AllocationDimensionsTypes =
  | (typeof AllocationDimensionsTypes)[keyof typeof AllocationDimensionsTypes]
  | (string & {});

export const allocationDimensionsTypesSchema: EnumSchema<AllocationDimensionsTypes> =
  s.enumOf<AllocationDimensionsTypes>(AllocationDimensionsTypes);

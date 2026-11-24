import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The dimension type to read the value from. Label-map types (label, tag, project_label,
 * system_label, gke_label) extract the value of the given key; "fixed" extracts a raw table
 * dimension (for example project_id, service_description, region). Derived dimensions such as
 * credits are not extractable.
 */
export const TypeDoiTAllocationsApi = {
  Label: "label",
  Tag: "tag",
  ProjectLabel: "project_label",
  SystemLabel: "system_label",
  GkeLabel: "gke_label",
  Fixed: "fixed",
} as const;
export type TypeDoiTAllocationsApi =
  | (typeof TypeDoiTAllocationsApi)[keyof typeof TypeDoiTAllocationsApi]
  | (string & {});

export const typeDoiTAllocationsApiSchema: EnumSchema<TypeDoiTAllocationsApi> =
  s.enumOf<TypeDoiTAllocationsApi>(TypeDoiTAllocationsApi);

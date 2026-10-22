import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type41, type41Schema } from "./type41.js";
import { metadata4Schema, type Metadata4 } from "./unions/metadata4.js";
import { value2Schema, type Value2 } from "./unions/value2.js";

export type ModuleResponse = {
  /** Always `metrics-explorer.module`. @default Type41.MetricsExplorerModule */
  type?: Type41;
  /** The key for the module data entry. This can be used to filter the data for other modules. */
  key: string;
  /** The display name for the module data entry. */
  displayName: string;
  /**
   * The value of the metric calculation for the module data entry. The type depends on the metric.
   */
  value?: Value2;
  /**
   * Additional metadata for the module data entry. This is used to store additional information
   * useful for the UI.
   */
  metadata?: Metadata4;
};

export const moduleResponseSchema: Schema<ModuleResponse> = s.object<ModuleResponse>({
  type: s.defaulted(type41Schema, Type41.MetricsExplorerModule),
  key: s.string(),
  displayName: s.string(),
  value: s.optional(s.lazy(() => value2Schema)),
  metadata: s.optional(s.lazy(() => metadata4Schema)),
  _keysMap: {
    displayName: "display_name",
  },
});

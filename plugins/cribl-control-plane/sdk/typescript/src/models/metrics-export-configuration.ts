import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameFieldTypeSchema, type NameFieldType } from "./name-field-type.js";
import { labelFields2Schema, type LabelFields2 } from "./unions/label-fields2.js";

export type MetricsExportConfiguration = {
  /** Unique identifier for the Search Job that runs this Function. */
  searchJobId?: string;
  /** Unique identifier for the metrics Dataset. */
  dataset?: string;
  /** Reference to a field by its original text and parsed path segments. */
  nameField?: NameFieldType;
  /** Reference to a field by its original text and parsed path segments. */
  timeField?: NameFieldType;
  /** Reference to a field by its original text and parsed path segments. */
  valueField?: NameFieldType;
  /** Reference to a field by its original text and parsed path segments. */
  typeField?: NameFieldType;
  /**
   * Field references to attach as labels to each exported metric. Specify one field or a list of
   * fields.
   */
  labelFields?: LabelFields2;
  /**
   * If <code>true</code>, pass processed events to downstream Functions. If <code>false</code>,
   * emit export statistics.
   */
  tee?: boolean;
  /** Interval, in milliseconds, between export statistics updates. */
  flushMs?: number;
  /**
   * If <code>true</code>, emit export statistics only when processing completes. If
   * <code>false</code>, emit periodic statistics.
   */
  suppressPreviews?: boolean;
};

export const metricsExportConfigurationSchema: Schema<MetricsExportConfiguration> =
  s.object<MetricsExportConfiguration>({
    searchJobId: s.optional(s.string()),
    dataset: s.optional(s.string()),
    nameField: s.optional(s.lazy(() => nameFieldTypeSchema)),
    timeField: s.optional(s.lazy(() => nameFieldTypeSchema)),
    valueField: s.optional(s.lazy(() => nameFieldTypeSchema)),
    typeField: s.optional(s.lazy(() => nameFieldTypeSchema)),
    labelFields: s.optional(s.lazy(() => labelFields2Schema)),
    tee: s.optional(s.boolean()),
    flushMs: s.optional(s.float64()),
    suppressPreviews: s.optional(s.boolean()),
  });

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restrictedMetricTypeSchema, type RestrictedMetricType } from "./restricted-metric-type.js";

/** A metric actively restricted in creating the report. */
export type ActiveMetricRestriction = {
  /** The reason for this metric's restriction. */
  restrictedMetricTypes?: RestrictedMetricType[];
  /** The name of the restricted metric. */
  metricName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeMetricRestrictionSchema: Schema<ActiveMetricRestriction> =
  s.object<ActiveMetricRestriction>(
    {
      restrictedMetricTypes: s.optional(s.array(s.lazy(() => restrictedMetricTypeSchema))),
      metricName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

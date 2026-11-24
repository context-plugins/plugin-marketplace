import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { measurementUnitSchema, type MeasurementUnit } from "./measurement-unit.js";
import { restrictedMetricTypeSchema, type RestrictedMetricType } from "./restricted-metric-type.js";
import { scopeSchema, type Scope } from "./scope.js";

/** A definition for a custom metric. */
export type GoogleAnalyticsAdminV1BetaCustomMetric = {
  /**
   * Optional. Types of restricted data that this metric may contain. Required for metrics with
   * CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.
   */
  restrictedMetricType?: RestrictedMetricType[];
  /**
   * Identifier. Resource name for this CustomMetric resource. Format:
   * properties/{property}/customMetrics/{customMetric}
   */
  name?: string;
  /** Optional. Description for this custom dimension. Max length of 150 characters. */
  description?: string;
  /** Required. Immutable. The scope of this custom metric. */
  scope?: Scope;
  /** Required. The type for the custom metric's value. */
  measurementUnit?: MeasurementUnit;
  /**
   * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric,
   * then this is the event parameter name. May only contain alphanumeric and underscore charactes,
   * starting with a letter. Max length of 40 characters for event-scoped metrics.
   */
  parameterName?: string;
  /**
   * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82
   * characters, alphanumeric plus space and underscore starting with a letter. Legacy
   * system-generated display names may contain square brackets, but updates to this field will
   * never permit square brackets.
   */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaCustomMetricSchema: Schema<GoogleAnalyticsAdminV1BetaCustomMetric> =
  s.object<GoogleAnalyticsAdminV1BetaCustomMetric>(
    {
      restrictedMetricType: s.optional(s.array(s.lazy(() => restrictedMetricTypeSchema))),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      scope: s.optional(s.lazy(() => scopeSchema)),
      measurementUnit: s.optional(s.lazy(() => measurementUnitSchema)),
      parameterName: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

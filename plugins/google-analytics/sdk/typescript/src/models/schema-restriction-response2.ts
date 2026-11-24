import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeMetricRestrictionSchema, type ActiveMetricRestriction } from "./active-metric-restriction.js";

/**
 * Describes the schema restrictions actively enforced in creating this report. To learn more, see
 * [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).
 */
export type SchemaRestrictionResponse2 = {
  /**
   * All restrictions actively enforced in creating the report. For example, `purchaseRevenue`
   * always has the restriction type `REVENUE_DATA`. However, this active response restriction is
   * only populated if the user's custom role disallows access to `REVENUE_DATA`.
   */
  activeMetricRestrictions?: ActiveMetricRestriction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaRestrictionResponse2Schema: Schema<SchemaRestrictionResponse2> =
  s.object<SchemaRestrictionResponse2>(
    {
      activeMetricRestrictions: s.optional(s.array(s.lazy(() => activeMetricRestrictionSchema))),
    },
    { additionalProperties: s.json() },
  );

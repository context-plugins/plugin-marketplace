import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bigQueryClustering2Schema, type BigQueryClustering2 } from "./big-query-clustering2.js";
import { bigQueryPartitioning2Schema, type BigQueryPartitioning2 } from "./big-query-partitioning2.js";

/** A customization rule to apply to a set of objects. */
export type CustomizationRule = {
  /** BigQuery partitioning rule. */
  bigqueryPartitioning?: BigQueryPartitioning2;
  /** BigQuery clustering rule. */
  bigqueryClustering?: BigQueryClustering2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customizationRuleSchema: Schema<CustomizationRule> = s.object<CustomizationRule>(
  {
    bigqueryPartitioning: s.optional(s.lazy(() => bigQueryPartitioning2Schema)),
    bigqueryClustering: s.optional(s.lazy(() => bigQueryClustering2Schema)),
  },
  { additionalProperties: s.json() },
);

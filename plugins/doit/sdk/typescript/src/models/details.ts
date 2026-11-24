import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional metadata about the result. */
export type Details = {
  /**
   * Display aliases for values that appear in `rows`, keyed by dimension id and then by the stored
   * value (for example `{"fixed:cloud_provider": {"datadog_prod": "Datadog (prod)"}}`). Rows keep
   * the stored values so they can be fed back into filters; apply the alias only when presenting a
   * value. Present only when the customer has renamed a DataHub dataset whose dimension is part of
   * the report.
   */
  valueAliases?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailsSchema: Schema<Details> = s.object<Details>(
  {
    valueAliases: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);

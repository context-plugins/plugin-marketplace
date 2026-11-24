import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AggregateDiffDiagnosticsV4 = {
  diff?: number;
  diffPercent?: number;
  function?: string;
  sourceCheckRowsTested?: number;
  sourceDatasetRowsTested?: number;
  sourceValue?: number;
  targetCheckRowsTested?: number;
  targetDatasetRowsTested?: number;
  targetValue?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aggregateDiffDiagnosticsV4Schema: Schema<AggregateDiffDiagnosticsV4> =
  s.object<AggregateDiffDiagnosticsV4>(
    {
      diff: s.optional(s.float64()),
      diffPercent: s.optional(s.float64()),
      function: s.optional(s.string()),
      sourceCheckRowsTested: s.optional(s.int()),
      sourceDatasetRowsTested: s.optional(s.int()),
      sourceValue: s.optional(s.float64()),
      targetCheckRowsTested: s.optional(s.int()),
      targetDatasetRowsTested: s.optional(s.int()),
      targetValue: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );

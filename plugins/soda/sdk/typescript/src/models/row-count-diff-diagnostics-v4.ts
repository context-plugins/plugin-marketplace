import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RowCountDiffDiagnosticsV4 = {
  rowCountDiff?: number;
  rowCountDiffPercent?: number;
  sourceCheckRowsTested?: number;
  sourceDatasetRowsTested?: number;
  targetCheckRowsTested?: number;
  targetDatasetRowsTested?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rowCountDiffDiagnosticsV4Schema: Schema<RowCountDiffDiagnosticsV4> =
  s.object<RowCountDiffDiagnosticsV4>(
    {
      rowCountDiff: s.optional(s.int()),
      rowCountDiffPercent: s.optional(s.float64()),
      sourceCheckRowsTested: s.optional(s.int()),
      sourceDatasetRowsTested: s.optional(s.int()),
      targetCheckRowsTested: s.optional(s.int()),
      targetDatasetRowsTested: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );

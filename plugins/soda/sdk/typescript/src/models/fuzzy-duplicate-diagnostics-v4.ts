import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FuzzyDuplicateDiagnosticsV4 = {
  candidateRowsScored?: number;
  checkRowsTested?: number;
  clusterCount?: number;
  datasetRowsTested?: number;
  failedRowsCount?: number;
  failedRowsDataQuery?: string;
  failedRowsKeysQuery?: string;
  failedRowsSourceQuery?: string;
  fuzzyDuplicateCount?: number;
  fuzzyDuplicatePercent?: number;
  meanConfidence?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fuzzyDuplicateDiagnosticsV4Schema: Schema<FuzzyDuplicateDiagnosticsV4> =
  s.object<FuzzyDuplicateDiagnosticsV4>(
    {
      candidateRowsScored: s.optional(s.int()),
      checkRowsTested: s.optional(s.int()),
      clusterCount: s.optional(s.int()),
      datasetRowsTested: s.optional(s.int()),
      failedRowsCount: s.optional(s.int()),
      failedRowsDataQuery: s.optional(s.string()),
      failedRowsKeysQuery: s.optional(s.string()),
      failedRowsSourceQuery: s.optional(s.string()),
      fuzzyDuplicateCount: s.optional(s.int()),
      fuzzyDuplicatePercent: s.optional(s.float64()),
      meanConfidence: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );

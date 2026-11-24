import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MissingDiagnosticsV4 = {
  checkRowsTested?: number;
  datasetRowsTested?: number;
  failedRowsCount?: number;
  failedRowsDataQuery?: string;
  failedRowsKeysQuery?: string;
  failedRowsPercent?: number;
  failedRowsSourceQuery?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const missingDiagnosticsV4Schema: Schema<MissingDiagnosticsV4> = s.object<MissingDiagnosticsV4>(
  {
    checkRowsTested: s.optional(s.int()),
    datasetRowsTested: s.optional(s.int()),
    failedRowsCount: s.optional(s.int()),
    failedRowsDataQuery: s.optional(s.string()),
    failedRowsKeysQuery: s.optional(s.string()),
    failedRowsPercent: s.optional(s.float64()),
    failedRowsSourceQuery: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

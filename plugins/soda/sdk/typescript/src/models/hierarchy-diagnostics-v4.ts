import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HierarchyDiagnosticsV4 = {
  brokenPathCount?: number;
  checkRowsTested?: number;
  datasetRowsTested?: number;
  failedRowsCount?: number;
  failedRowsDataQuery?: string;
  failedRowsKeysQuery?: string;
  failedRowsSourceQuery?: string;
  invalidValueCount?: number;
  missingValueCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hierarchyDiagnosticsV4Schema: Schema<HierarchyDiagnosticsV4> = s.object<HierarchyDiagnosticsV4>(
  {
    brokenPathCount: s.optional(s.int()),
    checkRowsTested: s.optional(s.int()),
    datasetRowsTested: s.optional(s.int()),
    failedRowsCount: s.optional(s.int()),
    failedRowsDataQuery: s.optional(s.string()),
    failedRowsKeysQuery: s.optional(s.string()),
    failedRowsSourceQuery: s.optional(s.string()),
    invalidValueCount: s.optional(s.int()),
    missingValueCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);

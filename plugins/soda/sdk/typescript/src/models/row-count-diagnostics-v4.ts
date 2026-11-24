import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RowCountDiagnosticsV4 = {
  checkRowsTested?: number;
  datasetRowsTested?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rowCountDiagnosticsV4Schema: Schema<RowCountDiagnosticsV4> = s.object<RowCountDiagnosticsV4>(
  {
    checkRowsTested: s.optional(s.int()),
    datasetRowsTested: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);

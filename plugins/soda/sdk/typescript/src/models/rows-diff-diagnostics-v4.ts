import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RowsDiffDiagnosticsV4 = {
  changed?: number;
  diffCount?: number;
  diffPercent?: number;
  exclusiveInSource?: number;
  exclusiveInTarget?: number;
  sourceCheckRowsTested?: number;
  sourceDatasetRowsTested?: number;
  targetCheckRowsTested?: number;
  targetDatasetRowsTested?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rowsDiffDiagnosticsV4Schema: Schema<RowsDiffDiagnosticsV4> = s.object<RowsDiffDiagnosticsV4>(
  {
    changed: s.optional(s.int()),
    diffCount: s.optional(s.int()),
    diffPercent: s.optional(s.float64()),
    exclusiveInSource: s.optional(s.int()),
    exclusiveInTarget: s.optional(s.int()),
    sourceCheckRowsTested: s.optional(s.int()),
    sourceDatasetRowsTested: s.optional(s.int()),
    targetCheckRowsTested: s.optional(s.int()),
    targetDatasetRowsTested: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);

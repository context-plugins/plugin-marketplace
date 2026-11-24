import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DuplicateDiffDiagnosticsV4 = {
  duplicateCountDiff?: number;
  duplicateDiffPercent?: number;
  sourceCheckRowsTested?: number;
  sourceDatasetRowsTested?: number;
  sourceDuplicateCount?: number;
  targetCheckRowsTested?: number;
  targetDatasetRowsTested?: number;
  targetDuplicateCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const duplicateDiffDiagnosticsV4Schema: Schema<DuplicateDiffDiagnosticsV4> =
  s.object<DuplicateDiffDiagnosticsV4>(
    {
      duplicateCountDiff: s.optional(s.int()),
      duplicateDiffPercent: s.optional(s.float64()),
      sourceCheckRowsTested: s.optional(s.int()),
      sourceDatasetRowsTested: s.optional(s.int()),
      sourceDuplicateCount: s.optional(s.int()),
      targetCheckRowsTested: s.optional(s.int()),
      targetDatasetRowsTested: s.optional(s.int()),
      targetDuplicateCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );

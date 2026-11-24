import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  freshnessDiffDiagnosticsV4UnitOfTimeDtoSchema,
  type FreshnessDiffDiagnosticsV4UnitOfTimeDto,
} from "./freshness-diff-diagnostics-v4-unit-of-time-dto.js";

export type FreshnessDiffDiagnosticsV4 = {
  freshnessDiff?: number;
  freshnessDiffUnit?: FreshnessDiffDiagnosticsV4UnitOfTimeDto;
  sourceCheckRowsTested?: number;
  sourceDatasetRowsTested?: number;
  sourceMaxTimestamp?: Date;
  sourceMaxTimestampUtc?: Date;
  targetCheckRowsTested?: number;
  targetDatasetRowsTested?: number;
  targetMaxTimestamp?: Date;
  targetMaxTimestampUtc?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const freshnessDiffDiagnosticsV4Schema: Schema<FreshnessDiffDiagnosticsV4> =
  s.object<FreshnessDiffDiagnosticsV4>(
    {
      freshnessDiff: s.optional(s.int()),
      freshnessDiffUnit: s.optional(s.lazy(() => freshnessDiffDiagnosticsV4UnitOfTimeDtoSchema)),
      sourceCheckRowsTested: s.optional(s.int()),
      sourceDatasetRowsTested: s.optional(s.int()),
      sourceMaxTimestamp: s.optional(s.dateTime()),
      sourceMaxTimestampUtc: s.optional(s.dateTime()),
      targetCheckRowsTested: s.optional(s.int()),
      targetDatasetRowsTested: s.optional(s.int()),
      targetMaxTimestamp: s.optional(s.dateTime()),
      targetMaxTimestampUtc: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );

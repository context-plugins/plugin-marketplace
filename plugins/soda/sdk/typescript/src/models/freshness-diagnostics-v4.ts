import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FreshnessDiagnosticsV4 = {
  actualTimestamp?: Date;
  actualTimestampUtc?: Date;
  datasetRowsTested?: number;
  expectedTimestamp?: Date;
  expectedTimestampUtc?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const freshnessDiagnosticsV4Schema: Schema<FreshnessDiagnosticsV4> = s.object<FreshnessDiagnosticsV4>(
  {
    actualTimestamp: s.optional(s.dateTime()),
    actualTimestampUtc: s.optional(s.dateTime()),
    datasetRowsTested: s.optional(s.int()),
    expectedTimestamp: s.optional(s.dateTime()),
    expectedTimestampUtc: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);

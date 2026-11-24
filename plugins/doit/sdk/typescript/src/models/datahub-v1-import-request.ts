import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1ImportRequest = {
  /** Existing dataset (provider) name. */
  provider: string;
  /** Versioned schema template of the records. */
  schemaTemplate: string;
  periodStart: string;
  periodEnd: string;
  /** Same semantics as the `replace` field of the CSV upload. @default false */
  replace?: boolean;
  /**
   * One object per source row; keys are the template's CSV column names. Decimals may be strings or
   * numbers.
   */
  records: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1ImportRequestSchema: Schema<DatahubV1ImportRequest> = s.object<DatahubV1ImportRequest>(
  {
    provider: s.string(),
    schemaTemplate: s.string(),
    periodStart: s.dateOnly(),
    periodEnd: s.dateOnly(),
    replace: s.defaulted(s.boolean(), false),
    records: s.array(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);

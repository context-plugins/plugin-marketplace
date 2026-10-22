import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Format of data inside the Kinesis Stream records. Gzip compression is automatically detected.
 * Cloudwatch Logs records become one event per log event, keeping the event id, message type, log
 * group, log stream, owner, and subscription filters; other fields are dropped.
 */
export const RecordDataFormat8 = {
  Cribl: "cribl",
  Ndjson: "ndjson",
  Cloudwatch: "cloudwatch",
  Line: "line",
} as const;
export type RecordDataFormat8 = (typeof RecordDataFormat8)[keyof typeof RecordDataFormat8] | (string & {});

export const recordDataFormat8Schema: EnumSchema<RecordDataFormat8> =
  s.enumOf<RecordDataFormat8>(RecordDataFormat8);

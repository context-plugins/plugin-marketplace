import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format to use to serialize events before writing to the Event Hubs Kafka brokers */
export const RecordDataFormat = {
  Json: "json",
  Raw: "raw",
} as const;
export type RecordDataFormat = (typeof RecordDataFormat)[keyof typeof RecordDataFormat] | (string & {});

export const recordDataFormatSchema: EnumSchema<RecordDataFormat> =
  s.enumOf<RecordDataFormat>(RecordDataFormat);

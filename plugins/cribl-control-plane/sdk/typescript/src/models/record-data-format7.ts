import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format to use to serialize events before writing to Kafka. */
export const RecordDataFormat7 = {
  Json: "json",
  Raw: "raw",
  Protobuf: "protobuf",
} as const;
export type RecordDataFormat7 = (typeof RecordDataFormat7)[keyof typeof RecordDataFormat7] | (string & {});

export const recordDataFormat7Schema: EnumSchema<RecordDataFormat7> =
  s.enumOf<RecordDataFormat7>(RecordDataFormat7);

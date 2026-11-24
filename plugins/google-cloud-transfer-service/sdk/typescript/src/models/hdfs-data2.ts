import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. An HDFS cluster data source. */
export type HdfsData2 = {
  /** Root path to transfer files. */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hdfsData2Schema: Schema<HdfsData2> = s.object<HdfsData2>(
  {
    path: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

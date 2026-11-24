import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * An HdfsData resource specifies a path within an HDFS entity (e.g. a cluster). All
 * cluster-specific settings, such as namenodes and ports, are configured on the transfer agents
 * servicing requests, so HdfsData only contains the root path to the data in our transfer.
 */
export type HdfsData = {
  /** Root path to transfer files. */
  path?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hdfsDataSchema: Schema<HdfsData> = s.object<HdfsData>(
  {
    path: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

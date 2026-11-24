import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Encapsulates a data node as represented below: ``` { "identifier": { "names": [ "apiproxy" ],
 * "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [
 * 36.0 ] } ] }``` or ``` { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }```
 * Depending on whether a dimension is present in the query or not the data node type can be a
 * simple metric value or dimension identifier with list of metrics.
 */
export type GoogleCloudApigeeV1OptimizedStatsNode = {
  /** List of data values. */
  data?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OptimizedStatsNodeSchema: Schema<GoogleCloudApigeeV1OptimizedStatsNode> =
  s.object<GoogleCloudApigeeV1OptimizedStatsNode>(
    {
      data: s.optional(s.array(s.record(s.string(), s.unknown()))),
    },
    { additionalProperties: s.json() },
  );

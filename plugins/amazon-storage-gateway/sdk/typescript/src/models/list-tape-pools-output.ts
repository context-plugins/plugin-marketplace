import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { poolInfoSchema, type PoolInfo } from "./pool-info.js";

export type ListTapePoolsOutput = {
  /**
   * An array of PoolInfo objects, where each object describes a single custom tape pool. If there
   * are no custom tape pools, the PoolInfos is an empty array.
   */
  poolInfos?: PoolInfo[];
  /**
   * A string that indicates the position at which to begin the returned list of tape pools. Use the
   * marker in your next request to continue pagination of tape pools. If there are no more tape
   * pools to list, this element does not appear in the response body.
   */
  marker?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTapePoolsOutputSchema: Schema<ListTapePoolsOutput> = s.object<ListTapePoolsOutput>(
  {
    poolInfos: s.optional(s.array(s.lazy(() => poolInfoSchema))),
    marker: s.optional(s.string()),
    _keysMap: {
      poolInfos: "PoolInfos",
      marker: "Marker",
    },
  },
  { additionalProperties: s.json() },
);

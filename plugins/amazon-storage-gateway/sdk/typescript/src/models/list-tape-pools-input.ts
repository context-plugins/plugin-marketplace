import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTapePoolsInput = {
  /**
   * The Amazon Resource Name (ARN) of each of the custom tape pools you want to list. If you don't
   * specify a custom tape pool ARN, the response lists all custom tape pools.
   */
  poolArNs?: string[];
  /** A string that indicates the position at which to begin the returned list of tape pools. */
  marker?: string;
  /** An optional number limit for the tape pools in the list returned by this call. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTapePoolsInputSchema: Schema<ListTapePoolsInput> = s.object<ListTapePoolsInput>(
  {
    poolArNs: s.optional(s.array(s.string())),
    marker: s.optional(s.string()),
    limit: s.optional(s.int()),
    _keysMap: {
      poolArNs: "PoolARNs",
      marker: "Marker",
      limit: "Limit",
    },
  },
  { additionalProperties: s.json() },
);

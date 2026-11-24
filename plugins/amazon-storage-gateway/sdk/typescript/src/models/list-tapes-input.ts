import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTapesInput = {
  tapeArNs?: string[];
  /** A string that indicates the position at which to begin the returned list of tapes. */
  marker?: string;
  /** An optional number limit for the tapes in the list returned by this call. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTapesInputSchema: Schema<ListTapesInput> = s.object<ListTapesInput>(
  {
    tapeArNs: s.optional(s.array(s.string())),
    marker: s.optional(s.string()),
    limit: s.optional(s.int()),
    _keysMap: {
      tapeArNs: "TapeARNs",
      marker: "Marker",
      limit: "Limit",
    },
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListQueueTagsResult = {
  /** The list of all tags added to the specified queue. */
  tags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listQueueTagsResultSchema: Schema<ListQueueTagsResult> = s.object<ListQueueTagsResult>(
  {
    tags: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);

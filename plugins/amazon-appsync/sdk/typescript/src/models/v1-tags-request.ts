import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TagsRequest = {
  /** A TagMap object. */
  tags: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TagsRequestSchema: Schema<V1TagsRequest> = s.object<V1TagsRequest>(
  {
    tags: s.record(s.string(), s.string()),
  },
  { additionalProperties: s.json() },
);

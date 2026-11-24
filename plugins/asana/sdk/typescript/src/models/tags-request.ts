import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagRequestSchema, type TagRequest } from "./tag-request.js";

export type TagsRequest = {
  data?: TagRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsRequestSchema: Schema<TagsRequest> = s.object<TagsRequest>(
  {
    data: s.optional(s.lazy(() => tagRequestSchema)),
  },
  { additionalProperties: s.json() },
);

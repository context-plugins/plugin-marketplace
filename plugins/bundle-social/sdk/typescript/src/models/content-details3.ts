import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContentDetails3 = {
  videoId?: string;
  videoPublishedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentDetails3Schema: Schema<ContentDetails3> = s.object<ContentDetails3>(
  {
    videoId: s.optional(s.string()),
    videoPublishedAt: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

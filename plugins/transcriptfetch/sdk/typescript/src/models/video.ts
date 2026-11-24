import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Video = {
  videoId?: string;
  title?: string;
  thumbnailUrl?: string;
  duration?: number | null;
  channel?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const videoSchema: Schema<Video> = s.object<Video>(
  {
    videoId: s.optional(s.string()),
    title: s.optional(s.string()),
    thumbnailUrl: s.optional(s.string()),
    duration: s.optionalNullable(s.float64()),
    channel: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

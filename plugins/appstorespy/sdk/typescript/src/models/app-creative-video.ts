import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppCreativeVideo = {
  preview?: string;
  video?: string;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appCreativeVideoSchema: Schema<AppCreativeVideo> = s.object<AppCreativeVideo>(
  {
    preview: s.optional(s.string()),
    video: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

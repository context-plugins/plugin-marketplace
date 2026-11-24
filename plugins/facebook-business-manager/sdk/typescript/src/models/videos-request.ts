import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VideosRequest = {
  /** URL of the video file to upload */
  fileUrl?: string;
  /** Title of the video */
  title?: string;
  /** Description of the video */
  description?: string;
  /** Whether to publish the video immediately @default true */
  published?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const videosRequestProperties: s.Shape<VideosRequest> = {
  fileUrl: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  published: s.defaulted(s.boolean(), true),
  _keysMap: {
    fileUrl: "file_url",
  },
};

export const videosRequestInternalSchema: Schema<VideosRequest> = s.object<VideosRequest>(
  videosRequestProperties,
  { additionalProperties: s.json() },
);

export const videosRequestSchema: Schema<VideosRequest> = s.lazySchema(() =>
  s.object<VideosRequest>(
    {
      ...videosRequestProperties,
      fileUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);

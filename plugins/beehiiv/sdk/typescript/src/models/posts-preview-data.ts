import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostsPreviewData = {
  /**
   * A URL to the post's preview in the beehiiv app, parameterized by the given audience simulation.
   * Requires a beehiiv session with access to the publication.
   */
  previewUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postsPreviewDataSchema: Schema<PostsPreviewData> = s.object<PostsPreviewData>(
  {
    previewUrl: s.string(),
    _keysMap: {
      previewUrl: "preview_url",
    },
  },
  { additionalProperties: s.json() },
);

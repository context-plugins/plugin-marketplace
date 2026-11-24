import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostCreate = {
  /** The prefixed post id */
  id: string;
  /**
   * A stable URL to the post's email preview in the beehiiv app. Renders the current post content
   * on every visit. Requires a beehiiv session with access to the publication. The same URL is
   * returned on every create, update, or show. Supports optional query parameters to preview as a
   * specific audience: `platform` (`email` default, or `web`), `subscriber_type` (`free` default,
   * or `premium` - requires `tier_ids[]`), `tier_ids[]` (one or more tier ids, only used when
   * `subscriber_type=premium`), and `subscriber_id` (renders using that subscriber's real tier
   * memberships and takes precedence over `subscriber_type`/`tier_ids[]`).
   */
  previewUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postCreateSchema: Schema<PostCreate> = s.object<PostCreate>(
  {
    id: s.string(),
    previewUrl: s.optional(s.string()),
    _keysMap: {
      previewUrl: "preview_url",
    },
  },
  { additionalProperties: s.json() },
);

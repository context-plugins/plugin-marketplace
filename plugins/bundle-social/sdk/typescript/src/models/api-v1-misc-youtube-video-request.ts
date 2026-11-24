import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privacyStatus2Schema, type PrivacyStatus2 } from "./privacy-status2.js";

export type ApiV1MiscYoutubeVideoRequest = {
  teamId: string;
  /** Post ID for reference */
  postId: string;
  /** The updated video title */
  title?: string;
  /** The updated video description */
  description?: string;
  /** The updated tags */
  tags?: string[];
  /** The updated category ID */
  categoryId?: string;
  /** The updated privacy status */
  privacyStatus?: PrivacyStatus2;
  /** BCP-47 language code for the video's title and description, e.g. "en" or "pl". */
  defaultLanguage?: string;
  /** BCP-47 language code for the video's default audio track, e.g. "en" or "pl". */
  defaultAudioLanguage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubeVideoRequestProperties: s.Shape<ApiV1MiscYoutubeVideoRequest> = {
  teamId: s.string(),
  postId: s.string(),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  categoryId: s.optional(s.string()),
  privacyStatus: s.optional(s.lazy(() => privacyStatus2Schema)),
  defaultLanguage: s.optional(s.string()),
  defaultAudioLanguage: s.optional(s.string()),
};

export const apiV1MiscYoutubeVideoRequestInternalSchema: Schema<ApiV1MiscYoutubeVideoRequest> =
  s.object<ApiV1MiscYoutubeVideoRequest>(apiV1MiscYoutubeVideoRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubeVideoRequestSchema: Schema<ApiV1MiscYoutubeVideoRequest> = s.lazySchema(() =>
  s.object<ApiV1MiscYoutubeVideoRequest>(
    {
      ...apiV1MiscYoutubeVideoRequestProperties,
      defaultLanguage: s.optional(s.string().check(s.maxLength(35))),
      defaultAudioLanguage: s.optional(s.string().check(s.maxLength(35))),
    },
    { additionalProperties: s.json() },
  ),
);

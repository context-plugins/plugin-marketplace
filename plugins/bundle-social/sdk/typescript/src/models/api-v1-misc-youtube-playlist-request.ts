import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privacyStatusSchema, type PrivacyStatus } from "./privacy-status.js";

export type ApiV1MiscYoutubePlaylistRequest = {
  teamId: string;
  /**
   * bundle.social does not store this value and YouTube overites it everytime so you need to pass
   * it everytime
   */
  title: string;
  /**
   * bundle.social does not store this value and YouTube overites it everytime so you need to pass
   * it everytime
   */
  description: string;
  privacyStatus?: PrivacyStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscYoutubePlaylistRequestSchema: Schema<ApiV1MiscYoutubePlaylistRequest> =
  s.object<ApiV1MiscYoutubePlaylistRequest>(
    {
      teamId: s.string(),
      title: s.string(),
      description: s.string(),
      privacyStatus: s.optional(s.lazy(() => privacyStatusSchema)),
    },
    { additionalProperties: s.json() },
  );

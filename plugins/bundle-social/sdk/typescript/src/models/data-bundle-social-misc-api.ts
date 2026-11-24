import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaSchema, type Media } from "./media.js";

/** User data if exists, null otherwise */
export type DataBundleSocialMiscApi = {
  /** Instagram User ID */
  id: string;
  /** Instagram username */
  username: string;
  /** Number of followers */
  followersCount: number;
  /** Number of media posts */
  mediaCount: number;
  /** Profile picture URL if available */
  profilePictureUrl?: string;
  /** User biography if available */
  biography?: string;
  /** Full name if available */
  name?: string;
  /** Up to 12 recent public media items */
  media?: Media;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataBundleSocialMiscApiProperties: s.Shape<DataBundleSocialMiscApi> = {
  id: s.string(),
  username: s.string(),
  followersCount: s.float64(),
  mediaCount: s.float64(),
  profilePictureUrl: s.optional(s.string()),
  biography: s.optional(s.string()),
  name: s.optional(s.string()),
  media: s.optional(s.lazy(() => mediaSchema)),
  _keysMap: {
    followersCount: "followers_count",
    mediaCount: "media_count",
    profilePictureUrl: "profile_picture_url",
  },
};

export const dataBundleSocialMiscApiInternalSchema: Schema<DataBundleSocialMiscApi> =
  s.object<DataBundleSocialMiscApi>(dataBundleSocialMiscApiProperties, { additionalProperties: s.json() });

export const dataBundleSocialMiscApiSchema: Schema<DataBundleSocialMiscApi> = s.lazySchema(() =>
  s.object<DataBundleSocialMiscApi>(
    {
      ...dataBundleSocialMiscApiProperties,
      profilePictureUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);

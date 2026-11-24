import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User = {
  /** App-scoped user ID. */
  id?: string;
  /** Instagram username. */
  username?: string;
  /** Profile name. */
  name?: string;
  /** Profile bio text. */
  biography?: string;
  /** Website URL from profile. */
  website?: string;
  /** Profile picture URL. */
  profilePictureUrl?: string;
  /** Total followers. */
  followersCount?: number;
  /** Total accounts followed. */
  followsCount?: number;
  /** Total published media. */
  mediaCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSchema: Schema<User> = s.object<User>(
  {
    id: s.optional(s.string()),
    username: s.optional(s.string()),
    name: s.optional(s.string()),
    biography: s.optional(s.string()),
    website: s.optional(s.string()),
    profilePictureUrl: s.optional(s.string()),
    followersCount: s.optional(s.int()),
    followsCount: s.optional(s.int()),
    mediaCount: s.optional(s.int()),
    _keysMap: {
      profilePictureUrl: "profile_picture_url",
      followersCount: "followers_count",
      followsCount: "follows_count",
      mediaCount: "media_count",
    },
  },
  { additionalProperties: s.json() },
);

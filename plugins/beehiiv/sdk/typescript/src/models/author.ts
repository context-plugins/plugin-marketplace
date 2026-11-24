import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorSocialMediaLinksSchema, type AuthorSocialMediaLinks } from "./author-social-media-links.js";
import { authorType2Schema, type AuthorType2 } from "./author-type2.js";

export type Author = {
  /** The prefixed ID of the author (e.g. `guest_xxx` for guest authors, `user_xxx` for users). */
  id: string;
  /** The author type. */
  type: AuthorType2;
  /** The author display name. */
  name: string;
  /** The biography text for the author. */
  bio?: string;
  /** The profile image URL for the author. */
  bioImageUrl?: string;
  socialMediaLinks: AuthorSocialMediaLinks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorSchema: Schema<Author> = s.object<Author>(
  {
    id: s.string(),
    type: authorType2Schema,
    name: s.string(),
    bio: s.optional(s.string()),
    bioImageUrl: s.optional(s.string()),
    socialMediaLinks: authorSocialMediaLinksSchema,
    _keysMap: {
      bioImageUrl: "bio_image_url",
      socialMediaLinks: "social_media_links",
    },
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryListSchema, type CategoryList } from "./category-list.js";
import { coverInternalSchema, coverSchema, type Cover } from "./cover.js";
import { locationSchema, type Location } from "./location.js";
import { pictureInternalSchema, pictureSchema, type Picture } from "./picture.js";

export type Page = {
  /** The ID of the Page */
  id?: string;
  /** The name of the Page */
  name?: string;
  /** The primary category of the Page */
  category?: string;
  /** List of categories associated with the Page */
  categoryList?: CategoryList[];
  /** Short description of the Page */
  about?: string;
  /** Detailed description of the Page */
  description?: string;
  /** Total number of Page likes */
  fanCount?: number;
  /** Total number of Page followers */
  followersCount?: number;
  /** The URL of the Page on Facebook */
  link?: string;
  /** The website listed on the Page */
  website?: string;
  /** Phone number listed on the Page */
  phone?: string;
  /** Email addresses listed on the Page */
  emails?: string[];
  location?: Location;
  /** The Page cover photo */
  cover?: Cover;
  /** The Page profile picture */
  picture?: Picture;
  /** Verification status of the Page */
  verificationStatus?: string;
  /** Whether the Page is published and visible */
  isPublished?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pageProperties: s.Shape<Page> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  category: s.optional(s.string()),
  categoryList: s.optional(s.array(s.lazy(() => categoryListSchema))),
  about: s.optional(s.string()),
  description: s.optional(s.string()),
  fanCount: s.optional(s.int()),
  followersCount: s.optional(s.int()),
  link: s.optional(s.string()),
  website: s.optional(s.string()),
  phone: s.optional(s.string()),
  emails: s.optional(s.array(s.string())),
  location: s.optional(s.lazy(() => locationSchema)),
  cover: s.optional(s.lazy(() => coverInternalSchema)),
  picture: s.optional(s.lazy(() => pictureInternalSchema)),
  verificationStatus: s.optional(s.string()),
  isPublished: s.optional(s.boolean()),
  _keysMap: {
    categoryList: "category_list",
    fanCount: "fan_count",
    followersCount: "followers_count",
    verificationStatus: "verification_status",
    isPublished: "is_published",
  },
};

export const pageInternalSchema: Schema<Page> = s.object<Page>(pageProperties, {
  additionalProperties: s.json(),
});

export const pageSchema: Schema<Page> = s.lazySchema(() =>
  s.object<Page>(
    {
      ...pageProperties,
      link: s.optional(s.string().check(s.url())),
      website: s.optional(s.string().check(s.url())),
      cover: s.optional(s.lazy(() => coverSchema)),
      picture: s.optional(s.lazy(() => pictureSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

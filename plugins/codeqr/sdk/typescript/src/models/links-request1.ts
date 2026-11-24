import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geoSchema, type Geo } from "./geo.js";
import { rule1InternalSchema, rule1Schema, type Rule1 } from "./rule1.js";
import { tagIdsSchema, type TagIds } from "./unions/tag-ids.js";
import { tagNamesSchema, type TagNames } from "./unions/tag-names.js";

export type LinksRequest1 = {
  /** The destination URL of the short link. */
  url?: string;
  /**
   * The domain of the short link. If not provided, the main domain of the project will be used (or
   * `codeqr.link` if the project has no domains).
   */
  domain?: string;
  /** The slug of the short link. If not provided, a random 7-character slug will be generated. */
  key?: string;
  /**
   * This is the ID of the link in your database. If set, it can be used to identify the link in the
   * future. Must be prefixed with `ext_` when passed as a query parameter.
   */
  externalId?: string | null;
  /**
   * The prefix of the short link slug for randomly generated keys (for example, if the prefix is
   * `/c/`, the generated keys will be in the format `/c/:key`). Will be ignored if `key` is
   * provided.
   */
  prefix?: string;
  /** Whether to track conversions for the short link. @default false */
  trackConversion?: boolean;
  /** Whether this link should be used as a reusable template. @default false */
  useAsTemplate?: boolean;
  /** Whether the short link is archived. @default false */
  archived?: boolean;
  /**
   * The date and time when the short link will expire in ISO-8601 format. Must be in the future.
   */
  expiresAt?: Date | null;
  /** The URL to redirect to when the short link expires. */
  expiredUrl?: string | null;
  /** The password required to access the short link destination URL. */
  password?: string | null;
  /** Whether the short link uses the custom link preview feature. @default false */
  proxy?: boolean;
  /**
   * The title of the short link generated via `api.codeqr.io/metatags`. Will be used for custom
   * link preview if `proxy` is true.
   */
  title?: string | null;
  /**
   * The description of the short link generated via `api.codeqr.io/metatags`. Will be used for
   * custom link preview if `proxy` is true.
   */
  description?: string | null;
  /**
   * The image of the short link generated via `api.codeqr.io/metatags`. Will be used for custom
   * link preview if `proxy` is true.
   */
  image?: string | null;
  /** The video of the short link. */
  video?: string | null;
  /** Whether the short link uses link cloaking. @default false */
  rewrite?: boolean;
  /** The iOS destination URL for the short link for iOS device targeting. */
  ios?: string | null;
  /** The Android destination URL for the short link for Android device targeting. */
  android?: string | null;
  /**
   * Geographic targeting information for the short link in JSON format `{[COUNTRY]:
   * https://example.com }`.
   */
  geo?: Geo | null;
  /** Smart rules for conditional destination routing by request attribute. */
  rules?: Rule1[] | null;
  /**
   * Allow search engines to index your short link. Default is `false` if not provided. Learn more:
   * https://codeqr.link/noindex
   *
   * @default false
   */
  doIndex?: boolean;
  /**
   * An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click
   * event data.
   */
  webhookIds?: string[] | null;
  /** Whether the short link statistics are publicly accessible. @default false */
  publicStats?: boolean;
  /**
   * The unique ID of the tag assigned to the short link. This field is deprecated – use `tagIds`
   * instead.
   *
   * @deprecated
   */
  tagId?: string | null;
  /** The unique IDs of the tags assigned to the short link. */
  tagIds?: TagIds;
  /** The unique name of the tags assigned to the short link (case insensitive). */
  tagNames?: TagNames;
  /** The unique ID existing folder to assign the short link to. */
  folderId?: string | null;
  /** The comments for the short link. */
  comments?: string | null;
  /** Whether the short link is flexible. @default false */
  flexible?: boolean;
  /** Whether the short link has pre-redirection. @default false */
  preRedirection?: boolean;
  /** The ID of the page to redirect to before the link destination. */
  pageId?: string | null;
  /** The URL of the page to redirect to before the link destination. */
  pageUrl?: string | null;
  /** If the form is mandatory for the page. @default false */
  isFormMandatory?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const linksRequest1Properties: s.Shape<LinksRequest1> = {
  url: s.optional(s.string()),
  domain: s.optional(s.string()),
  key: s.optional(s.string()),
  externalId: s.optionalNullable(s.string()),
  prefix: s.optional(s.string()),
  trackConversion: s.defaulted(s.boolean(), false),
  useAsTemplate: s.defaulted(s.boolean(), false),
  archived: s.defaulted(s.boolean(), false),
  expiresAt: s.optionalNullable(s.dateTime()),
  expiredUrl: s.optionalNullable(s.string()),
  password: s.optionalNullable(s.string()),
  proxy: s.defaulted(s.boolean(), false),
  title: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  image: s.optionalNullable(s.string()),
  video: s.optionalNullable(s.string()),
  rewrite: s.defaulted(s.boolean(), false),
  ios: s.optionalNullable(s.string()),
  android: s.optionalNullable(s.string()),
  geo: s.optionalNullable(s.lazy(() => geoSchema)),
  rules: s.optionalNullable(s.array(s.lazy(() => rule1InternalSchema))),
  doIndex: s.defaulted(s.boolean(), false),
  webhookIds: s.optionalNullable(s.array(s.string())),
  publicStats: s.defaulted(s.boolean(), false),
  tagId: s.optionalNullable(s.string()),
  tagIds: s.optional(s.lazy(() => tagIdsSchema)),
  tagNames: s.optional(s.lazy(() => tagNamesSchema)),
  folderId: s.optionalNullable(s.string()),
  comments: s.optionalNullable(s.string()),
  flexible: s.defaulted(s.boolean(), false),
  preRedirection: s.defaulted(s.boolean(), false),
  pageId: s.optionalNullable(s.string()),
  pageUrl: s.optionalNullable(s.string()),
  isFormMandatory: s.defaulted(s.boolean(), false),
};

export const linksRequest1InternalSchema: Schema<LinksRequest1> = s.object<LinksRequest1>(
  linksRequest1Properties,
  { additionalProperties: s.json() },
);

export const linksRequest1Schema: Schema<LinksRequest1> = s.lazySchema(() =>
  s.object<LinksRequest1>(
    {
      ...linksRequest1Properties,
      externalId: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      rules: s.optionalNullable(s.array(s.lazy(() => rule1Schema)).check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);

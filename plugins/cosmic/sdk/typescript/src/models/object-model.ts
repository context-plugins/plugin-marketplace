import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { publishAtSchema, type PublishAt } from "./unions/publish-at.js";
import { unpublishAtSchema, type UnpublishAt } from "./unions/unpublish-at.js";

/** A single piece of content. Which properties are present depends on `props`. */
export type ObjectModel = {
  /** Unique identifier. */
  id?: string;
  /** Object type slug. */
  type?: string;
  title?: string;
  /**
   * Unique within the Object type. Localized versions of an Object share a slug and count as one
   * Object against plan limits.
   */
  slug?: string;
  status?: Status;
  /**
   * HTML content. Deprecated in v3; use a Metafield instead.
   *
   * @deprecated
   */
  content?: string | null;
  /**
   * Values of the Metafields defined on the Object type, keyed by Metafield `key`.
   *
   * The value shape follows the Metafield type, and differs between write and read for two of them:
   *
   * - Text, textarea, markdown, and HTML Metafields are strings. Number Metafields are numbers,
   *   switches are booleans, dates are ISO 8601 strings.
   * - Object Relationship Metafields are written as an Object `id` string (or an array of ids for
   *   the multiple variant) and returned as a nested Object (or array of Objects) once `depth` is
   *   at least 1.
   * - File and Image Metafields are written as a media `name` string (or an array of names) and
   *   returned as an object with `url` and `imgix_url`, plus `alt_text`, `width`, and `height` when
   *   requested via `props`.
   * - Repeater Metafields are arrays of objects keyed by the child Metafield keys.
   */
  metadata?: Record<string, unknown>;
  /** Bucket id. */
  bucket?: string;
  /** Media `name` of the Object thumbnail. Returned as a URL on read. */
  thumbnail?: string | null;
  /** Locale code, when the Object type has localization enabled. */
  locale?: string | null;
  createdAt?: Date;
  /** User id. */
  createdBy?: string;
  modifiedAt?: Date;
  /** User id. */
  modifiedBy?: string;
  publishedAt?: Date | null;
  /** UNIX millisecond timestamp for scheduled publishing. */
  publishAt?: PublishAt | null;
  /** UNIX millisecond timestamp for scheduled unpublishing. */
  unpublishAt?: UnpublishAt | null;
  /** User id. */
  assignedTo?: string | null;
  /** User id. */
  assignedBy?: string | null;
  assignedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectModelSchema: Schema<ObjectModel> = s.object<ObjectModel>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.string()),
    title: s.optional(s.string()),
    slug: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    content: s.optionalNullable(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    bucket: s.optional(s.string()),
    thumbnail: s.optionalNullable(s.string()),
    locale: s.optionalNullable(s.string()),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.string()),
    modifiedAt: s.optional(s.dateTime()),
    modifiedBy: s.optional(s.string()),
    publishedAt: s.optionalNullable(s.dateTime()),
    publishAt: s.optionalNullable(s.lazy(() => publishAtSchema)),
    unpublishAt: s.optionalNullable(s.lazy(() => unpublishAtSchema)),
    assignedTo: s.optionalNullable(s.string()),
    assignedBy: s.optionalNullable(s.string()),
    assignedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      createdBy: "created_by",
      modifiedAt: "modified_at",
      modifiedBy: "modified_by",
      publishedAt: "published_at",
      publishAt: "publish_at",
      unpublishAt: "unpublish_at",
      assignedTo: "assigned_to",
      assignedBy: "assigned_by",
      assignedAt: "assigned_at",
    },
  },
  { additionalProperties: s.json() },
);

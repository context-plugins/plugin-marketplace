import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** An immutable snapshot of an Object at a point in time. */
export type Revision = {
  id?: string;
  /** The Object this revision belongs to. */
  objectId?: string;
  type?: string;
  title?: string;
  slug?: string;
  status?: Status;
  /**
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
  bucket?: string;
  thumbnail?: string | null;
  locale?: string | null;
  createdAt?: Date;
  createdBy?: string;
  modifiedAt?: Date;
  publishedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const revisionSchema: Schema<Revision> = s.object<Revision>(
  {
    id: s.optional(s.string()),
    objectId: s.optional(s.string()),
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
    publishedAt: s.optionalNullable(s.dateTime()),
    _keysMap: {
      objectId: "object_id",
      createdAt: "created_at",
      createdBy: "created_by",
      modifiedAt: "modified_at",
      publishedAt: "published_at",
    },
  },
  { additionalProperties: s.json() },
);

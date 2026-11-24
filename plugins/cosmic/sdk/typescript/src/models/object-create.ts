import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { publishAt1Schema, type PublishAt1 } from "./unions/publish-at1.js";
import { unpublishAt1Schema, type UnpublishAt1 } from "./unions/unpublish-at1.js";

export type ObjectCreate = {
  title: string;
  /** Object type slug. The type must already exist. */
  type: string;
  /** Derived from `title` when omitted. */
  slug?: string;
  status?: Status;
  /**
   * @deprecated
   */
  content?: string;
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
  /** Media `name`. The media must already exist in the Bucket. */
  thumbnail?: string;
  locale?: string;
  /** UNIX millisecond timestamp. */
  publishAt?: PublishAt1;
  /** UNIX millisecond timestamp. */
  unpublishAt?: UnpublishAt1;
  /** Fire the corresponding Object webhook. */
  triggerWebhook?: boolean;
};

export const objectCreateSchema: Schema<ObjectCreate> = s.object<ObjectCreate>({
  title: s.string(),
  type: s.string(),
  slug: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSchema)),
  content: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  thumbnail: s.optional(s.string()),
  locale: s.optional(s.string()),
  publishAt: s.optional(s.lazy(() => publishAt1Schema)),
  unpublishAt: s.optional(s.lazy(() => unpublishAt1Schema)),
  triggerWebhook: s.optional(s.boolean()),
  _keysMap: {
    publishAt: "publish_at",
    unpublishAt: "unpublish_at",
    triggerWebhook: "trigger_webhook",
  },
});

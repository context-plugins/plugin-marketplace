import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Status, statusSchema } from "./status.js";
import { publishAtSchema, type PublishAt } from "./unions/publish-at.js";
import { unpublishAtSchema, type UnpublishAt } from "./unions/unpublish-at.js";

/** Creates a draft revision. Publish by updating the Object with `status: published`. */
export type RevisionCreate = {
  title?: string;
  slug?: string;
  /** @default Status.Draft */
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
  /** Media `name`. */
  thumbnail?: string;
  locale?: string;
  /** UNIX millisecond timestamp. */
  publishAt?: PublishAt;
  /** UNIX millisecond timestamp. */
  unpublishAt?: UnpublishAt;
  triggerWebhook?: boolean;
};

export const revisionCreateSchema: Schema<RevisionCreate> = s.object<RevisionCreate>({
  title: s.optional(s.string()),
  slug: s.optional(s.string()),
  status: s.defaulted(statusSchema, Status.Draft),
  content: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  thumbnail: s.optional(s.string()),
  locale: s.optional(s.string()),
  publishAt: s.optional(s.lazy(() => publishAtSchema)),
  unpublishAt: s.optional(s.lazy(() => unpublishAtSchema)),
  triggerWebhook: s.optional(s.boolean()),
  _keysMap: {
    publishAt: "publish_at",
    unpublishAt: "unpublish_at",
    triggerWebhook: "trigger_webhook",
  },
});

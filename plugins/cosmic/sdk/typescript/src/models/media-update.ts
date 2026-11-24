import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Only the properties sent are changed. The underlying file cannot be replaced through this
 * endpoint.
 */
export type MediaUpdate = {
  folder?: string;
  /** Images only. */
  altText?: string;
  metadata?: Record<string, unknown>;
  triggerWebhook?: boolean;
};

export const mediaUpdateSchema: Schema<MediaUpdate> = s.object<MediaUpdate>({
  folder: s.optional(s.string()),
  altText: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  triggerWebhook: s.optional(s.boolean()),
  _keysMap: {
    altText: "alt_text",
    triggerWebhook: "trigger_webhook",
  },
});

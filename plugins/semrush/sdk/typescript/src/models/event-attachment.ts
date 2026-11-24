import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Event additional files */
export type EventAttachment = {
  /** File name */
  name?: string;
  /** File content mime type */
  mime?: string;
  /** File content in Base64 */
  content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventAttachmentSchema: Schema<EventAttachment> = s.object<EventAttachment>(
  {
    name: s.optional(s.string()),
    mime: s.optional(s.string()),
    content: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

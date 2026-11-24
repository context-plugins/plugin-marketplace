import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";

export type Content = {
  attachment?: Attachment;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentSchema: Schema<Content> = s.object<Content>(
  {
    attachment: s.optional(s.lazy(() => attachmentSchema)),
  },
  { additionalProperties: s.json() },
);

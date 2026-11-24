import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Attachment = {
  name: string;
  url: string;
  lastModifiedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>(
  {
    name: s.string(),
    url: s.string(),
    lastModifiedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);

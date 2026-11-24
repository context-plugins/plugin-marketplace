import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Image = {
  mime?: string;
  link?: string;
  contextLink?: string;
  height?: number;
  width?: number;
  byteSize?: number;
  thumbnailLink?: string;
  accentColor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imageSchema: Schema<Image> = s.object<Image>(
  {
    mime: s.optional(s.string()),
    link: s.optional(s.string()),
    contextLink: s.optional(s.string()),
    height: s.optional(s.int()),
    width: s.optional(s.int()),
    byteSize: s.optional(s.int()),
    thumbnailLink: s.optional(s.string()),
    accentColor: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

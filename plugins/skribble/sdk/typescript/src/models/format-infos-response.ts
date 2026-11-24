import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FormatInfosResponse = {
  /** File Type */
  fileType?: string;
  /** (Optional) File Type Quality */
  quality?: string;
  /** (Optional) File producer */
  producer?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formatInfosResponseSchema: Schema<FormatInfosResponse> = s.object<FormatInfosResponse>(
  {
    fileType: s.optional(s.string()),
    quality: s.optional(s.string()),
    producer: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

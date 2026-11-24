import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Image = {
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imageSchema: Schema<Image> = s.object<Image>(
  {
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

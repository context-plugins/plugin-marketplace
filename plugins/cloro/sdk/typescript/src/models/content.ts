import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Content = {
  type?: string;
  textDelta?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentSchema: Schema<Content> = s.object<Content>(
  {
    type: s.optional(s.string()),
    textDelta: s.optional(s.string()),
    _keysMap: {
      textDelta: "text_delta",
    },
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TextSegment = {
  /** The text content. */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textSegmentSchema: Schema<TextSegment> = s.object<TextSegment>(
  {
    text: s.string(),
    _keysMap: {
      text: "Text",
    },
  },
  { additionalProperties: s.json() },
);

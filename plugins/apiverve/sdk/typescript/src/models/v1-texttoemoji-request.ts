import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TexttoemojiRequest = {
  /** The text you want converted into emojis */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TexttoemojiRequestSchema: Schema<V1TexttoemojiRequest> = s.object<V1TexttoemojiRequest>(
  {
    text: s.string(),
  },
  { additionalProperties: s.json() },
);

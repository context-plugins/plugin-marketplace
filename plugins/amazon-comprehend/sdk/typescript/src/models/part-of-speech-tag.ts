import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tag2Schema, type Tag2 } from "./tag2.js";

export type PartOfSpeechTag = {
  /** Identifies the part of speech that the token represents. */
  tag?: Tag2;
  /** The confidence that Amazon Comprehend has that the part of speech was correctly identified. */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partOfSpeechTagSchema: Schema<PartOfSpeechTag> = s.object<PartOfSpeechTag>(
  {
    tag: s.optional(s.lazy(() => tag2Schema)),
    score: s.optional(s.float64()),
    _keysMap: {
      tag: "Tag",
      score: "Score",
    },
  },
  { additionalProperties: s.json() },
);

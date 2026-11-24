import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entitySchema, type Entity } from "./entity.js";
import { itemSchema, type Item } from "./item.js";

export type Alternative = {
  /** Contains transcribed text. */
  transcript?: string;
  /** Contains words, phrases, or punctuation marks in your transcription output. */
  items?: Item[];
  /**
   * Contains entities identified as personally identifiable information (PII) in your transcription
   * output.
   */
  entities?: Entity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const alternativeSchema: Schema<Alternative> = s.object<Alternative>(
  {
    transcript: s.optional(s.string()),
    items: s.optional(s.array(s.lazy(() => itemSchema))),
    entities: s.optional(s.array(s.lazy(() => entitySchema))),
    _keysMap: {
      transcript: "Transcript",
      items: "Items",
      entities: "Entities",
    },
  },
  { additionalProperties: s.json() },
);

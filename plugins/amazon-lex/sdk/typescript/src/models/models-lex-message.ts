import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentType2Schema, type ContentType2 } from "./content-type2.js";

export type ModelsLexMessage = {
  /** The content type of the message string. */
  contentType: ContentType2;
  /** The text of the message. */
  content: string;
  /**
   * Identifies the message group that the message belongs to. When a group is assigned to a
   * message, Amazon Lex returns one message from each group in the response.
   */
  groupNumber?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexMessageSchema: Schema<ModelsLexMessage> = s.object<ModelsLexMessage>(
  {
    contentType: contentType2Schema,
    content: s.string(),
    groupNumber: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);

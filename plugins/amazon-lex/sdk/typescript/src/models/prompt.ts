import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelsLexMessageSchema, type ModelsLexMessage } from "./models-lex-message.js";

export type Prompt = {
  /**
   * An array of objects, each of which provides a message string and its type. You can specify the
   * message string in plain text or in Speech Synthesis Markup Language (SSML).
   */
  messages: ModelsLexMessage[];
  /** The number of times to prompt the user for information. */
  maxAttempts: number;
  /**
   * A response card. Amazon Lex uses this prompt at runtime, in the PostText API response. It
   * substitutes session attributes and slot values for placeholders in the response card. For more
   * information, see ex-resp-card.
   */
  responseCard?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const promptSchema: Schema<Prompt> = s.object<Prompt>(
  {
    messages: s.array(s.lazy(() => modelsLexMessageSchema)),
    maxAttempts: s.int(),
    responseCard: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

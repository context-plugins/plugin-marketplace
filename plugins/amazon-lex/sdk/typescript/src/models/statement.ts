import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelsLexMessageSchema, type ModelsLexMessage } from "./models-lex-message.js";

export type Statement = {
  /** A collection of message objects. */
  messages: ModelsLexMessage[];
  /**
   * At runtime, if the client is using the PostText API, Amazon Lex includes the response card in
   * the response. It substitutes all of the session attributes and slot values for placeholders in
   * the response card.
   */
  responseCard?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statementSchema: Schema<Statement> = s.object<Statement>(
  {
    messages: s.array(s.lazy(() => modelsLexMessageSchema)),
    responseCard: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

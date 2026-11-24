import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BedrockKnowledgeStoreExactResponseFields = {
  /** The answer field used for an exact response from Bedrock Knowledge Store. */
  answerField?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bedrockKnowledgeStoreExactResponseFieldsSchema: Schema<BedrockKnowledgeStoreExactResponseFields> =
  s.object<BedrockKnowledgeStoreExactResponseFields>(
    {
      answerField: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

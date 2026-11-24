import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { promptSchema, type Prompt } from "./prompt.js";
import { statementSchema, type Statement } from "./statement.js";

export type FollowUpPrompt = {
  prompt: Prompt;
  rejectionStatement: Statement;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const followUpPromptSchema: Schema<FollowUpPrompt> = s.object<FollowUpPrompt>(
  {
    prompt: promptSchema,
    rejectionStatement: statementSchema,
  },
  { additionalProperties: s.json() },
);

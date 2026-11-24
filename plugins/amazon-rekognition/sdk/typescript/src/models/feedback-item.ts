import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type FeedbackItem = {
  /** A code identifying the condition that was detected during the Face Liveness session. */
  code: Code;
  /**
   * A human-readable description of the detected condition, suitable for displaying to an end user
   * before they retry a Face Liveness check. Use Code rather than this message for programmatic
   * decisions, because the message text can change.
   */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const feedbackItemSchema: Schema<FeedbackItem> = s.object<FeedbackItem>(
  {
    code: codeSchema,
    message: s.string(),
    _keysMap: {
      code: "Code",
      message: "Message",
    },
  },
  { additionalProperties: s.json() },
);

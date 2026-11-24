import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An error produced while attempting moderation for the response input or output. */
export type ModerationInputError = {
  code: string;
  message: string;
  /** @default "error" */
  type?: "error";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moderationInputErrorSchema: Schema<ModerationInputError> = s.object<ModerationInputError>(
  {
    code: s.string(),
    message: s.string(),
    type: s.defaulted(s.literal("error"), "error"),
  },
  { additionalProperties: s.json() },
);

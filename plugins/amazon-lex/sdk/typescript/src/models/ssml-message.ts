import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SsmlMessage = {
  /** The SSML text that defines the prompt. */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ssmlMessageSchema: Schema<SsmlMessage> = s.object<SsmlMessage>(
  {
    value: s.string(),
  },
  { additionalProperties: s.json() },
);

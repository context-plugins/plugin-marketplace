import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Default response format. Used to generate text responses. */
export type ResponseFormatText = {
  /** @default "text" */
  type?: "text";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseFormatTextSchema: Schema<ResponseFormatText> = s.object<ResponseFormatText>(
  {
    type: s.defaulted(s.literal("text"), "text"),
  },
  { additionalProperties: s.json() },
);

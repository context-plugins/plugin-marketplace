import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type ThankYouMessage = {
  /** @default "thank_you_message" */
  name?: "thank_you_message";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const thankYouMessageSchema: Schema<ThankYouMessage> = s.object<ThankYouMessage>(
  {
    name: s.defaulted(s.literal("thank_you_message"), "thank_you_message"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

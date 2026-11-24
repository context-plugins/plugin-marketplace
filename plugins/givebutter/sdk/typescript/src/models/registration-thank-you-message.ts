import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type RegistrationThankYouMessage = {
  /** @default "registration_thank_you_message" */
  name?: "registration_thank_you_message";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registrationThankYouMessageSchema: Schema<RegistrationThankYouMessage> =
  s.object<RegistrationThankYouMessage>(
    {
      name: s.defaulted(s.literal("registration_thank_you_message"), "registration_thank_you_message"),
      value: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );

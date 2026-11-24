import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Registration fundraising configuration. JSON object (e.g. `goal`, `minimum`, `description`). */
export type EnableRegistrationFundraising = {
  /** @default "enable_registration_fundraising" */
  name?: "enable_registration_fundraising";
  value?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enableRegistrationFundraisingSchema: Schema<EnableRegistrationFundraising> =
  s.object<EnableRegistrationFundraising>(
    {
      name: s.defaulted(s.literal("enable_registration_fundraising"), "enable_registration_fundraising"),
      value: s.optionalNullable(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );

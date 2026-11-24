import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Donate button text. Max 100 characters. */
export type CustomDonateText = {
  /** @default "custom_donate_text" */
  name?: "custom_donate_text";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customDonateTextProperties: s.Shape<CustomDonateText> = {
  name: s.defaulted(s.literal("custom_donate_text"), "custom_donate_text"),
  value: s.optionalNullable(s.string()),
};

export const customDonateTextInternalSchema: Schema<CustomDonateText> = s.object<CustomDonateText>(
  customDonateTextProperties,
  { additionalProperties: s.json() },
);

export const customDonateTextSchema: Schema<CustomDonateText> = s.lazySchema(() =>
  s.object<CustomDonateText>(
    {
      ...customDonateTextProperties,
      value: s.optionalNullable(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);

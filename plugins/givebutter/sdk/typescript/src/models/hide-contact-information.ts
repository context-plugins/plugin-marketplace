import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideContactInformation = {
  /** @default "hide_contact_information" */
  name?: "hide_contact_information";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideContactInformationSchema: Schema<HideContactInformation> = s.object<HideContactInformation>(
  {
    name: s.defaulted(s.literal("hide_contact_information"), "hide_contact_information"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);

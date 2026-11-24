import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phoneTypeSchema, type PhoneType } from "./phone-type.js";

export type PhoneNumbers = {
  /** The phone number */
  number?: string;
  /** The type of phone number */
  phoneType: PhoneType;
  /** Indicates whether the phone number is listed as "Do Not Call" (DNC). */
  doNotCall: boolean;
  /** The update date of the phone number */
  updateDate: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneNumbersSchema: Schema<PhoneNumbers> = s.object<PhoneNumbers>(
  {
    number: s.optional(s.string()),
    phoneType: phoneTypeSchema,
    doNotCall: s.boolean(),
    updateDate: s.string(),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumbers = {
  primaryPhone?: string;
  additionalPhones?: string[];
};

export const phoneNumbersSchema: Schema<PhoneNumbers> = s.object<PhoneNumbers>({
  primaryPhone: s.optional(s.string()),
  additionalPhones: s.optional(s.array(s.string())),
});

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phoneNumberSchema, type PhoneNumber } from "./phone-number.js";

export type Merchant = {
  /** The merchant id. */
  id?: string;
  /** The merchant business name. */
  businessName?: string;
  /** The merchant website. */
  website?: string;
  /** Provides the Australian Business Number. */
  abn?: string;
  /** Provides the local and international telephone numbers of the merchant. */
  phoneNumber?: PhoneNumber;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchantSchema: Schema<Merchant> = s.object<Merchant>(
  {
    id: s.optional(s.string()),
    businessName: s.optional(s.string()),
    website: s.optional(s.string()),
    abn: s.optional(s.string()),
    phoneNumber: s.optional(s.lazy(() => phoneNumberSchema)),
  },
  { additionalProperties: s.json() },
);

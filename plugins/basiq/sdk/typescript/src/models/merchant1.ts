import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phoneNumber1Schema, type PhoneNumber1 } from "./phone-number1.js";

export type Merchant1 = {
  /** The merchant id. */
  id?: string;
  /** The merchant business name. */
  businessName?: string;
  /** The merchant website. */
  website?: string;
  /** Provides the Australian Business Number. */
  abn?: string;
  /** Provides the ```local``` and ```international``` telephone numbers of the merchant. */
  phoneNumber?: PhoneNumber1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchant1Schema: Schema<Merchant1> = s.object<Merchant1>(
  {
    id: s.optional(s.string()),
    businessName: s.optional(s.string()),
    website: s.optional(s.string()),
    abn: s.optional(s.string()),
    phoneNumber: s.optional(s.lazy(() => phoneNumber1Schema)),
  },
  { additionalProperties: s.json() },
);

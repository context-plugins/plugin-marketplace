import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResellerContact = {
  name?: string;
  emailAddress?: string;
  phone?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resellerContactSchema: Schema<ResellerContact> = s.object<ResellerContact>(
  {
    name: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    phone: s.optional(s.string()),
    _keysMap: {
      emailAddress: "email_address",
    },
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardAccountStatusSchema, type CardAccountStatus } from "./card-account-status.js";
import { cardAccountTypeSchema, type CardAccountType } from "./card-account-type.js";
import { default2Schema, type Default2 } from "./default2.js";
import { expirationSchema, type Expiration } from "./expiration.js";

/** Card Account response DTO. */
export type CardAccountResponseDto = {
  /** BILL-generated ID of the card account. The value begins with `cat`. */
  id: string;
  /** Set as `true` if the card account is archived */
  archived: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** BILL-generated ID of the user that created the card account. The value begins with `006`. */
  createdBy?: string;
  /** Card issuing bank name */
  issuingBankName?: string;
  /** Full name on card account */
  nameOnAccount?: string;
  /** Card brand */
  brand?: string;
  type?: CardAccountType;
  status?: CardAccountStatus;
  /** Card last four digits */
  last4?: string;
  expiration?: Expiration;
  default?: Default2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardAccountResponseDtoSchema: Schema<CardAccountResponseDto> = s.object<CardAccountResponseDto>(
  {
    id: s.string(),
    archived: s.boolean(),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    createdBy: s.optional(s.string()),
    issuingBankName: s.optional(s.string()),
    nameOnAccount: s.optional(s.string()),
    brand: s.optional(s.string()),
    type: s.optional(s.lazy(() => cardAccountTypeSchema)),
    status: s.optional(s.lazy(() => cardAccountStatusSchema)),
    last4: s.optional(s.string()),
    expiration: s.optional(s.lazy(() => expirationSchema)),
    default: s.optional(s.lazy(() => default2Schema)),
  },
  { additionalProperties: s.json() },
);

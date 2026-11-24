import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { payIdSchema, type PayId } from "./pay-id.js";
import { payeeAccountUTypeSchema, type PayeeAccountUType } from "./payee-account-utype.js";

/** Details specific to domestic payees. */
export type DomesticPayeeDetails = {
  /** The type of domestic payee account. */
  payeeAccountUType?: PayeeAccountUType;
  /** Bank account details for domestic payee. */
  account?: Account;
  /** PayID details for domestic payee. */
  payId?: PayId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domesticPayeeDetailsSchema: Schema<DomesticPayeeDetails> = s.object<DomesticPayeeDetails>(
  {
    payeeAccountUType: s.optional(s.lazy(() => payeeAccountUTypeSchema)),
    account: s.optional(s.lazy(() => accountSchema)),
    payId: s.optional(s.lazy(() => payIdSchema)),
  },
  { additionalProperties: s.json() },
);

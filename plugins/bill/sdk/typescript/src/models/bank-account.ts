import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountDefaultsSchema, type BankAccountDefaults } from "./bank-account-defaults.js";

export type BankAccount = {
  id?: string;
  archived?: boolean;
  accountNumber?: string;
  nameOnAccount?: string;
  routingNumber?: string;
  bankName?: string;
  status?: string;
  createdBy?: string;
  type?: string;
  ownerType?: string;
  /** Bank payment default values for BILL AP and AR operations. */
  default?: BankAccountDefaults;
  createdTime?: Date;
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankAccountSchema: Schema<BankAccount> = s.object<BankAccount>(
  {
    id: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    accountNumber: s.optional(s.string()),
    nameOnAccount: s.optional(s.string()),
    routingNumber: s.optional(s.string()),
    bankName: s.optional(s.string()),
    status: s.optional(s.string()),
    createdBy: s.optional(s.string()),
    type: s.optional(s.string()),
    ownerType: s.optional(s.string()),
    default: s.optional(s.lazy(() => bankAccountDefaultsSchema)),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);

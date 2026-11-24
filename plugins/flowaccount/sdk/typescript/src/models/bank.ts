import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankAccountInternalSchema, bankAccountSchema, type BankAccount } from "./bank-account.js";
import {
  reconciledDocumentInternalSchema,
  reconciledDocumentSchema,
  type ReconciledDocument,
} from "./reconciled-document.js";

export type Bank = {
  name: string;
  countryCode?: string | null;
  id?: number;
  bankCode: string;
  isDelete?: boolean;
  orderNumber?: number;
  url?: string | null;
  isCustomBank?: boolean;
  bankAccount?: BankAccount[] | null;
  reconciledDocument?: ReconciledDocument[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankProperties: s.Shape<Bank> = {
  name: s.string(),
  countryCode: s.optionalNullable(s.string()),
  id: s.optional(s.int()),
  bankCode: s.string(),
  isDelete: s.optional(s.boolean()),
  orderNumber: s.optional(s.int()),
  url: s.optionalNullable(s.string()),
  isCustomBank: s.optional(s.boolean()),
  bankAccount: s.optionalNullable(s.array(s.lazy(() => bankAccountInternalSchema))),
  reconciledDocument: s.optionalNullable(s.array(s.lazy(() => reconciledDocumentInternalSchema))),
};

export const bankInternalSchema: Schema<Bank> = s.object<Bank>(bankProperties, {
  additionalProperties: s.json(),
});

export const bankSchema: Schema<Bank> = s.lazySchema(() =>
  s.object<Bank>(
    {
      ...bankProperties,
      name: s.string().check(s.minLength(1)),
      countryCode: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      bankCode: s.string().check(s.minLength(0), s.maxLength(20)),
      url: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(255))),
      bankAccount: s.optionalNullable(s.array(s.lazy(() => bankAccountSchema))),
      reconciledDocument: s.optionalNullable(s.array(s.lazy(() => reconciledDocumentSchema))),
    },
    { additionalProperties: s.json() },
  ),
);

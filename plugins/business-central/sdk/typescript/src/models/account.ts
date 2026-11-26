import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { categorySchema, type Category } from "./category.js";

export type Account = {
  id?: string;
  /** The account number */
  number?: string;
  /** The account display name */
  displayName?: string;
  /** The account category */
  category?: Category;
  /** The account subcategory */
  subCategory?: string;
  /** Whether the account is blocked */
  blocked?: boolean;
  /** The account type */
  accountType?: AccountType;
  /** Whether direct posting is allowed */
  directPosting?: boolean;
  /** The net change */
  netChange?: number;
  consolidationTranslationMethod?: string;
  consolidationDebitAccount?: string;
  consolidationCreditAccount?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountProperties: s.Shape<Account> = {
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  displayName: s.optional(s.string()),
  category: s.optional(s.lazy(() => categorySchema)),
  subCategory: s.optional(s.string()),
  blocked: s.optional(s.boolean()),
  accountType: s.optional(s.lazy(() => accountTypeSchema)),
  directPosting: s.optional(s.boolean()),
  netChange: s.optional(s.float64()),
  consolidationTranslationMethod: s.optional(s.string()),
  consolidationDebitAccount: s.optional(s.string()),
  consolidationCreditAccount: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const accountInternalSchema: Schema<Account> = s.object<Account>(accountProperties, {
  additionalProperties: s.json(),
});

export const accountSchema: Schema<Account> = s.lazySchema(() =>
  s.object<Account>(
    {
      ...accountProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      subCategory: s.optional(s.string().check(s.maxLength(80))),
    },
    { additionalProperties: s.json() },
  ),
);

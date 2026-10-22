import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { linksSchema, type Links } from "./links.js";

export type CreateAccountFundingSource = {
  links?: Links;
  name: string;
  bankAccountType: BankAccountType;
  accountNumber: string;
  routingNumber: string;
  channels?: string[];
};

export const createAccountFundingSourceSchema: Schema<CreateAccountFundingSource> =
  s.object<CreateAccountFundingSource>({
    links: s.optional(s.lazy(() => linksSchema)),
    name: s.string(),
    bankAccountType: bankAccountTypeSchema,
    accountNumber: s.string(),
    routingNumber: s.string(),
    channels: s.optional(s.array(s.string())),
    _keysMap: {
      links: "_links",
    },
  });

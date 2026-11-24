import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreateContactRequestRolesItems = {
  Billing: "BILLING",
  AccountsPayable: "ACCOUNTS_PAYABLE",
} as const;
export type CreateContactRequestRolesItems =
  | (typeof CreateContactRequestRolesItems)[keyof typeof CreateContactRequestRolesItems]
  | (string & {});

export const createContactRequestRolesItemsSchema: EnumSchema<CreateContactRequestRolesItems> =
  s.enumOf<CreateContactRequestRolesItems>(CreateContactRequestRolesItems);

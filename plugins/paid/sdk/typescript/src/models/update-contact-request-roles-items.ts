import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UpdateContactRequestRolesItems = {
  Billing: "BILLING",
  AccountsPayable: "ACCOUNTS_PAYABLE",
} as const;
export type UpdateContactRequestRolesItems =
  | (typeof UpdateContactRequestRolesItems)[keyof typeof UpdateContactRequestRolesItems]
  | (string & {});

export const updateContactRequestRolesItemsSchema: EnumSchema<UpdateContactRequestRolesItems> =
  s.enumOf<UpdateContactRequestRolesItems>(UpdateContactRequestRolesItems);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContactRolesItems = {
  Billing: "BILLING",
  AccountsPayable: "ACCOUNTS_PAYABLE",
} as const;
export type ContactRolesItems = (typeof ContactRolesItems)[keyof typeof ContactRolesItems] | (string & {});

export const contactRolesItemsSchema: EnumSchema<ContactRolesItems> =
  s.enumOf<ContactRolesItems>(ContactRolesItems);

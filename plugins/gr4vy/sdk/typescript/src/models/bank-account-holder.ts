import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyNameSchema, type CompanyName } from "./unions/company-name.js";
import { firstNameSchema, type FirstName } from "./unions/first-name.js";
import { lastNameSchema, type LastName } from "./unions/last-name.js";

export type BankAccountHolder = {
  /** The account holder's first name */
  firstName?: FirstName;
  /** The account holder's last name */
  lastName?: LastName;
  /** The account holder's company name */
  companyName?: CompanyName;
};

export const bankAccountHolderSchema: Schema<BankAccountHolder> = s.object<BankAccountHolder>({
  firstName: s.optional(s.lazy(() => firstNameSchema)),
  lastName: s.optional(s.lazy(() => lastNameSchema)),
  companyName: s.optional(s.lazy(() => companyNameSchema)),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    companyName: "company_name",
  },
});

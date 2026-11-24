import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = OwnCompany 3 = Client 5 = Vendor 7 = VendorAndClient 9 = ExpenseVendor */
export const ContactTypes = {
  _0: 0,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
} as const;
export type ContactTypes = (typeof ContactTypes)[keyof typeof ContactTypes] | (number & {});

export const contactTypesSchema: EnumSchema<ContactTypes> = s.enumOf<ContactTypes>(ContactTypes);

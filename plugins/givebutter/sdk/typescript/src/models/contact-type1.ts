import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines which fields are required: individual contacts require a name, company contacts
 * require company_name.
 */
export const ContactType1 = {
  Individual: "individual",
  Company: "company",
} as const;
export type ContactType1 = (typeof ContactType1)[keyof typeof ContactType1] | (string & {});

export const contactType1Schema: EnumSchema<ContactType1> = s.enumOf<ContactType1>(ContactType1);

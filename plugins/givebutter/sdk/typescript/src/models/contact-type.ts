import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContactType = {
  Individual: "individual",
  Company: "company",
} as const;
export type ContactType = (typeof ContactType)[keyof typeof ContactType] | (string & {});

export const contactTypeSchema: EnumSchema<ContactType> = s.enumOf<ContactType>(ContactType);

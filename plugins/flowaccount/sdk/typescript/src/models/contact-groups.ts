import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Individual 3 = Juristic 9 = Undefined */
export const ContactGroups = {
  _1: 1,
  _3: 3,
  _9: 9,
} as const;
export type ContactGroups = (typeof ContactGroups)[keyof typeof ContactGroups] | (number & {});

export const contactGroupsSchema: EnumSchema<ContactGroups> = s.enumOf<ContactGroups>(ContactGroups);

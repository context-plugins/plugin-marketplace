import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContactItem2 = {
  firstName: string;
  lastName: string;
  companyDomain?: string;
  companyName?: string;
};

export const contactItem2Schema: Schema<ContactItem2> = s.object<ContactItem2>({
  firstName: s.string(),
  lastName: s.string(),
  companyDomain: s.optional(s.string()),
  companyName: s.optional(s.string()),
});

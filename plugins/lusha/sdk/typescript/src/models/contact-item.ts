import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** At least one of companyDomain or companyName is required. */
export type ContactItem = {
  firstName: string;
  lastName: string;
  companyDomain?: string;
  companyName?: string;
};

export const contactItemSchema: Schema<ContactItem> = s.object<ContactItem>({
  firstName: s.string(),
  lastName: s.string(),
  companyDomain: s.optional(s.string()),
  companyName: s.optional(s.string()),
});

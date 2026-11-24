import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactItem2Schema, type ContactItem2 } from "./contact-item2.js";

export type ContactIdentifiersBatch2 = {
  linkedinUrls?: string[];
  contacts?: ContactItem2[];
  emails?: string[];
  contactIds?: number[];
};

const contactIdentifiersBatch2Properties: s.Shape<ContactIdentifiersBatch2> = {
  linkedinUrls: s.optional(s.array(s.string())),
  contacts: s.optional(s.array(s.lazy(() => contactItem2Schema))),
  emails: s.optional(s.array(s.string())),
  contactIds: s.optional(s.array(s.int())),
};

export const contactIdentifiersBatch2InternalSchema: Schema<ContactIdentifiersBatch2> =
  s.object<ContactIdentifiersBatch2>(contactIdentifiersBatch2Properties);

export const contactIdentifiersBatch2Schema: Schema<ContactIdentifiersBatch2> = s.lazySchema(() =>
  s.object<ContactIdentifiersBatch2>({
    ...contactIdentifiersBatch2Properties,
    linkedinUrls: s.optional(s.array(s.string()).check(s.maxLength(100))),
    contacts: s.optional(s.array(s.lazy(() => contactItem2Schema)).check(s.maxLength(100))),
    emails: s.optional(s.array(s.string().check(s.email())).check(s.maxLength(100))),
    contactIds: s.optional(s.array(s.int()).check(s.maxLength(100))),
  }),
);

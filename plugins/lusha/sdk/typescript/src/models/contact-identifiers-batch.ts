import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactItemSchema, type ContactItem } from "./contact-item.js";

export type ContactIdentifiersBatch = {
  linkedinUrls?: string[];
  contacts?: ContactItem[];
  emails?: string[];
  /** Lusha contact IDs as strings (preferred) */
  ids?: string[];
  /** Lusha contact IDs as numbers (legacy; prefer ids) */
  contactIds?: number[];
};

const contactIdentifiersBatchProperties: s.Shape<ContactIdentifiersBatch> = {
  linkedinUrls: s.optional(s.array(s.string())),
  contacts: s.optional(s.array(s.lazy(() => contactItemSchema))),
  emails: s.optional(s.array(s.string())),
  ids: s.optional(s.array(s.string())),
  contactIds: s.optional(s.array(s.int())),
};

export const contactIdentifiersBatchInternalSchema: Schema<ContactIdentifiersBatch> =
  s.object<ContactIdentifiersBatch>(contactIdentifiersBatchProperties);

export const contactIdentifiersBatchSchema: Schema<ContactIdentifiersBatch> = s.lazySchema(() =>
  s.object<ContactIdentifiersBatch>({
    ...contactIdentifiersBatchProperties,
    linkedinUrls: s.optional(s.array(s.string()).check(s.maxLength(100))),
    contacts: s.optional(s.array(s.lazy(() => contactItemSchema)).check(s.maxLength(100))),
    emails: s.optional(s.array(s.string().check(s.email())).check(s.maxLength(100))),
    ids: s.optional(s.array(s.string()).check(s.maxLength(100))),
    contactIds: s.optional(s.array(s.int()).check(s.maxLength(100))),
  }),
);

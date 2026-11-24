import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { company1Schema, type Company1 } from "./company1.js";
import { contactLocationSchema, type ContactLocation } from "./contact-location.js";
import { jobTitle1Schema, type JobTitle1 } from "./job-title1.js";
import { socialLinks2Schema, type SocialLinks2 } from "./social-links2.js";

export type LookalikeContactResult = {
  contactId?: string;
  firstName?: string | null;
  lastName?: string | null;
  socialLinks?: SocialLinks2;
  company?: Company1;
  jobTitle?: JobTitle1;
  location?: ContactLocation;
};

export const lookalikeContactResultSchema: Schema<LookalikeContactResult> = s.object<LookalikeContactResult>({
  contactId: s.optional(s.string()),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  socialLinks: s.optional(s.lazy(() => socialLinks2Schema)),
  company: s.optional(s.lazy(() => company1Schema)),
  jobTitle: s.optional(s.lazy(() => jobTitle1Schema)),
  location: s.optional(s.lazy(() => contactLocationSchema)),
});

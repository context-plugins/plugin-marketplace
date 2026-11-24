import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactTagSchema, type ContactTag } from "./contact-tag.js";
import { emailAddressSchema, type EmailAddress } from "./email-address.js";
import {
  jobTitleLushaApiDocumentationEnrichmentApiSchema,
  type JobTitleLushaApiDocumentationEnrichmentApi,
} from "./job-title-lusha-api-documentation-enrichment-api.js";
import { linkedinAwardSchema, type LinkedinAward } from "./linkedin-award.js";
import { linkedinCertificationSchema, type LinkedinCertification } from "./linkedin-certification.js";
import { linkedinCourseSchema, type LinkedinCourse } from "./linkedin-course.js";
import { locationResponseSchema, type LocationResponse } from "./location-response.js";
import { phoneNumbersSchema, type PhoneNumbers } from "./phone-numbers.js";
import { previousJobResponseSchema, type PreviousJobResponse } from "./previous-job-response.js";
import {
  socialLinksLushaApiDocumentationEnrichmentApiSchema,
  type SocialLinksLushaApiDocumentationEnrichmentApi,
} from "./social-links-lusha-api-documentation-enrichment-api.js";

export type Contact = {
  companyId: number;
  firstName: string;
  lastName: string;
  fullName: string;
  /** Simple array of email addresses (deprecated - use emailAddresses) */
  emails?: string[];
  /** Detailed email addresses with metadata */
  emailAddresses?: EmailAddress[];
  /** Simple array of phone numbers (deprecated - use phoneNumbers) */
  phones?: string;
  /** Detailed phone numbers with metadata */
  phoneNumbers?: PhoneNumbers[];
  personId?: number;
  location?: LocationResponse;
  jobTitle?: JobTitleLushaApiDocumentationEnrichmentApi;
  socialLinks?: SocialLinksLushaApiDocumentationEnrichmentApi;
  jobStartDate?: string;
  previousJob?: PreviousJobResponse;
  contactTags?: ContactTag[];
  updateDate?: string;
  linkedinFollowersCount?: number;
  linkedinConnectionsCount?: number;
  linkedinCertifications?: LinkedinCertification[];
  linkedinCourses?: LinkedinCourse[];
  linkedinAwards?: LinkedinAward[];
  linkedinSkills?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSchema: Schema<Contact> = s.object<Contact>(
  {
    companyId: s.float64(),
    firstName: s.string(),
    lastName: s.string(),
    fullName: s.string(),
    emails: s.optional(s.array(s.string())),
    emailAddresses: s.optional(s.array(s.lazy(() => emailAddressSchema))),
    phones: s.optional(s.string()),
    phoneNumbers: s.optional(s.array(s.lazy(() => phoneNumbersSchema))),
    personId: s.optional(s.float64()),
    location: s.optional(s.lazy(() => locationResponseSchema)),
    jobTitle: s.optional(s.lazy(() => jobTitleLushaApiDocumentationEnrichmentApiSchema)),
    socialLinks: s.optional(s.lazy(() => socialLinksLushaApiDocumentationEnrichmentApiSchema)),
    jobStartDate: s.optional(s.string()),
    previousJob: s.optional(s.lazy(() => previousJobResponseSchema)),
    contactTags: s.optional(s.array(s.lazy(() => contactTagSchema))),
    updateDate: s.optional(s.string()),
    linkedinFollowersCount: s.optional(s.int()),
    linkedinConnectionsCount: s.optional(s.int()),
    linkedinCertifications: s.optional(s.array(s.lazy(() => linkedinCertificationSchema))),
    linkedinCourses: s.optional(s.array(s.lazy(() => linkedinCourseSchema))),
    linkedinAwards: s.optional(s.array(s.lazy(() => linkedinAwardSchema))),
    linkedinSkills: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);

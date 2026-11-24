import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type CompanyLushaApiDocumentationProspectingSearchEnrichApi,
} from "./company-lusha-api-documentation-prospecting-search-enrich-api.js";
import { emailAddressSchema, type EmailAddress } from "./email-address.js";
import { linkedinAwardSchema, type LinkedinAward } from "./linkedin-award.js";
import { linkedinCertificationSchema, type LinkedinCertification } from "./linkedin-certification.js";
import { linkedinCourseSchema, type LinkedinCourse } from "./linkedin-course.js";
import {
  location1LushaApiDocumentationProspectingSearchEnrichApiSchema,
  type Location1LushaApiDocumentationProspectingSearchEnrichApi,
} from "./location1-lusha-api-documentation-prospecting-search-enrich-api.js";
import { phoneNumbersSchema, type PhoneNumbers } from "./phone-numbers.js";
import { senioritySchema, type Seniority } from "./seniority.js";
import {
  socialLinksLushaApiDocumentationEnrichApiSchema,
  type SocialLinksLushaApiDocumentationEnrichApi,
} from "./social-links-lusha-api-documentation-enrich-api.js";

export type ContactEnrichData = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  isShown?: boolean;
  jobTitle?: string;
  location?: Location1LushaApiDocumentationProspectingSearchEnrichApi;
  emailAddresses?: EmailAddress[];
  phoneNumbers?: PhoneNumbers[];
  companyId?: number;
  companyName?: string;
  socialLinks?: SocialLinksLushaApiDocumentationEnrichApi;
  departments?: string[];
  seniority?: Seniority[];
  company?: CompanyLushaApiDocumentationProspectingSearchEnrichApi;
  linkedinFollowersCount?: number;
  linkedinConnectionsCount?: number;
  linkedinCertifications?: LinkedinCertification[];
  linkedinCourses?: LinkedinCourse[];
  linkedinAwards?: LinkedinAward[];
  linkedinSkills?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactEnrichDataSchema: Schema<ContactEnrichData> = s.object<ContactEnrichData>(
  {
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    isShown: s.optional(s.boolean()),
    jobTitle: s.optional(s.string()),
    location: s.optional(s.lazy(() => location1LushaApiDocumentationProspectingSearchEnrichApiSchema)),
    emailAddresses: s.optional(s.array(s.lazy(() => emailAddressSchema))),
    phoneNumbers: s.optional(s.array(s.lazy(() => phoneNumbersSchema))),
    companyId: s.optional(s.float64()),
    companyName: s.optional(s.string()),
    socialLinks: s.optional(s.lazy(() => socialLinksLushaApiDocumentationEnrichApiSchema)),
    departments: s.optional(s.array(s.string())),
    seniority: s.optional(s.array(s.lazy(() => senioritySchema))),
    company: s.optional(s.lazy(() => companyLushaApiDocumentationProspectingSearchEnrichApiSchema)),
    linkedinFollowersCount: s.optional(s.int()),
    linkedinConnectionsCount: s.optional(s.int()),
    linkedinCertifications: s.optional(s.array(s.lazy(() => linkedinCertificationSchema))),
    linkedinCourses: s.optional(s.array(s.lazy(() => linkedinCourseSchema))),
    linkedinAwards: s.optional(s.array(s.lazy(() => linkedinAwardSchema))),
    linkedinSkills: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);

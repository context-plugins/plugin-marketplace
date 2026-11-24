import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";
import {
  locationLushaApiDocumentationEnrichApiSchema,
  type LocationLushaApiDocumentationEnrichApi,
} from "./location-lusha-api-documentation-enrich-api.js";
import { previousEmploymentSchema, type PreviousEmployment } from "./previous-employment.js";
import {
  socialLinksLushaApiDocumentationEnrichApiSchema,
  type SocialLinksLushaApiDocumentationEnrichApi,
} from "./social-links-lusha-api-documentation-enrich-api.js";
import { v3ContactTagSchema, type V3ContactTag } from "./v3-contact-tag.js";
import {
  v3EmailAddressInternalSchema,
  v3EmailAddressSchema,
  type V3EmailAddress,
} from "./v3-email-address.js";
import {
  v3EnrichedContactCompanyRefSchema,
  type V3EnrichedContactCompanyRef,
} from "./v3-enriched-contact-company-ref.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";
import { v3PhoneNumberSchema, type V3PhoneNumber } from "./v3-phone-number.js";

export type V3EnrichedContact = {
  id?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  jobTitle?: JobTitle;
  location?: LocationLushaApiDocumentationEnrichApi;
  tags?: V3ContactTag[];
  emails?: V3EmailAddress[];
  phones?: V3PhoneNumber[];
  company?: V3EnrichedContactCompanyRef;
  socialLinks?: SocialLinksLushaApiDocumentationEnrichApi;
  previousEmployment?: PreviousEmployment[];
  updateDate?: string;
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3EnrichedContactProperties: s.Shape<V3EnrichedContact> = {
  id: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  fullName: s.optional(s.string()),
  jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
  location: s.optional(s.lazy(() => locationLushaApiDocumentationEnrichApiSchema)),
  tags: s.optional(s.array(s.lazy(() => v3ContactTagSchema))),
  emails: s.optional(s.array(s.lazy(() => v3EmailAddressInternalSchema))),
  phones: s.optional(s.array(s.lazy(() => v3PhoneNumberSchema))),
  company: s.optional(s.lazy(() => v3EnrichedContactCompanyRefSchema)),
  socialLinks: s.optional(s.lazy(() => socialLinksLushaApiDocumentationEnrichApiSchema)),
  previousEmployment: s.optional(s.array(s.lazy(() => previousEmploymentSchema))),
  updateDate: s.optional(s.dateOnly()),
  error: s.optional(s.lazy(() => v3ItemErrorSchema)),
};

export const v3EnrichedContactInternalSchema: Schema<V3EnrichedContact> = s.object<V3EnrichedContact>(
  v3EnrichedContactProperties,
  { additionalProperties: s.json() },
);

export const v3EnrichedContactSchema: Schema<V3EnrichedContact> = s.lazySchema(() =>
  s.object<V3EnrichedContact>(
    {
      ...v3EnrichedContactProperties,
      emails: s.optional(s.array(s.lazy(() => v3EmailAddressSchema))),
    },
    { additionalProperties: s.json() },
  ),
);

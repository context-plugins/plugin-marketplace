import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { address1InternalSchema, address1Schema, type Address1 } from "./address1.js";
import { contactType1Schema, type ContactType1 } from "./contact-type1.js";
import { emailInternalSchema, emailSchema, type Email } from "./email.js";
import { genderEnumSchema, type GenderEnum } from "./gender-enum.js";
import { phoneSchema, type Phone } from "./phone.js";

export type UpdateContactRequest = {
  /**
   * Required for individual contacts. Optional for company contacts, which require company_name
   * instead.
   */
  firstName?: string | null;
  /**
   * Required for individual contacts. Optional for company contacts, which require company_name
   * instead.
   */
  lastName?: string | null;
  middleName?: string | null;
  preferredName?: string | null;
  gender?: GenderEnum;
  pronouns?: string | null;
  suffix?: string | null;
  prefix?: string | null;
  /**
   * Determines which fields are required: individual contacts require a name, company contacts
   * require company_name.
   */
  type?: ContactType1;
  /**
   * Required for company contacts. Optional for individual contacts, which require first_name and
   * last_name instead.
   */
  companyName?: string | null;
  employer?: string | null;
  company?: string | null;
  title?: string | null;
  twitterUrl?: string | null;
  linkedinUrl?: string | null;
  facebookUrl?: string | null;
  tiktokUrl?: string | null;
  websiteUrl?: string | null;
  note?: string | null;
  bio?: string | null;
  externalId?: string | null;
  contactSince?: Date | null;
  dob?: string;
  emailOptIn?: boolean | null;
  smsOptIn?: boolean | null;
  addressSubscription?: boolean | null;
  customFields?: string[] | null;
  tags?: string[] | null;
  removeEmails?: string[] | null;
  removePhones?: string[] | null;
  removeAddressIds?: number[] | null;
  emails?: Email[] | null;
  phones?: Phone[] | null;
  addresses?: Address1[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateContactRequestProperties: s.Shape<UpdateContactRequest> = {
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  middleName: s.optionalNullable(s.string()),
  preferredName: s.optionalNullable(s.string()),
  gender: s.optional(s.lazy(() => genderEnumSchema)),
  pronouns: s.optionalNullable(s.string()),
  suffix: s.optionalNullable(s.string()),
  prefix: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => contactType1Schema)),
  companyName: s.optionalNullable(s.string()),
  employer: s.optionalNullable(s.string()),
  company: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  twitterUrl: s.optionalNullable(s.string()),
  linkedinUrl: s.optionalNullable(s.string()),
  facebookUrl: s.optionalNullable(s.string()),
  tiktokUrl: s.optionalNullable(s.string()),
  websiteUrl: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  bio: s.optionalNullable(s.string()),
  externalId: s.optionalNullable(s.string()),
  contactSince: s.optionalNullable(s.dateTime()),
  dob: s.optional(s.string()),
  emailOptIn: s.optionalNullable(s.boolean()),
  smsOptIn: s.optionalNullable(s.boolean()),
  addressSubscription: s.optionalNullable(s.boolean()),
  customFields: s.optionalNullable(s.array(s.string())),
  tags: s.optionalNullable(s.array(s.string())),
  removeEmails: s.optionalNullable(s.array(s.string())),
  removePhones: s.optionalNullable(s.array(s.string())),
  removeAddressIds: s.optionalNullable(s.array(s.int())),
  emails: s.optionalNullable(s.array(s.lazy(() => emailInternalSchema))),
  phones: s.optionalNullable(s.array(s.lazy(() => phoneSchema))),
  addresses: s.optionalNullable(s.array(s.lazy(() => address1InternalSchema))),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    middleName: "middle_name",
    preferredName: "preferred_name",
    companyName: "company_name",
    twitterUrl: "twitter_url",
    linkedinUrl: "linkedin_url",
    facebookUrl: "facebook_url",
    tiktokUrl: "tiktok_url",
    websiteUrl: "website_url",
    externalId: "external_id",
    contactSince: "contact_since",
    emailOptIn: "email_opt_in",
    smsOptIn: "sms_opt_in",
    addressSubscription: "address_subscription",
    customFields: "custom_fields",
    removeEmails: "remove_emails",
    removePhones: "remove_phones",
    removeAddressIds: "remove_address_ids",
  },
};

export const updateContactRequestInternalSchema: Schema<UpdateContactRequest> =
  s.object<UpdateContactRequest>(updateContactRequestProperties, { additionalProperties: s.json() });

export const updateContactRequestSchema: Schema<UpdateContactRequest> = s.lazySchema(() =>
  s.object<UpdateContactRequest>(
    {
      ...updateContactRequestProperties,
      firstName: s.optionalNullable(s.string().check(s.maxLength(255))),
      lastName: s.optionalNullable(s.string().check(s.maxLength(255))),
      middleName: s.optionalNullable(s.string().check(s.maxLength(255))),
      preferredName: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      pronouns: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      suffix: s.optionalNullable(s.string().check(s.maxLength(32))),
      prefix: s.optionalNullable(s.string().check(s.maxLength(32))),
      companyName: s.optionalNullable(s.string().check(s.maxLength(255))),
      employer: s.optionalNullable(s.string().check(s.maxLength(255))),
      company: s.optionalNullable(s.string().check(s.maxLength(255))),
      title: s.optionalNullable(s.string().check(s.maxLength(255))),
      websiteUrl: s.optionalNullable(s.string().check(s.maxLength(2048), s.url())),
      bio: s.optionalNullable(s.string().check(s.maxLength(2000))),
      externalId: s.optionalNullable(s.string().check(s.maxLength(255))),
      tags: s.optionalNullable(s.array(s.string().check(s.maxLength(64)))),
      removeEmails: s.optionalNullable(s.array(s.string().check(s.email()))),
      emails: s.optionalNullable(s.array(s.lazy(() => emailSchema))),
      addresses: s.optionalNullable(s.array(s.lazy(() => address1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);

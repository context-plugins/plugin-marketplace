import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressInternalSchema, addressSchema, type Address } from "./address.js";
import { contactTypeSchema, type ContactType } from "./contact-type.js";
import { genderEnumSchema, type GenderEnum } from "./gender-enum.js";

export type V1ContactsRequest = {
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  preferredName?: string | null;
  primaryEmail?: string | null;
  primaryPhone?: string | null;
  companyName?: string | null;
  externalId?: string | null;
  contactSince?: Date | null;
  type?: ContactType;
  gender?: GenderEnum;
  pronouns?: string | null;
  suffix?: string | null;
  prefix?: string | null;
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  state?: string | null;
  zipcode?: string | null;
  country?: string | null;
  primaryAddress1?: string | null;
  primaryAddress2?: string | null;
  primaryCity?: string | null;
  primaryState?: string | null;
  primaryZipcode?: string | null;
  primaryCountry?: string | null;
  emails?: string[] | null;
  phones?: string[] | null;
  dob?: string;
  employer?: string | null;
  company?: string | null;
  title?: string | null;
  twitterUrl?: string | null;
  linkedinUrl?: string | null;
  facebookUrl?: string | null;
  tiktokUrl?: string | null;
  instagramUrl?: string | null;
  note?: string | null;
  emailSubscription?: boolean | null;
  phoneSubscription?: boolean | null;
  addressSubscription?: boolean | null;
  customFields?: string[] | null;
  tags?: string[] | null;
  addresses?: Address[] | null;
  /** @default false */
  forceCreate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ContactsRequestProperties: s.Shape<V1ContactsRequest> = {
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  middleName: s.optionalNullable(s.string()),
  preferredName: s.optionalNullable(s.string()),
  primaryEmail: s.optionalNullable(s.string()),
  primaryPhone: s.optionalNullable(s.string()),
  companyName: s.optionalNullable(s.string()),
  externalId: s.optionalNullable(s.string()),
  contactSince: s.optionalNullable(s.dateTime()),
  type: s.optional(s.lazy(() => contactTypeSchema)),
  gender: s.optional(s.lazy(() => genderEnumSchema)),
  pronouns: s.optionalNullable(s.string()),
  suffix: s.optionalNullable(s.string()),
  prefix: s.optionalNullable(s.string()),
  address1: s.optionalNullable(s.string()),
  address2: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  zipcode: s.optionalNullable(s.string()),
  country: s.optionalNullable(s.string()),
  primaryAddress1: s.optionalNullable(s.string()),
  primaryAddress2: s.optionalNullable(s.string()),
  primaryCity: s.optionalNullable(s.string()),
  primaryState: s.optionalNullable(s.string()),
  primaryZipcode: s.optionalNullable(s.string()),
  primaryCountry: s.optionalNullable(s.string()),
  emails: s.optionalNullable(s.array(s.string())),
  phones: s.optionalNullable(s.array(s.string())),
  dob: s.optional(s.string()),
  employer: s.optionalNullable(s.string()),
  company: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  twitterUrl: s.optionalNullable(s.string()),
  linkedinUrl: s.optionalNullable(s.string()),
  facebookUrl: s.optionalNullable(s.string()),
  tiktokUrl: s.optionalNullable(s.string()),
  instagramUrl: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  emailSubscription: s.optionalNullable(s.boolean()),
  phoneSubscription: s.optionalNullable(s.boolean()),
  addressSubscription: s.optionalNullable(s.boolean()),
  customFields: s.optionalNullable(s.array(s.string())),
  tags: s.optionalNullable(s.array(s.string())),
  addresses: s.optionalNullable(s.array(s.lazy(() => addressInternalSchema))),
  forceCreate: s.defaulted(s.boolean(), false),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    middleName: "middle_name",
    preferredName: "preferred_name",
    primaryEmail: "primary_email",
    primaryPhone: "primary_phone",
    companyName: "company_name",
    externalId: "external_id",
    contactSince: "contact_since",
    address1: "address_1",
    address2: "address_2",
    primaryAddress1: "primary_address_1",
    primaryAddress2: "primary_address_2",
    primaryCity: "primary_city",
    primaryState: "primary_state",
    primaryZipcode: "primary_zipcode",
    primaryCountry: "primary_country",
    twitterUrl: "twitter_url",
    linkedinUrl: "linkedin_url",
    facebookUrl: "facebook_url",
    tiktokUrl: "tiktok_url",
    instagramUrl: "instagram_url",
    emailSubscription: "email_subscription",
    phoneSubscription: "phone_subscription",
    addressSubscription: "address_subscription",
    customFields: "custom_fields",
    forceCreate: "force_create",
  },
};

export const v1ContactsRequestInternalSchema: Schema<V1ContactsRequest> = s.object<V1ContactsRequest>(
  v1ContactsRequestProperties,
  { additionalProperties: s.json() },
);

export const v1ContactsRequestSchema: Schema<V1ContactsRequest> = s.lazySchema(() =>
  s.object<V1ContactsRequest>(
    {
      ...v1ContactsRequestProperties,
      firstName: s.optionalNullable(s.string().check(s.maxLength(255))),
      lastName: s.optionalNullable(s.string().check(s.maxLength(255))),
      middleName: s.optionalNullable(s.string().check(s.maxLength(255))),
      preferredName: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      companyName: s.optionalNullable(s.string().check(s.maxLength(255))),
      externalId: s.optionalNullable(s.string().check(s.maxLength(255))),
      pronouns: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
      suffix: s.optionalNullable(s.string().check(s.maxLength(32))),
      prefix: s.optionalNullable(s.string().check(s.maxLength(32))),
      address1: s.optionalNullable(s.string().check(s.maxLength(255))),
      address2: s.optionalNullable(s.string().check(s.maxLength(255))),
      city: s.optionalNullable(s.string().check(s.maxLength(255))),
      state: s.optionalNullable(s.string().check(s.maxLength(255))),
      zipcode: s.optionalNullable(s.string().check(s.maxLength(255))),
      primaryAddress1: s.optionalNullable(s.string().check(s.maxLength(255))),
      primaryAddress2: s.optionalNullable(s.string().check(s.maxLength(255))),
      primaryCity: s.optionalNullable(s.string().check(s.maxLength(255))),
      primaryState: s.optionalNullable(s.string().check(s.maxLength(255))),
      primaryZipcode: s.optionalNullable(s.string().check(s.maxLength(255))),
      employer: s.optionalNullable(s.string().check(s.maxLength(255))),
      company: s.optionalNullable(s.string().check(s.maxLength(255))),
      title: s.optionalNullable(s.string().check(s.maxLength(255))),
      tags: s.optionalNullable(s.array(s.string().check(s.maxLength(64)))),
      addresses: s.optionalNullable(s.array(s.lazy(() => addressSchema))),
    },
    { additionalProperties: s.json() },
  ),
);

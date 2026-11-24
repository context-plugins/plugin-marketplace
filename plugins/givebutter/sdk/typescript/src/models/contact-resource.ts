import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  appHttpResourcesApiAddressResourceSchema,
  type AppHttpResourcesApiAddressResource,
} from "./app-http-resources-api-address-resource.js";
import {
  associatedCompanyResourceSchema,
  type AssociatedCompanyResource,
} from "./associated-company-resource.js";
import { emailResourceSchema, type EmailResource } from "./email-resource.js";
import { externalIdResourceSchema, type ExternalIdResource } from "./external-id-resource.js";
import { phoneResourceSchema, type PhoneResource } from "./phone-resource.js";
import { statsSchema, type Stats } from "./stats.js";
import { pointOfContactSchema, type PointOfContact } from "./unions/point-of-contact.js";
import { primaryAddressSchema, type PrimaryAddress } from "./unions/primary-address.js";

export type ContactResource = {
  id: string;
  externalId: string;
  contactSince: string;
  type: string;
  prefix: string;
  firstName: string;
  preferredName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  gender: string;
  pronouns: string;
  dob: string;
  company: string;
  employer: string;
  companyName: string;
  pointOfContact?: PointOfContact;
  associatedCompanies?: AssociatedCompanyResource[] | null;
  title: string;
  websiteUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  instagramUrl: string;
  emails: EmailResource[];
  phones: PhoneResource[];
  primaryEmail: string;
  primaryPhone: string;
  note: string;
  addresses: AppHttpResourcesApiAddressResource[];
  primaryAddress: PrimaryAddress;
  lastDonationAmount: string;
  stats: Stats;
  tags: string;
  customFields: Record<string, unknown>[];
  externalIds: ExternalIdResource[];
  isEmailSubscribed: string;
  isPhoneSubscribed: string;
  isAddressSubscribed: string;
  emailOptIn: string;
  smsOptIn: string;
  addressUnsubscribedAt: string;
  archivedAt: string;
  createdAt: string;
  updatedAt: string;
  salutationName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactResourceSchema: Schema<ContactResource> = s.object<ContactResource>(
  {
    id: s.string(),
    externalId: s.string(),
    contactSince: s.string(),
    type: s.string(),
    prefix: s.string(),
    firstName: s.string(),
    preferredName: s.string(),
    middleName: s.string(),
    lastName: s.string(),
    suffix: s.string(),
    gender: s.string(),
    pronouns: s.string(),
    dob: s.string(),
    company: s.string(),
    employer: s.string(),
    companyName: s.string(),
    pointOfContact: s.optional(s.lazy(() => pointOfContactSchema)),
    associatedCompanies: s.optionalNullable(s.array(s.lazy(() => associatedCompanyResourceSchema))),
    title: s.string(),
    websiteUrl: s.string(),
    twitterUrl: s.string(),
    linkedinUrl: s.string(),
    facebookUrl: s.string(),
    tiktokUrl: s.string(),
    instagramUrl: s.string(),
    emails: s.array(s.lazy(() => emailResourceSchema)),
    phones: s.array(s.lazy(() => phoneResourceSchema)),
    primaryEmail: s.string(),
    primaryPhone: s.string(),
    note: s.string(),
    addresses: s.array(s.lazy(() => appHttpResourcesApiAddressResourceSchema)),
    primaryAddress: primaryAddressSchema,
    lastDonationAmount: s.string(),
    stats: statsSchema,
    tags: s.string(),
    customFields: s.array(s.record(s.string(), s.unknown())),
    externalIds: s.array(s.lazy(() => externalIdResourceSchema)),
    isEmailSubscribed: s.string(),
    isPhoneSubscribed: s.string(),
    isAddressSubscribed: s.string(),
    emailOptIn: s.string(),
    smsOptIn: s.string(),
    addressUnsubscribedAt: s.string(),
    archivedAt: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    salutationName: s.string(),
    _keysMap: {
      externalId: "external_id",
      contactSince: "contact_since",
      firstName: "first_name",
      preferredName: "preferred_name",
      middleName: "middle_name",
      lastName: "last_name",
      companyName: "company_name",
      pointOfContact: "point_of_contact",
      associatedCompanies: "associated_companies",
      websiteUrl: "website_url",
      twitterUrl: "twitter_url",
      linkedinUrl: "linkedin_url",
      facebookUrl: "facebook_url",
      tiktokUrl: "tiktok_url",
      instagramUrl: "instagram_url",
      primaryEmail: "primary_email",
      primaryPhone: "primary_phone",
      primaryAddress: "primary_address",
      lastDonationAmount: "last_donation_amount",
      customFields: "custom_fields",
      externalIds: "external_ids",
      isEmailSubscribed: "is_email_subscribed",
      isPhoneSubscribed: "is_phone_subscribed",
      isAddressSubscribed: "is_address_subscribed",
      emailOptIn: "email_opt_in",
      smsOptIn: "sms_opt_in",
      addressUnsubscribedAt: "address_unsubscribed_at",
      archivedAt: "archived_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      salutationName: "salutation_name",
    },
  },
  { additionalProperties: s.json() },
);

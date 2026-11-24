import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PointOfContactResource = {
  id: string;
  type: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  gender: string;
  pronouns: string;
  dob: string;
  employer: string;
  title: string;
  twitterUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  instagramUrl: string;
  websiteUrl: string;
  emails: Record<string, unknown>;
  phones: Record<string, unknown>;
  primaryEmail: string;
  primaryPhone: string;
  isEmailSubscribed: string;
  isPhoneSubscribed: string;
  isAddressSubscribed: string;
  addressUnsubscribedAt: string;
  archivedAt: string;
  createdAt: string;
  updatedAt: string;
  firstTimeSupporterAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pointOfContactResourceSchema: Schema<PointOfContactResource> = s.object<PointOfContactResource>(
  {
    id: s.string(),
    type: s.string(),
    prefix: s.string(),
    firstName: s.string(),
    middleName: s.string(),
    lastName: s.string(),
    suffix: s.string(),
    gender: s.string(),
    pronouns: s.string(),
    dob: s.string(),
    employer: s.string(),
    title: s.string(),
    twitterUrl: s.string(),
    linkedinUrl: s.string(),
    facebookUrl: s.string(),
    tiktokUrl: s.string(),
    instagramUrl: s.string(),
    websiteUrl: s.string(),
    emails: s.record(s.string(), s.unknown()),
    phones: s.record(s.string(), s.unknown()),
    primaryEmail: s.string(),
    primaryPhone: s.string(),
    isEmailSubscribed: s.string(),
    isPhoneSubscribed: s.string(),
    isAddressSubscribed: s.string(),
    addressUnsubscribedAt: s.string(),
    archivedAt: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    firstTimeSupporterAt: s.string(),
    _keysMap: {
      firstName: "first_name",
      middleName: "middle_name",
      lastName: "last_name",
      twitterUrl: "twitter_url",
      linkedinUrl: "linkedin_url",
      facebookUrl: "facebook_url",
      tiktokUrl: "tiktok_url",
      instagramUrl: "instagram_url",
      websiteUrl: "website_url",
      primaryEmail: "primary_email",
      primaryPhone: "primary_phone",
      isEmailSubscribed: "is_email_subscribed",
      isPhoneSubscribed: "is_phone_subscribed",
      isAddressSubscribed: "is_address_subscribed",
      addressUnsubscribedAt: "address_unsubscribed_at",
      archivedAt: "archived_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
      firstTimeSupporterAt: "first_time_supporter_at",
    },
  },
  { additionalProperties: s.json() },
);

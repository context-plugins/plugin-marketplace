import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressResourceSchema, type AddressResource } from "./address-resource.js";

export type AssociatedCompanyResource = {
  id: string;
  type: string;
  companyName: string;
  nameDisplay: string;
  title: string;
  twitterUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  tiktokUrl: string;
  instagramUrl: string;
  websiteUrl: string;
  imageUrl: string | null;
  emails: Record<string, unknown>;
  phones: Record<string, unknown>;
  primaryEmail: string;
  primaryPhone: string;
  isEmailSubscribed: string;
  isPhoneSubscribed: string;
  isAddressSubscribed: string;
  addressUnsubscribedAt: string;
  note: string;
  addresses: AddressResource[];
  primaryAddress: AddressResource;
  archivedAt: string;
  createdAt: string;
  updatedAt: string;
  firstTimeSupporterAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const associatedCompanyResourceSchema: Schema<AssociatedCompanyResource> =
  s.object<AssociatedCompanyResource>(
    {
      id: s.string(),
      type: s.string(),
      companyName: s.string(),
      nameDisplay: s.string(),
      title: s.string(),
      twitterUrl: s.string(),
      linkedinUrl: s.string(),
      facebookUrl: s.string(),
      tiktokUrl: s.string(),
      instagramUrl: s.string(),
      websiteUrl: s.string(),
      imageUrl: s.nullable(s.string()),
      emails: s.record(s.string(), s.unknown()),
      phones: s.record(s.string(), s.unknown()),
      primaryEmail: s.string(),
      primaryPhone: s.string(),
      isEmailSubscribed: s.string(),
      isPhoneSubscribed: s.string(),
      isAddressSubscribed: s.string(),
      addressUnsubscribedAt: s.string(),
      note: s.string(),
      addresses: s.array(s.lazy(() => addressResourceSchema)),
      primaryAddress: addressResourceSchema,
      archivedAt: s.string(),
      createdAt: s.string(),
      updatedAt: s.string(),
      firstTimeSupporterAt: s.string(),
      _keysMap: {
        companyName: "company_name",
        nameDisplay: "name_display",
        twitterUrl: "twitter_url",
        linkedinUrl: "linkedin_url",
        facebookUrl: "facebook_url",
        tiktokUrl: "tiktok_url",
        instagramUrl: "instagram_url",
        websiteUrl: "website_url",
        imageUrl: "image_url",
        primaryEmail: "primary_email",
        primaryPhone: "primary_phone",
        isEmailSubscribed: "is_email_subscribed",
        isPhoneSubscribed: "is_phone_subscribed",
        isAddressSubscribed: "is_address_subscribed",
        addressUnsubscribedAt: "address_unsubscribed_at",
        primaryAddress: "primary_address",
        archivedAt: "archived_at",
        createdAt: "created_at",
        updatedAt: "updated_at",
        firstTimeSupporterAt: "first_time_supporter_at",
      },
    },
    { additionalProperties: s.json() },
  );

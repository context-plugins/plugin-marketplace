import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FieldBundleSocialMiscApi = {
  Name: "name",
  LanguageCode: "languageCode",
  StoreCode: "storeCode",
  Title: "title",
  PhoneNumbers: "phoneNumbers",
  Categories: "categories",
  StorefrontAddress: "storefrontAddress",
  WebsiteUri: "websiteUri",
  RegularHours: "regularHours",
  SpecialHours: "specialHours",
  ServiceArea: "serviceArea",
  Labels: "labels",
  AdWordsLocationExtensions: "adWordsLocationExtensions",
  Latlng: "latlng",
  OpenInfo: "openInfo",
  Metadata: "metadata",
  Profile: "profile",
  RelationshipData: "relationshipData",
  MoreHours: "moreHours",
  ServiceItems: "serviceItems",
} as const;
export type FieldBundleSocialMiscApi =
  | (typeof FieldBundleSocialMiscApi)[keyof typeof FieldBundleSocialMiscApi]
  | (string & {});

export const fieldBundleSocialMiscApiSchema: EnumSchema<FieldBundleSocialMiscApi> =
  s.enumOf<FieldBundleSocialMiscApi>(FieldBundleSocialMiscApi);

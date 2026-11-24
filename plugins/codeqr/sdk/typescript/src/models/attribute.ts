import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Attribute = {
  Device: "device",
  Country: "country",
  UtmSource: "utm_source",
  UtmMedium: "utm_medium",
  UtmCampaign: "utm_campaign",
  Referrer: "referrer",
  Language: "language",
  City: "city",
  Region: "region",
  Continent: "continent",
  UtmTerm: "utm_term",
  UtmContent: "utm_content",
} as const;
export type Attribute = (typeof Attribute)[keyof typeof Attribute] | (string & {});

export const attributeSchema: EnumSchema<Attribute> = s.enumOf<Attribute>(Attribute);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Feature = {
  Attribution: "attribution",
  Campaign: "campaign",
  Creative: "creative",
  SpendImport: "spend-import",
  SkadImport: "skad-import",
  Postback: "postback",
} as const;
export type Feature = (typeof Feature)[keyof typeof Feature] | (string & {});

export const featureSchema: EnumSchema<Feature> = s.enumOf<Feature>(Feature);

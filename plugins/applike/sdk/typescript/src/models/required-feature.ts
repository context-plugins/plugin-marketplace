import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequiredFeature = {
  Attribution: "attribution",
  Campaign: "campaign",
  Creative: "creative",
  SpendImport: "spend-import",
  SkadImport: "skad-import",
  Postback: "postback",
} as const;
export type RequiredFeature = (typeof RequiredFeature)[keyof typeof RequiredFeature] | (string & {});

export const requiredFeatureSchema: EnumSchema<RequiredFeature> = s.enumOf<RequiredFeature>(RequiredFeature);

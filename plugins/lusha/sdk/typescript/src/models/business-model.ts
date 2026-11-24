import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessModel = {
  B2B: "B2B",
  B2C: "B2C",
  B2G: "B2G",
} as const;
export type BusinessModel = (typeof BusinessModel)[keyof typeof BusinessModel] | (string & {});

export const businessModelSchema: EnumSchema<BusinessModel> = s.enumOf<BusinessModel>(BusinessModel);

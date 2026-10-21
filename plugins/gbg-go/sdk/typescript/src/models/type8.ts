import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type8 = {
  Brand: "brand",
  Delivery: "delivery",
  Flow: "flow",
  Form: "form",
  I18N: "i18n",
  Journey: "journey",
  License: "license",
  Model: "model",
  Organization: "organization",
  Template: "template",
  Interaction: "interaction",
} as const;
export type Type8 = (typeof Type8)[keyof typeof Type8] | (string & {});

export const type8Schema: EnumSchema<Type8> = s.enumOf<Type8>(Type8);

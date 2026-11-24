import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Delivery = {
  Inline: "inline",
  Email: "email",
  Download: "download",
} as const;
export type Delivery = (typeof Delivery)[keyof typeof Delivery] | (string & {});

export const deliverySchema: EnumSchema<Delivery> = s.enumOf<Delivery>(Delivery);

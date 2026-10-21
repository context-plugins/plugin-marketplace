import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The method by which the End User will consume the journey. */
export const Delivery = {
  Page: "page",
  Api: "api",
} as const;
export type Delivery = (typeof Delivery)[keyof typeof Delivery] | (string & {});

export const deliverySchema: EnumSchema<Delivery> = s.enumOf<Delivery>(Delivery);

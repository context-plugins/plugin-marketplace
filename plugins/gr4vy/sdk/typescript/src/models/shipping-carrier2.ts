import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The carrier handling the shipment. */
export const ShippingCarrier2 = {
  Amazon: "amazon",
  Bpost: "bpost",
  Brt: "brt",
  CanadaPost: "canada_post",
  CeskaPosta: "ceska_posta",
  Dhl: "dhl",
  Doordash: "doordash",
  Dpd: "dpd",
  Evri: "evri",
  Fedex: "fedex",
  Gls: "gls",
  Inpost: "inpost",
  JtExpress: "jt_express",
  LandmarkGlobal: "landmark_global",
  Lasership: "lasership",
  Packeta: "packeta",
  Ppl: "ppl",
  Purolator: "purolator",
  RrDonnelley: "rr_donnelley",
  Sda: "sda",
  Ups: "ups",
  Usps: "usps",
  Veho: "veho",
  Other: "other",
} as const;
export type ShippingCarrier2 = (typeof ShippingCarrier2)[keyof typeof ShippingCarrier2] | (string & {});

export const shippingCarrier2Schema: EnumSchema<ShippingCarrier2> =
  s.enumOf<ShippingCarrier2>(ShippingCarrier2);

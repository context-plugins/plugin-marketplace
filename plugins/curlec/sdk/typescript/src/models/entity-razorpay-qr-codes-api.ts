import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayQrCodesApi = {
  QrCode: "qr_code",
} as const;
export type EntityRazorpayQrCodesApi =
  | (typeof EntityRazorpayQrCodesApi)[keyof typeof EntityRazorpayQrCodesApi]
  | (string & {});

export const entityRazorpayQrCodesApiSchema: EnumSchema<EntityRazorpayQrCodesApi> =
  s.enumOf<EntityRazorpayQrCodesApi>(EntityRazorpayQrCodesApi);

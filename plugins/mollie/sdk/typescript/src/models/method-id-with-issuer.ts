import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MethodIdWithIssuer = {
  Voucher: "voucher",
  Giftcard: "giftcard",
} as const;
export type MethodIdWithIssuer = (typeof MethodIdWithIssuer)[keyof typeof MethodIdWithIssuer] | (string & {});

export const methodIdWithIssuerSchema: EnumSchema<MethodIdWithIssuer> =
  s.enumOf<MethodIdWithIssuer>(MethodIdWithIssuer);

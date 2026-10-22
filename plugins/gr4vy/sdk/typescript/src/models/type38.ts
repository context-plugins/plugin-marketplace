import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `merchant-account.three-ds-configuration`. */
export const Type38 = {
  MerchantAccountThreeDsConfiguration: "merchant-account.three-ds-configuration",
} as const;
export type Type38 = (typeof Type38)[keyof typeof Type38] | (string & {});

export const type38Schema: EnumSchema<Type38> = s.enumOf<Type38>(Type38);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeSource = {
  SellerName: "seller_name",
  Unavailable: "unavailable",
} as const;
export type TypeSource = (typeof TypeSource)[keyof typeof TypeSource] | (string & {});

export const typeSourceSchema: EnumSchema<TypeSource> = s.enumOf<TypeSource>(TypeSource);

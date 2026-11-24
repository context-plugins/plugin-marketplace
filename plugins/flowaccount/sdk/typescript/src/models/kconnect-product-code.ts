import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = PCT 3 = PPA 5 = PPB */
export const KConnectProductCode = {
  _1: 1,
  _3: 3,
  _5: 5,
} as const;
export type KConnectProductCode =
  | (typeof KConnectProductCode)[keyof typeof KConnectProductCode]
  | (number & {});

export const kConnectProductCodeSchema: EnumSchema<KConnectProductCode> =
  s.enumOf<KConnectProductCode>(KConnectProductCode);

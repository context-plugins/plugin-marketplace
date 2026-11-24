import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisableIntVinDecoding = {
  _1: "1",
} as const;
export type DisableIntVinDecoding =
  | (typeof DisableIntVinDecoding)[keyof typeof DisableIntVinDecoding]
  | (string & {});

export const disableIntVinDecodingSchema: EnumSchema<DisableIntVinDecoding> =
  s.enumOf<DisableIntVinDecoding>(DisableIntVinDecoding);

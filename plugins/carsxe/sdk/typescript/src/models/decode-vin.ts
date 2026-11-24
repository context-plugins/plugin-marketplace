import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecodeVin = {
  True: "true",
  _1: "1",
} as const;
export type DecodeVin = (typeof DecodeVin)[keyof typeof DecodeVin] | (string & {});

export const decodeVinSchema: EnumSchema<DecodeVin> = s.enumOf<DecodeVin>(DecodeVin);

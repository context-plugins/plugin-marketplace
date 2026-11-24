import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QrcType = {
  Bitlink: "bitlink",
  LongUrl: "long_url",
} as const;
export type QrcType = (typeof QrcType)[keyof typeof QrcType] | (string & {});

export const qrcTypeSchema: EnumSchema<QrcType> = s.enumOf<QrcType>(QrcType);

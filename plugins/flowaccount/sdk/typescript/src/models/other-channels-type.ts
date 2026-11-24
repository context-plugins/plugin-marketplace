import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Receive 3 = ReceivePay 5 = Pay */
export const OtherChannelsType = {
  _1: 1,
  _3: 3,
  _5: 5,
} as const;
export type OtherChannelsType = (typeof OtherChannelsType)[keyof typeof OtherChannelsType] | (number & {});

export const otherChannelsTypeSchema: EnumSchema<OtherChannelsType> =
  s.enumOf<OtherChannelsType>(OtherChannelsType);

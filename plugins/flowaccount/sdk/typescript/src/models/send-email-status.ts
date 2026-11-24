import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Sent 3 = NoEmail */
export const SendEmailStatus = {
  _1: 1,
  _3: 3,
} as const;
export type SendEmailStatus = (typeof SendEmailStatus)[keyof typeof SendEmailStatus] | (number & {});

export const sendEmailStatusSchema: EnumSchema<SendEmailStatus> = s.enumOf<SendEmailStatus>(SendEmailStatus);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Smtp = {
  _0: 0,
  _1: 1,
} as const;
export type Smtp = (typeof Smtp)[keyof typeof Smtp] | (number & {});

export const smtpSchema: EnumSchema<Smtp> = s.enumOf<Smtp>(Smtp);

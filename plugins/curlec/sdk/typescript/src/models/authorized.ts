import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Authorized = {
  _0: 0,
  _1: 1,
} as const;
export type Authorized = (typeof Authorized)[keyof typeof Authorized] | (number & {});

export const authorizedSchema: EnumSchema<Authorized> = s.enumOf<Authorized>(Authorized);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExpiryDays = {
  _30: 30,
  _90: 90,
  _365: 365,
} as const;
export type ExpiryDays = (typeof ExpiryDays)[keyof typeof ExpiryDays] | (number & {});

export const expiryDaysSchema: EnumSchema<ExpiryDays> = s.enumOf<ExpiryDays>(ExpiryDays);

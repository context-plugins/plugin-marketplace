import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the limit has a finite cap or is unlimited. */
export const Mode1 = {
  Unlimited: "UNLIMITED",
} as const;
export type Mode1 = (typeof Mode1)[keyof typeof Mode1] | (string & {});

export const mode1Schema: EnumSchema<Mode1> = s.enumOf<Mode1>(Mode1);

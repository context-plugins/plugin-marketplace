import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditsCharged = {
  _0: 0,
} as const;
export type CreditsCharged = (typeof CreditsCharged)[keyof typeof CreditsCharged] | (number & {});

export const creditsChargedSchema: EnumSchema<CreditsCharged> = s.enumOf<CreditsCharged>(CreditsCharged);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Tranche type. `ordinary` for the recurring/regular dividend; `special` for an extra/bonus/one-off
 * dividend. When an issuer proposes both for the same date, they are returned as two separate
 * events.
 */
export const Kind = {
  Ordinary: "ordinary",
  Special: "special",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);

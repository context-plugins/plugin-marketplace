import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Environment classification. */
export const Classification = {
  Production: "PRODUCTION",
  Test: "TEST",
} as const;
export type Classification = (typeof Classification)[keyof typeof Classification] | (string & {});

export const classificationSchema: EnumSchema<Classification> = s.enumOf<Classification>(Classification);

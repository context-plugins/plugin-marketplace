import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Confidence level to assign to the Detection Rule. */
export const Confidence = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type Confidence = (typeof Confidence)[keyof typeof Confidence] | (number & {});

export const confidenceSchema: EnumSchema<Confidence> = s.enumOf<Confidence>(Confidence);

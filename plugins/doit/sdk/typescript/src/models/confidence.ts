import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Confidence = {
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type Confidence = (typeof Confidence)[keyof typeof Confidence] | (string & {});

export const confidenceSchema: EnumSchema<Confidence> = s.enumOf<Confidence>(Confidence);

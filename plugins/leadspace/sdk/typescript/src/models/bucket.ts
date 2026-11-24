import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Bucket = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
} as const;
export type Bucket = (typeof Bucket)[keyof typeof Bucket] | (string & {});

export const bucketSchema: EnumSchema<Bucket> = s.enumOf<Bucket>(Bucket);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DedicationType = {
  InMemoryOf: "in_memory_of",
  InHonorOf: "in_honor_of",
} as const;
export type DedicationType = (typeof DedicationType)[keyof typeof DedicationType] | (string & {});

export const dedicationTypeSchema: EnumSchema<DedicationType> = s.enumOf<DedicationType>(DedicationType);

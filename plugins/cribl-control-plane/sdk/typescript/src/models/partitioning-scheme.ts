import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const PartitioningScheme = {
  Ddss: "ddss",
} as const;
export type PartitioningScheme = (typeof PartitioningScheme)[keyof typeof PartitioningScheme] | (string & {});

export const partitioningSchemeSchema: EnumSchema<PartitioningScheme> =
  s.enumOf<PartitioningScheme>(PartitioningScheme);

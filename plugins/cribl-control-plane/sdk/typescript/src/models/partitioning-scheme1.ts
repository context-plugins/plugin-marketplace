import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Partitioning scheme used for this dataset. Using a known scheme like DDSS enables more efficient
 * data reading and retrieval.
 */
export const PartitioningScheme1 = {
  None: "none",
  Ddss: "ddss",
} as const;
export type PartitioningScheme1 =
  | (typeof PartitioningScheme1)[keyof typeof PartitioningScheme1]
  | (string & {});

export const partitioningScheme1Schema: EnumSchema<PartitioningScheme1> =
  s.enumOf<PartitioningScheme1>(PartitioningScheme1);

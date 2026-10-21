import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Estimated ingest rate for a Cribl.Cloud Worker Group, in GB/sec. */
export const EstimatedIngestRateOptionsConfigGroup = {
  _1024: 1024,
  _2048: 2048,
  _3072: 3072,
  _4096: 4096,
  _5120: 5120,
  _7168: 7168,
  _10240: 10240,
  _13312: 13312,
  _15360: 15360,
} as const;
export type EstimatedIngestRateOptionsConfigGroup =
  | (typeof EstimatedIngestRateOptionsConfigGroup)[keyof typeof EstimatedIngestRateOptionsConfigGroup]
  | (number & {});

export const estimatedIngestRateOptionsConfigGroupSchema: EnumSchema<EstimatedIngestRateOptionsConfigGroup> =
  s.enumOf<EstimatedIngestRateOptionsConfigGroup>(EstimatedIngestRateOptionsConfigGroup);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { criblLakeCollectorConf1Schema, type CriblLakeCollectorConf1 } from "./cribl-lake-collector-conf1.js";

/** CriblLake collector configuration */
export type CollectorCriblLake = {
  /** Collector type @default "cribl_lake" */
  type?: "cribl_lake";
  /** Collector configuration */
  conf: CriblLakeCollectorConf1;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorCriblLakeSchema: Schema<CollectorCriblLake> = s.object<CollectorCriblLake>({
  type: s.defaulted(s.literal("cribl_lake"), "cribl_lake"),
  conf: criblLakeCollectorConf1Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});

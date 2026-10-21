import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conf4Schema, type Conf4 } from "./conf4.js";

/** S3 collector configuration */
export type CollectorS3 = {
  /** Collector type @default "s3" */
  type?: "s3";
  /** Collector configuration */
  conf: Conf4;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorS3Schema: Schema<CollectorS3> = s.object<CollectorS3>({
  type: s.defaulted(s.literal("s3"), "s3"),
  conf: conf4Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});

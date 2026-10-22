import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Base collector schema */
export type CollectorBase = {
  /** Collector type */
  type: string;
  /** Collector configuration */
  conf: Record<string, unknown>;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorBaseSchema: Schema<CollectorBase> = s.object<CollectorBase>({
  type: s.string(),
  conf: s.record(s.string(), s.unknown()),
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});

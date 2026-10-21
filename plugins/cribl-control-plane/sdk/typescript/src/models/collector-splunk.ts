import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conf5Schema, type Conf5 } from "./conf5.js";

/** Splunk collector configuration */
export type CollectorSplunk = {
  /** Collector type @default "splunk" */
  type?: "splunk";
  /** Collector configuration */
  conf: Conf5;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorSplunkSchema: Schema<CollectorSplunk> = s.object<CollectorSplunk>({
  type: s.defaulted(s.literal("splunk"), "splunk"),
  conf: conf5Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});

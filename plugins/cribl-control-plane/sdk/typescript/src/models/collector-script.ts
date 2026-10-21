import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scriptCollectorConf1Schema, type ScriptCollectorConf1 } from "./script-collector-conf1.js";

/** Script collector configuration */
export type CollectorScript = {
  /** Collector type @default "script" */
  type?: "script";
  /** Collector configuration */
  conf: ScriptCollectorConf1;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorScriptSchema: Schema<CollectorScript> = s.object<CollectorScript>({
  type: s.defaulted(s.literal("script"), "script"),
  conf: scriptCollectorConf1Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});

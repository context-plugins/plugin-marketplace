import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { databaseCollectorConf1Schema, type DatabaseCollectorConf1 } from "./database-collector-conf1.js";

/** Database collector configuration */
export type CollectorDatabase = {
  /** Collector type @default "database" */
  type?: "database";
  /** Collector configuration */
  conf: DatabaseCollectorConf1;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorDatabaseSchema: Schema<CollectorDatabase> = s.object<CollectorDatabase>({
  type: s.defaulted(s.literal("database"), "database"),
  conf: databaseCollectorConf1Schema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});

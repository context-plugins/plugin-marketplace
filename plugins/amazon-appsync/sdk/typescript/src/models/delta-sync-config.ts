import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeltaSyncConfig = {
  /** The number of minutes that an Item is stored in the data source. */
  baseTableTtl?: number;
  /** The Delta Sync table name. */
  deltaSyncTableName?: string;
  /** The number of minutes that a Delta Sync log entry is stored in the Delta Sync table. */
  deltaSyncTableTtl?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deltaSyncConfigSchema: Schema<DeltaSyncConfig> = s.object<DeltaSyncConfig>(
  {
    baseTableTtl: s.optional(s.int()),
    deltaSyncTableName: s.optional(s.string()),
    deltaSyncTableTtl: s.optional(s.int()),
    _keysMap: {
      baseTableTtl: "baseTableTTL",
      deltaSyncTableTtl: "deltaSyncTableTTL",
    },
  },
  { additionalProperties: s.json() },
);

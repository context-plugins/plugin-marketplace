import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request message for DataprocMetastore.MoveTableToDatabase. */
export type MoveTableToDatabaseRequest = {
  /** Required. The name of the database where the table resides. */
  dbName?: string;
  /** Required. The name of the table to be moved. */
  tableName?: string;
  /** Required. The name of the database where the table should be moved. */
  destinationDbName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moveTableToDatabaseRequestSchema: Schema<MoveTableToDatabaseRequest> =
  s.object<MoveTableToDatabaseRequest>(
    {
      dbName: s.optional(s.string()),
      tableName: s.optional(s.string()),
      destinationDbName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MongoDB data source object identifier. */
export type MongodbObjectIdentifier = {
  /** Required. The collection name. */
  collection?: string;
  /** Required. The database name. */
  database?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbObjectIdentifierSchema: Schema<MongodbObjectIdentifier> =
  s.object<MongodbObjectIdentifier>(
    {
      collection: s.optional(s.string()),
      database: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

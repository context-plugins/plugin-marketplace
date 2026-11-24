import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbCollectionSchema, type MongodbCollection } from "./mongodb-collection.js";

/** MongoDB Database. */
export type MongodbDatabase = {
  /** Collections in the database. */
  collections?: MongodbCollection[];
  /** The database name. */
  database?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbDatabaseSchema: Schema<MongodbDatabase> = s.object<MongodbDatabase>(
  {
    collections: s.optional(s.array(s.lazy(() => mongodbCollectionSchema))),
    database: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

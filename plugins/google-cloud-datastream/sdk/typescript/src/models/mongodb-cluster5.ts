import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbDatabaseSchema, type MongodbDatabase } from "./mongodb-database.js";

/** The MongoDB collections to include in the stream. */
export type MongodbCluster5 = {
  /** MongoDB databases in the cluster. */
  databases?: MongodbDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbCluster5Schema: Schema<MongodbCluster5> = s.object<MongodbCluster5>(
  {
    databases: s.optional(s.array(s.lazy(() => mongodbDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);

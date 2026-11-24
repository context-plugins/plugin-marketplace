import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbDatabaseSchema, type MongodbDatabase } from "./mongodb-database.js";

/** MongoDB Cluster structure. */
export type MongodbCluster = {
  /** MongoDB databases in the cluster. */
  databases?: MongodbDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbClusterSchema: Schema<MongodbCluster> = s.object<MongodbCluster>(
  {
    databases: s.optional(s.array(s.lazy(() => mongodbDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);

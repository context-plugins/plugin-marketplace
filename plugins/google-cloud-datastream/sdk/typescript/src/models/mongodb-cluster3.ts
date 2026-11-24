import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbDatabaseSchema, type MongodbDatabase } from "./mongodb-database.js";

/** Optional. MongoDB cluster to enrich with child data objects and metadata. */
export type MongodbCluster3 = {
  /** MongoDB databases in the cluster. */
  databases?: MongodbDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbCluster3Schema: Schema<MongodbCluster3> = s.object<MongodbCluster3>(
  {
    databases: s.optional(s.array(s.lazy(() => mongodbDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);

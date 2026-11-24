import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbDatabaseSchema, type MongodbDatabase } from "./mongodb-database.js";

/** Enriched MongoDB cluster. */
export type MongodbCluster1 = {
  /** MongoDB databases in the cluster. */
  databases?: MongodbDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbCluster1Schema: Schema<MongodbCluster1> = s.object<MongodbCluster1>(
  {
    databases: s.optional(s.array(s.lazy(() => mongodbDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbDatabaseSchema, type MongodbDatabase } from "./mongodb-database.js";

/** The MongoDB collections to exclude from the stream. */
export type MongodbCluster4 = {
  /** MongoDB databases in the cluster. */
  databases?: MongodbDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbCluster4Schema: Schema<MongodbCluster4> = s.object<MongodbCluster4>(
  {
    databases: s.optional(s.array(s.lazy(() => mongodbDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);

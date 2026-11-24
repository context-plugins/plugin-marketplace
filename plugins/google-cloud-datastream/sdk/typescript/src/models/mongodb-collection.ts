import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mongodbFieldSchema, type MongodbField } from "./mongodb-field.js";

/** MongoDB Collection. */
export type MongodbCollection = {
  /** The collection name. */
  collection?: string;
  /** Fields in the collection. */
  fields?: MongodbField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbCollectionSchema: Schema<MongodbCollection> = s.object<MongodbCollection>(
  {
    collection: s.optional(s.string()),
    fields: s.optional(s.array(s.lazy(() => mongodbFieldSchema))),
  },
  { additionalProperties: s.json() },
);

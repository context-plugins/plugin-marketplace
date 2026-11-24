import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schemaAttributeSchema, type SchemaAttribute } from "./schema-attribute.js";

export type SchemaModel = {
  /** An array of attributes specifying the name and type of each field in a dataset. */
  attributes?: SchemaAttribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaModelSchema: Schema<SchemaModel> = s.object<SchemaModel>(
  {
    attributes: s.optional(s.array(s.lazy(() => schemaAttributeSchema))),
    _keysMap: {
      attributes: "Attributes",
    },
  },
  { additionalProperties: s.json() },
);

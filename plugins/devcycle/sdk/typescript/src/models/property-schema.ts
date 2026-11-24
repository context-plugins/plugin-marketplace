import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enumSchemaModelSchema, type EnumSchemaModel } from "./enum-schema-model.js";
import { schemaTypeSchema, type SchemaType } from "./schema-type.js";

export type PropertySchema = {
  schemaType?: SchemaType;
  required?: boolean;
  enumSchema?: EnumSchemaModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propertySchemaSchema: Schema<PropertySchema> = s.object<PropertySchema>(
  {
    schemaType: s.optional(s.lazy(() => schemaTypeSchema)),
    required: s.optional(s.boolean()),
    enumSchema: s.optional(s.lazy(() => enumSchemaModelSchema)),
  },
  { additionalProperties: s.json() },
);

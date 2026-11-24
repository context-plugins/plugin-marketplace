import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeBoomiDataHubModelsApiSchema,
  type TypeBoomiDataHubModelsApi,
} from "./type-boomi-data-hub-models-api.js";

/** A field definition within a data model schema. */
export type ModelField = {
  /** Field name used as the identifier. */
  name: string;
  /** Data type of the field. */
  type: TypeBoomiDataHubModelsApi;
  /** Whether this field is required. */
  required?: boolean;
  /** Whether this field must be unique across records. */
  unique?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelFieldSchema: Schema<ModelField> = s.object<ModelField>(
  {
    name: s.string(),
    type: typeBoomiDataHubModelsApiSchema,
    required: s.optional(s.boolean()),
    unique: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);

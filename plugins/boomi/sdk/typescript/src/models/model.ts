import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelFieldSchema, type ModelField } from "./model-field.js";
import {
  statusBoomiDataHubModelsApiSchema,
  type StatusBoomiDataHubModelsApi,
} from "./status-boomi-data-hub-models-api.js";

/** A data model defining the schema and matching rules for a master data domain. */
export type Model = {
  /** Unique identifier of the model. */
  id?: string;
  /** Display name of the model. */
  name?: string;
  /** Current version number of the model. */
  version?: number;
  /** Version number of the last published model. */
  publishedVersion?: number;
  /** Publication status of the model. */
  status?: StatusBoomiDataHubModelsApi;
  /** Field definitions for this model's schema. */
  fields?: ModelField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelSchema: Schema<Model> = s.object<Model>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    version: s.optional(s.int()),
    publishedVersion: s.optional(s.int()),
    status: s.optional(s.lazy(() => statusBoomiDataHubModelsApiSchema)),
    fields: s.optional(s.array(s.lazy(() => modelFieldSchema))),
  },
  { additionalProperties: s.json() },
);

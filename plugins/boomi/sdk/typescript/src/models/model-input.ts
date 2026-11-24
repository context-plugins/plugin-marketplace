import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelFieldSchema, type ModelField } from "./model-field.js";

/** Input for creating or updating a data model. */
export type ModelInput = {
  /** Display name for the model. */
  name: string;
  /** Field definitions for the model schema. */
  fields?: ModelField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelInputSchema: Schema<ModelInput> = s.object<ModelInput>(
  {
    name: s.string(),
    fields: s.optional(s.array(s.lazy(() => modelFieldSchema))),
  },
  { additionalProperties: s.json() },
);

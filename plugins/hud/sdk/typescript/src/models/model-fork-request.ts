import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a new trainable model derived from an existing (trainable) one. */
export type ModelForkRequest = {
  sourceModelId: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const modelForkRequestProperties: s.Shape<ModelForkRequest> = {
  sourceModelId: s.string(),
  name: s.string(),
  _keysMap: {
    sourceModelId: "source_model_id",
  },
};

export const modelForkRequestInternalSchema: Schema<ModelForkRequest> = s.object<ModelForkRequest>(
  modelForkRequestProperties,
  { additionalProperties: s.json() },
);

export const modelForkRequestSchema: Schema<ModelForkRequest> = s.lazySchema(() =>
  s.object<ModelForkRequest>(
    {
      ...modelForkRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(255)),
    },
    { additionalProperties: s.json() },
  ),
);

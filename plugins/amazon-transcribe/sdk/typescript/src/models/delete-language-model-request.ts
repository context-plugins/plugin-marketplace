import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteLanguageModelRequest = {
  /** The name of the custom language model you want to delete. Model names are case sensitive. */
  modelName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteLanguageModelRequestSchema: Schema<DeleteLanguageModelRequest> =
  s.object<DeleteLanguageModelRequest>(
    {
      modelName: s.string(),
      _keysMap: {
        modelName: "ModelName",
      },
    },
    { additionalProperties: s.json() },
  );

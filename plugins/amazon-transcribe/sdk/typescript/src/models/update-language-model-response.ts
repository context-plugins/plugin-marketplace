import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelStatus2Schema, type ModelStatus2 } from "./model-status2.js";

export type UpdateLanguageModelResponse = {
  /** The name of the custom language model that was updated. */
  modelName?: string;
  /** The status of the specified custom language model. */
  modelStatus?: ModelStatus2;
  /** The date and time the specified custom language model was last modified. */
  lastModifiedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateLanguageModelResponseSchema: Schema<UpdateLanguageModelResponse> =
  s.object<UpdateLanguageModelResponse>(
    {
      modelName: s.optional(s.string()),
      modelStatus: s.optional(s.lazy(() => modelStatus2Schema)),
      lastModifiedTime: s.optional(s.dateTime()),
      _keysMap: {
        modelName: "ModelName",
        modelStatus: "ModelStatus",
        lastModifiedTime: "LastModifiedTime",
      },
    },
    { additionalProperties: s.json() },
  );

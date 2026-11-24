import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ImportModelResponse = {
  /** The Amazon Resource Name (ARN) of the custom model being imported. */
  modelArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importModelResponseSchema: Schema<ImportModelResponse> = s.object<ImportModelResponse>(
  {
    modelArn: s.optional(s.string()),
    _keysMap: {
      modelArn: "ModelArn",
    },
  },
  { additionalProperties: s.json() },
);

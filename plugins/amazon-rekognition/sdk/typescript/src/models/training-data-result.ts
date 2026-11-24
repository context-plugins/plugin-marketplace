import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { trainingDataSchema, type TrainingData } from "./training-data.js";
import { validationDataSchema, type ValidationData } from "./validation-data.js";

export type TrainingDataResult = {
  input?: TrainingData;
  output?: TrainingData;
  validation?: ValidationData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trainingDataResultSchema: Schema<TrainingDataResult> = s.object<TrainingDataResult>(
  {
    input: s.optional(s.lazy(() => trainingDataSchema)),
    output: s.optional(s.lazy(() => trainingDataSchema)),
    validation: s.optional(s.lazy(() => validationDataSchema)),
    _keysMap: {
      input: "Input",
      output: "Output",
      validation: "Validation",
    },
  },
  { additionalProperties: s.json() },
);

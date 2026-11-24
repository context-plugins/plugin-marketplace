import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testingDataSchema, type TestingData } from "./testing-data.js";
import { validationDataSchema, type ValidationData } from "./validation-data.js";

export type TestingDataResult = {
  input?: TestingData;
  output?: TestingData;
  validation?: ValidationData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testingDataResultSchema: Schema<TestingDataResult> = s.object<TestingDataResult>(
  {
    input: s.optional(s.lazy(() => testingDataSchema)),
    output: s.optional(s.lazy(() => testingDataSchema)),
    validation: s.optional(s.lazy(() => validationDataSchema)),
    _keysMap: {
      input: "Input",
      output: "Output",
      validation: "Validation",
    },
  },
  { additionalProperties: s.json() },
);

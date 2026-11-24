import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InputCarsXeRecallsApi = {
  year?: string;
  make?: string;
  model?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputCarsXeRecallsApiSchema: Schema<InputCarsXeRecallsApi> = s.object<InputCarsXeRecallsApi>(
  {
    year: s.optional(s.string()),
    make: s.optional(s.string()),
    model: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { inputCarsXeRecallsApiSchema, type InputCarsXeRecallsApi } from "./input-cars-xe-recalls-api.js";

export type V1RecallsYmmResponse = {
  success?: boolean;
  input?: InputCarsXeRecallsApi;
  data?: Data;
  timestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RecallsYmmResponseSchema: Schema<V1RecallsYmmResponse> = s.object<V1RecallsYmmResponse>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.lazy(() => inputCarsXeRecallsApiSchema)),
    data: s.optional(s.lazy(() => dataSchema)),
    timestamp: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

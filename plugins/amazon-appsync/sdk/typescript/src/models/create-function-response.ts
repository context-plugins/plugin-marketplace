import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { functionConfigurationSchema, type FunctionConfiguration } from "./function-configuration.js";

export type CreateFunctionResponse = {
  functionConfiguration?: FunctionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFunctionResponseSchema: Schema<CreateFunctionResponse> = s.object<CreateFunctionResponse>(
  {
    functionConfiguration: s.optional(s.lazy(() => functionConfigurationSchema)),
  },
  { additionalProperties: s.json() },
);

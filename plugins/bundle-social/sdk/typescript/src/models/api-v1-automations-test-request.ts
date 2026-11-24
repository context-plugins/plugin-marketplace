import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputSchema, type Input } from "./input.js";

export type ApiV1AutomationsTestRequest = {
  input?: Input;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AutomationsTestRequestSchema: Schema<ApiV1AutomationsTestRequest> =
  s.object<ApiV1AutomationsTestRequest>(
    {
      input: s.optional(s.lazy(() => inputSchema)),
    },
    { additionalProperties: s.json() },
  );

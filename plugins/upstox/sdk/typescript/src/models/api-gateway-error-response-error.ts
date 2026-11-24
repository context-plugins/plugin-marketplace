import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { problemSchema, type Problem } from "./problem.js";
import { statusSchema, type Status } from "./status.js";

export type ApiGatewayErrorResponseError = {
  status?: Status;
  errors?: Problem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiGatewayErrorResponseErrorSchema: Schema<ApiGatewayErrorResponseError> =
  s.object<ApiGatewayErrorResponseError>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      errors: s.optional(s.array(s.lazy(() => problemSchema))),
    },
    { additionalProperties: s.json() },
  );

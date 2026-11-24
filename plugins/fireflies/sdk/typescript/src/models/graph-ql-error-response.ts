import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { graphQlErrorSchema, type GraphQlError } from "./graph-ql-error.js";

export type GraphQlErrorResponse = {
  errors?: GraphQlError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const graphQlErrorResponseSchema: Schema<GraphQlErrorResponse> = s.object<GraphQlErrorResponse>(
  {
    errors: s.optional(s.array(s.lazy(() => graphQlErrorSchema))),
  },
  { additionalProperties: s.json() },
);

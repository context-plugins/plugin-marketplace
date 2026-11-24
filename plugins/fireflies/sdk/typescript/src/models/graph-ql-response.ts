import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { graphQlErrorSchema, type GraphQlError } from "./graph-ql-error.js";

export type GraphQlResponse = {
  /** The result data returned by the GraphQL operation */
  data?: Record<string, unknown>;
  /** GraphQL errors, if any */
  errors?: GraphQlError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const graphQlResponseSchema: Schema<GraphQlResponse> = s.object<GraphQlResponse>(
  {
    data: s.optional(s.record(s.string(), s.unknown())),
    errors: s.optional(s.array(s.lazy(() => graphQlErrorSchema))),
  },
  { additionalProperties: s.json() },
);

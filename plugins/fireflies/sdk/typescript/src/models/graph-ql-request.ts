import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GraphQlRequest = {
  /** The GraphQL query or mutation string */
  query: string;
  /** Variables referenced in the query string */
  variables?: Record<string, unknown>;
  /** Optional name of the operation to execute (for multi-operation documents) */
  operationName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const graphQlRequestSchema: Schema<GraphQlRequest> = s.object<GraphQlRequest>(
  {
    query: s.string(),
    variables: s.optional(s.record(s.string(), s.unknown())),
    operationName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

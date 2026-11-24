import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";

/** The response message for Operations.ListOperations. */
export type ListOperationsResponse = {
  /** A list of operations that matches the specified filter in the request. */
  operations?: Operation[];
  /**
   * Unordered list. Unreachable resources. Populated when the request sets
   * ListOperationsRequest.return_partial_success and reads across collections. For example, when
   * attempting to list all resources across all supported locations.
   */
  unreachable?: string[];
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listOperationsResponseSchema: Schema<ListOperationsResponse> = s.object<ListOperationsResponse>(
  {
    operations: s.optional(s.array(s.lazy(() => operationSchema))),
    unreachable: s.optional(s.array(s.string())),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

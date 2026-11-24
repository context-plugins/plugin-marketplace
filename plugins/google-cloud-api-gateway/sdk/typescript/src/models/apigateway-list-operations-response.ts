import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apigatewayOperationSchema, type ApigatewayOperation } from "./apigateway-operation.js";

/** The response message for Operations.ListOperations. */
export type ApigatewayListOperationsResponse = {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ApigatewayOperation[];
  /** The standard List next-page token. */
  nextPageToken?: string;
  /**
   * Unordered list. Unreachable resources. Populated when the request sets
   * `ListOperationsRequest.return_partial_success` and reads across collections. For example, when
   * attempting to list all resources across all supported locations.
   */
  unreachable?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayListOperationsResponseSchema: Schema<ApigatewayListOperationsResponse> =
  s.object<ApigatewayListOperationsResponse>(
    {
      operations: s.optional(s.array(s.lazy(() => apigatewayOperationSchema))),
      nextPageToken: s.optional(s.string()),
      unreachable: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );

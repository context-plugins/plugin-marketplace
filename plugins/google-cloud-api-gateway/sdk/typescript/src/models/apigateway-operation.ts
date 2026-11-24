import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apigatewayStatus2Schema, type ApigatewayStatus2 } from "./apigateway-status2.js";

/** This resource represents a long-running operation that is the result of a network API call. */
export type ApigatewayOperation = {
  /**
   * The server-assigned name, which is only unique within the same service that originally returns
   * it. If you use the default HTTP mapping, the `name` should be a resource name ending with
   * `operations/{unique_id}`.
   */
  name?: string;
  /**
   * If the value is `false`, it means the operation is still in progress. If `true`, the operation
   * is completed, and either `error` or `response` is available.
   */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: ApigatewayStatus2;
  /**
   * The normal, successful response of the operation. If the original method returns no data on
   * success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is
   * standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the
   * response should have the type `XxxResponse`, where `Xxx` is the original method name. For
   * example, if the original method name is `TakeSnapshot()`, the inferred response type is
   * `TakeSnapshotResponse`.
   */
  response?: Record<string, unknown>;
  /**
   * Service-specific metadata associated with the operation. It typically contains progress
   * information and common metadata such as create time. Some services might not provide such
   * metadata. Any method that returns a long-running operation should document the metadata type,
   * if any.
   */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apigatewayOperationSchema: Schema<ApigatewayOperation> = s.object<ApigatewayOperation>(
  {
    name: s.optional(s.string()),
    done: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => apigatewayStatus2Schema)),
    response: s.optional(s.record(s.string(), s.unknown())),
    metadata: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);

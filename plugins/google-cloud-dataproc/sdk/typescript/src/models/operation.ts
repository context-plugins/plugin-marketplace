import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status3Schema, type Status3 } from "./status3.js";

/** This resource represents a long-running operation that is the result of a network API call. */
export type Operation = {
  /**
   * The normal, successful response of the operation. If the original method returns no data on
   * success, such as Delete, the response is google.protobuf.Empty. If the original method is
   * standard Get/Create/Update, the response should be the resource. For other methods, the
   * response should have the type XxxResponse, where Xxx is the original method name. For example,
   * if the original method name is TakeSnapshot(), the inferred response type is
   * TakeSnapshotResponse.
   */
  response?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status3;
  /**
   * If the value is false, it means the operation is still in progress. If true, the operation is
   * completed, and either error or response is available.
   */
  done?: boolean;
  /**
   * The server-assigned name, which is only unique within the same service that originally returns
   * it. If you use the default HTTP mapping, the name should be a resource name ending with
   * operations/{unique_id}.
   */
  name?: string;
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

export const operationSchema: Schema<Operation> = s.object<Operation>(
  {
    response: s.optional(s.record(s.string(), s.unknown())),
    error: s.optional(s.lazy(() => status3Schema)),
    done: s.optional(s.boolean()),
    name: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);

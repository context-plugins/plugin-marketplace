import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

/** This resource represents a long-running operation that is the result of a network API call. */
export type Operation = {
  /**
   * Represents the transfer operation object. To request a TransferOperation object, use
   * transferOperations.get.
   */
  metadata?: Record<string, unknown>;
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
   * The server-assigned unique name. The format of `name` is `transferOperations/some/unique/name`.
   */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status1;
  /**
   * If the value is `false`, it means the operation is still in progress. If `true`, the operation
   * is completed, and either `error` or `response` is available.
   */
  done?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const operationSchema: Schema<Operation> = s.object<Operation>(
  {
    metadata: s.optional(s.record(s.string(), s.unknown())),
    response: s.optional(s.record(s.string(), s.unknown())),
    name: s.optional(s.string()),
    error: s.optional(s.lazy(() => status1Schema)),
    done: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);

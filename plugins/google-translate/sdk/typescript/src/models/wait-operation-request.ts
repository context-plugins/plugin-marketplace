import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The request message for Operations.WaitOperation. */
export type WaitOperationRequest = {
  /**
   * The maximum duration to wait before timing out. If left blank, the wait will be at most the
   * time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified,
   * the shorter one will be used.
   */
  timeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const waitOperationRequestSchema: Schema<WaitOperationRequest> = s.object<WaitOperationRequest>(
  {
    timeout: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

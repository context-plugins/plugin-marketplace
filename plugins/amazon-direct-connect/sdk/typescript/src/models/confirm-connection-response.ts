import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionStateSchema, type ConnectionState } from "./connection-state.js";

export type ConfirmConnectionResponse = {
  /**
   * The state of the connection. The following are the possible values: ordering: The initial state
   * of a hosted connection provisioned on an interconnect. The connection stays in the ordering
   * state until the owner of the hosted connection confirms or declines the connection order.
   * requested: The initial state of a standard connection. The connection stays in the requested
   * state until the Letter of Authorization (LOA) is sent to the customer. pending: The connection
   * has been approved and is being initialized. available: The network link is up and the
   * connection is ready for use. down: The network l
   */
  connectionState?: ConnectionState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const confirmConnectionResponseSchema: Schema<ConfirmConnectionResponse> =
  s.object<ConfirmConnectionResponse>(
    {
      connectionState: s.optional(s.lazy(() => connectionStateSchema)),
    },
    { additionalProperties: s.json() },
  );

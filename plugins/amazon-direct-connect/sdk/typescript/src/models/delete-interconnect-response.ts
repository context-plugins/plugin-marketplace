import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { interconnectStateSchema, type InterconnectState } from "./interconnect-state.js";

export type DeleteInterconnectResponse = {
  /**
   * The state of the interconnect. The following are the possible values: requested: The initial
   * state of an interconnect. The interconnect stays in the requested state until the Letter of
   * Authorization (LOA) is sent to the customer. pending: The interconnect is approved, and is
   * being initialized. available: The network link is up, and the interconnect is ready for use.
   * down: The network link is down. deleting: The interconnect is being deleted. deleted: The
   * interconnect is deleted. unknown: The state of the interconnect is not available.
   */
  interconnectState?: InterconnectState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteInterconnectResponseSchema: Schema<DeleteInterconnectResponse> =
  s.object<DeleteInterconnectResponse>(
    {
      interconnectState: s.optional(s.lazy(() => interconnectStateSchema)),
    },
    { additionalProperties: s.json() },
  );

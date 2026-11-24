import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cancelAtCycleEndSchema, type CancelAtCycleEnd } from "./cancel-at-cycle-end.js";

export type SubscriptionsCancelRequest = {
  /** 1 = cancel at end of current cycle; 0 = cancel immediately. */
  cancelAtCycleEnd?: CancelAtCycleEnd;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionsCancelRequestSchema: Schema<SubscriptionsCancelRequest> =
  s.object<SubscriptionsCancelRequest>(
    {
      cancelAtCycleEnd: s.optional(s.lazy(() => cancelAtCycleEndSchema)),
      _keysMap: {
        cancelAtCycleEnd: "cancel_at_cycle_end",
      },
    },
    { additionalProperties: s.json() },
  );

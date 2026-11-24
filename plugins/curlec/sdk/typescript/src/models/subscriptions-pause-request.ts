import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pauseAtSchema, type PauseAt } from "./pause-at.js";

export type SubscriptionsPauseRequest = {
  /** When to pause. 'now' = immediately; 'cycle_end' = after current cycle. */
  pauseAt?: PauseAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionsPauseRequestSchema: Schema<SubscriptionsPauseRequest> =
  s.object<SubscriptionsPauseRequest>(
    {
      pauseAt: s.optional(s.lazy(() => pauseAtSchema)),
      _keysMap: {
        pauseAt: "pause_at",
      },
    },
    { additionalProperties: s.json() },
  );

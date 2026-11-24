import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { queuedMessageSchema, type QueuedMessage } from "./queued-message.js";
import { steeringCutoffSchema, type SteeringCutoff } from "./steering-cutoff.js";

export type QueueListResponse = {
  queue: QueuedMessage[];
  steeringCutoffs?: SteeringCutoff[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queueListResponseSchema: Schema<QueueListResponse> = s.object<QueueListResponse>(
  {
    queue: s.array(s.lazy(() => queuedMessageSchema)),
    steeringCutoffs: s.optional(s.array(s.lazy(() => steeringCutoffSchema))),
  },
  { additionalProperties: s.json() },
);

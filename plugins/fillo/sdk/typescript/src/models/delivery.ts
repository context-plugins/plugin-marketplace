import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { kindSchema, type Kind } from "./kind.js";
import { stateSchema, type State } from "./state.js";

export type Delivery = {
  id: string;
  destinationKey: string;
  kind: Kind;
  /** The same name as the matching destination's label — never a full webhook URL. */
  destinationLabel: string;
  destinationDetail: string | null;
  event: Event;
  state: State;
  attempts: number;
  httpStatus: number | null;
  lastError: string | null;
  responseId: string | null;
  nextAttemptAt: number | null;
  queuedAt: number;
  updatedAt: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deliverySchema: Schema<Delivery> = s.object<Delivery>(
  {
    id: s.string(),
    destinationKey: s.string(),
    kind: kindSchema,
    destinationLabel: s.string(),
    destinationDetail: s.nullable(s.string()),
    event: eventSchema,
    state: stateSchema,
    attempts: s.int(),
    httpStatus: s.nullable(s.int()),
    lastError: s.nullable(s.string()),
    responseId: s.nullable(s.string()),
    nextAttemptAt: s.nullable(s.int()),
    queuedAt: s.int(),
    updatedAt: s.int(),
  },
  { additionalProperties: s.json() },
);

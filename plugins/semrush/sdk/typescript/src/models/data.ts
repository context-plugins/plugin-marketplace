import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventActionSchema, type EventAction } from "./event-action.js";
import { eventStateSchema, type EventState } from "./event-state.js";

/** Event status response */
export type Data = {
  /** Global event identifier */
  id?: string;
  /** Event registration time in ISO format */
  ts?: Date;
  /**
   * State of event processing.
   * * 1 - Event has been registered and awaiting processing
   * * 2 - Event processing was delayed
   * * 3 - Event was processed
   * * 4 - Event has nothing to do with
   * * 5 - Event processing was blocked by internal rules
   */
  state?: EventState;
  /** Time when event get in current state in ISO format */
  stateOn?: Date;
  /** Processing decision */
  decision?: string;
  /** Actions taken on event */
  actions?: EventAction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    id: s.optional(s.string()),
    ts: s.optional(s.dateTime()),
    state: s.optional(s.lazy(() => eventStateSchema)),
    stateOn: s.optional(s.dateTime()),
    decision: s.optional(s.string()),
    actions: s.optional(s.array(s.lazy(() => eventActionSchema))),
    _keysMap: {
      stateOn: "state_on",
    },
  },
  { additionalProperties: s.json() },
);

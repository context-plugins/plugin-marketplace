import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. The state of the queue. `state` can only be changed by calling PauseQueue,
 * ResumeQueue, or uploading
 * [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue
 * cannot be used to change `state`.
 */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Running: "RUNNING",
  Paused: "PAUSED",
  Disabled: "DISABLED",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);

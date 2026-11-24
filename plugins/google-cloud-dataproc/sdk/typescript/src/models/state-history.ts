import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state6Schema, type State6 } from "./state6.js";

/** Historical state information. */
export type StateHistory = {
  /** Output only. Details about the state at this point in history. */
  stateMessage?: string;
  /** Output only. The state of the batch at this point in history. */
  state?: State6;
  /** Output only. The time when the batch entered the historical state. */
  stateStartTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateHistorySchema: Schema<StateHistory> = s.object<StateHistory>(
  {
    stateMessage: s.optional(s.string()),
    state: s.optional(s.lazy(() => state6Schema)),
    stateStartTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

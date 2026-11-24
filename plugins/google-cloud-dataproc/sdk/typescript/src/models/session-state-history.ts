import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state1Schema, type State1 } from "./state1.js";

/** Historical state information. */
export type SessionStateHistory = {
  /** Output only. The time when the session entered the historical state. */
  stateStartTime?: string;
  /** Output only. Details about the state at this point in the session history. */
  stateMessage?: string;
  /** Output only. The state of the session at this point in the session history. */
  state?: State1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionStateHistorySchema: Schema<SessionStateHistory> = s.object<SessionStateHistory>(
  {
    stateStartTime: s.optional(s.string()),
    stateMessage: s.optional(s.string()),
    state: s.optional(s.lazy(() => state1Schema)),
  },
  { additionalProperties: s.json() },
);

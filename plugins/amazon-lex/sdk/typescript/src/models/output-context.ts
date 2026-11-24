import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OutputContext = {
  /** The name of the output context. */
  name: string;
  /**
   * The amount of time, in seconds, that the output context should remain active. The time is
   * figured from the first time the context is sent to the user.
   */
  timeToLiveInSeconds: number;
  /**
   * The number of conversation turns that the output context should remain active. The number of
   * turns is counted from the first time that the context is sent to the user.
   */
  turnsToLive: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const outputContextSchema: Schema<OutputContext> = s.object<OutputContext>(
  {
    name: s.string(),
    timeToLiveInSeconds: s.int(),
    turnsToLive: s.int(),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActiveContextTimeToLive = {
  /**
   * The number of seconds that the context is active. You can specify between 5 and 86400 seconds
   * (24 hours).
   */
  timeToLiveInSeconds: number;
  /**
   * The number of turns that the context is active. You can specify up to 20 turns. Each request
   * and response from the bot is a turn.
   */
  turnsToLive: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeContextTimeToLiveSchema: Schema<ActiveContextTimeToLive> =
  s.object<ActiveContextTimeToLive>(
    {
      timeToLiveInSeconds: s.int(),
      turnsToLive: s.int(),
    },
    { additionalProperties: s.json() },
  );

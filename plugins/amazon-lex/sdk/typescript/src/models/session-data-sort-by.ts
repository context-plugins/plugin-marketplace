import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name25Schema, type Name25 } from "./name25.js";
import { order2Schema, type Order2 } from "./order2.js";

export type SessionDataSortBy = {
  /**
   * The measure by which to sort the session analytics data. conversationStartTime – The date and
   * time when the conversation began. A conversation is defined as a unique combination of a
   * sessionId and an originatingRequestId. numberOfTurns – The number of turns that the session
   * took. conversationDurationSeconds – The duration of the conversation in seconds.
   */
  name: Name25;
  /** Specifies whether to sort the results in ascending or descending order. */
  order: Order2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionDataSortBySchema: Schema<SessionDataSortBy> = s.object<SessionDataSortBy>(
  {
    name: name25Schema,
    order: order2Schema,
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order2Schema, type Order2 } from "./order2.js";

export type UtteranceDataSortBy = {
  /**
   * The measure by which to sort the utterance analytics data. Count – The number of utterances.
   * UtteranceTimestamp – The date and time of the utterance.
   *
   * @default "UtteranceTimestamp"
   */
  name?: "UtteranceTimestamp";
  /** Specifies whether to sort the results in ascending or descending order. */
  order: Order2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceDataSortBySchema: Schema<UtteranceDataSortBy> = s.object<UtteranceDataSortBy>(
  {
    name: s.defaulted(s.literal("UtteranceTimestamp"), "UtteranceTimestamp"),
    order: order2Schema,
  },
  { additionalProperties: s.json() },
);

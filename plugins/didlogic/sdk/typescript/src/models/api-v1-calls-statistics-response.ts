import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allSchema, type All } from "./all.js";
import { missed1Schema, type Missed1 } from "./missed1.js";
import { placedSchema, type Placed } from "./placed.js";
import { receivedSchema, type Received } from "./received.js";

export type ApiV1CallsStatisticsResponse = {
  /** Statistics for placed (outgoing) calls */
  placed: Placed;
  /** Statistics for received (incoming) calls */
  received: Received;
  /** Statistics for missed calls */
  missed: Missed1;
  /** Combined statistics for all calls */
  all: All;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallsStatisticsResponseSchema: Schema<ApiV1CallsStatisticsResponse> =
  s.object<ApiV1CallsStatisticsResponse>(
    {
      placed: placedSchema,
      received: receivedSchema,
      missed: missed1Schema,
      all: allSchema,
    },
    { additionalProperties: s.json() },
  );

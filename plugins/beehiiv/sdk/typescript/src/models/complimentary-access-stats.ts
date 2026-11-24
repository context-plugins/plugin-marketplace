import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional stats for a complimentary access object. Retrievable by including `expand: [stats]` in
 * the request.
 */
export type ComplimentaryAccessStats = {
  /** Total number of subscriptions that have ever been granted this complimentary access. */
  totalGranted: number;
  /** Number of subscriptions currently within an active complimentary access period. */
  activeGranted: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const complimentaryAccessStatsSchema: Schema<ComplimentaryAccessStats> =
  s.object<ComplimentaryAccessStats>(
    {
      totalGranted: s.int(),
      activeGranted: s.int(),
      _keysMap: {
        totalGranted: "total_granted",
        activeGranted: "active_granted",
      },
    },
    { additionalProperties: s.json() },
  );

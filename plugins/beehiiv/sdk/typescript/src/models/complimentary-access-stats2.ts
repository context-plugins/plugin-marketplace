import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Stats for this complimentary access. Retrievable by including `expand: [stats]` in the request.
 */
export type ComplimentaryAccessStats2 = {
  /** Total number of subscriptions that have ever been granted this complimentary access. */
  totalGranted: number;
  /** Number of subscriptions currently within an active complimentary access period. */
  activeGranted: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const complimentaryAccessStats2Schema: Schema<ComplimentaryAccessStats2> =
  s.object<ComplimentaryAccessStats2>(
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

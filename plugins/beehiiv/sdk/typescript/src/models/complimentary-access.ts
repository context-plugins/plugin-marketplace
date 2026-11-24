import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  complimentaryAccessStats2Schema,
  type ComplimentaryAccessStats2,
} from "./complimentary-access-stats2.js";
import {
  complimentaryAccessTimeUnit2Schema,
  type ComplimentaryAccessTimeUnit2,
} from "./complimentary-access-time-unit2.js";
import { tier2Schema, type Tier2 } from "./tier2.js";

/** The complimentary access object. */
export type ComplimentaryAccess = {
  /** The prefixed ID of the complimentary access object. */
  id: string;
  /** The duration of the gift. Null when time_unit is "forever". */
  duration?: number;
  /** The unit of time for the gift duration. */
  timeUnit: ComplimentaryAccessTimeUnit2;
  /** A human-readable description of the gift (e.g., "3 Months Gift", "Lifetime Gift"). */
  description: string;
  /** The prefixed ID of the associated tier. Always present. */
  tierId?: string;
  /**
   * The full tier object. Present when `expand: [tier]` is requested. Returned alongside `tier_id`.
   */
  tier?: Tier2;
  /**
   * Stats for this complimentary access. Retrievable by including `expand: [stats]` in the request.
   */
  stats?: ComplimentaryAccessStats2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const complimentaryAccessSchema: Schema<ComplimentaryAccess> = s.object<ComplimentaryAccess>(
  {
    id: s.string(),
    duration: s.optional(s.int()),
    timeUnit: complimentaryAccessTimeUnit2Schema,
    description: s.string(),
    tierId: s.optional(s.string()),
    tier: s.optional(s.lazy(() => tier2Schema)),
    stats: s.optional(s.lazy(() => complimentaryAccessStats2Schema)),
    _keysMap: {
      timeUnit: "time_unit",
      tierId: "tier_id",
    },
  },
  { additionalProperties: s.json() },
);

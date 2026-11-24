import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rawOutcomeSchema, type RawOutcome } from "./raw-outcome.js";
import { lastUpdate1Schema, type LastUpdate1 } from "./unions/last-update1.js";

export type Market = {
  key: string;
  /**
   * When this venue's market last changed (second precision): a price, a lay price or `available`
   * moved, or a row appeared, including a venue's rows coming back after a few seconds off the
   * board (see the Freshness note). A service restart can also move it once with nothing changed:
   * dedupe on content. It is not a heartbeat: a quiet venue's `last_update` ages while the venue is
   * still read (venue freshness is `last_seen` in keyed `/v2/coverage`).
   */
  lastUpdate: LastUpdate1 | null;
  outcomes: RawOutcome[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketSchema: Schema<Market> = s.object<Market>(
  {
    key: s.string(),
    lastUpdate: s.nullable(s.lazy(() => lastUpdate1Schema)),
    outcomes: s.array(s.lazy(() => rawOutcomeSchema)),
    _keysMap: {
      lastUpdate: "last_update",
    },
  },
  { additionalProperties: s.json() },
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When this venue's market last changed (second precision): a price, a lay price or `available`
 * moved, or a row appeared, including a venue's rows coming back after a few seconds off the board
 * (see the Freshness note). A service restart can also move it once with nothing changed: dedupe on
 * content. It is not a heartbeat: a quiet venue's `last_update` ages while the venue is still read
 * (venue freshness is `last_seen` in keyed `/v2/coverage`).
 */
export type LastUpdate1 = string | number;

export const lastUpdate1Schema: Schema<LastUpdate1> = s.of<LastUpdate1>(s.union([s.string(), s.int()]));

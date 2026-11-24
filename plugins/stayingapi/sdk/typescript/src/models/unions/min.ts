import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Cheapest offer IN `currency`. Offers quoted in another currency are excluded — they are not
 * comparable.
 */
export type Min = number;

export const minInternalSchema: Schema<Min> = s.of<Min>(s.union([s.float64()]));

export const minSchema: Schema<Min> = s.lazySchema(() => s.of<Min>(s.union([s.float64().check(s.gte(0))])));

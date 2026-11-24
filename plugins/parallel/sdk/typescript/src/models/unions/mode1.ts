import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { modeSchema, type Mode } from "../mode.js";

/**
 * Search mode preset: supported values are `turbo`, `fast`, `basic`, and `advanced`. Turbo mode is
 * optimized for the fastest responses. Use Fast mode for high quality search within a 1-second
 * latency budget. Basic mode offers low latency and works best with 2-3 high-quality
 * search_queries. Advanced mode provides higher quality with more advanced retrieval and
 * compression. Defaults to `advanced` when omitted.
 */
export type Mode1 = Mode;

export const mode1Schema: Schema<Mode1> = s.of<Mode1>(s.union([s.lazy(() => modeSchema)]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When each IRS/Treasury source behind this screen was last pulled. */
export type Sources1 = Record<string, unknown>;

export const sources1Schema: Schema<Sources1> = s.of<Sources1>(s.union([s.record(s.string(), s.unknown())]));

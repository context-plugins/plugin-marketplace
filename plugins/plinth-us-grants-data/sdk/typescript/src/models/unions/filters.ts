import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** See the Essentials filter matrix. Unknown keys are reported, not ignored. */
export type Filters = Record<string, unknown>;

export const filtersSchema: Schema<Filters> = s.of<Filters>(s.union([s.record(s.string(), s.unknown())]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The newest `last_update` of the venue's markets. */
export type LastUpdate = string | number;

export const lastUpdateSchema: Schema<LastUpdate> = s.of<LastUpdate>(s.union([s.string(), s.int()]));

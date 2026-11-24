import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** How to get a key with no account, and what it may read. */
export type Trial = Record<string, unknown>;

export const trialSchema: Schema<Trial> = s.of<Trial>(s.union([s.record(s.string(), s.unknown())]));

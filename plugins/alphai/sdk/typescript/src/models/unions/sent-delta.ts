import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SentDelta = number;

export const sentDeltaSchema: Schema<SentDelta> = s.of<SentDelta>(s.union([s.float64()]));

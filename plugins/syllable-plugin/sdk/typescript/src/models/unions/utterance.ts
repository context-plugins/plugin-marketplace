import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Utterance = number;

export const utteranceSchema: Schema<Utterance> = s.of<Utterance>(s.union([s.float64()]));

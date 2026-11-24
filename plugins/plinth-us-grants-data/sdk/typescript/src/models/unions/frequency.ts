import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Frequency = string;

export const frequencySchema: Schema<Frequency> = s.of<Frequency>(s.union([s.string()]));

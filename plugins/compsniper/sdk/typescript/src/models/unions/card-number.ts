import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CardNumber = string | number;

export const cardNumberSchema: Schema<CardNumber> = s.of<CardNumber>(s.union([s.string(), s.float64()]));

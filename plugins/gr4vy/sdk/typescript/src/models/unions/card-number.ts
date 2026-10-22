import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Card number to match. */
export type CardNumber = string;

export const cardNumberSchema: Schema<CardNumber> = s.of<CardNumber>(s.union([s.string()]));

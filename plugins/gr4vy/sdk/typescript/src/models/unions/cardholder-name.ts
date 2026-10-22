import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The card holder name associated to the original card for the token. */
export type CardholderName = string;

export const cardholderNameSchema: Schema<CardholderName> = s.of<CardholderName>(s.union([s.string()]));

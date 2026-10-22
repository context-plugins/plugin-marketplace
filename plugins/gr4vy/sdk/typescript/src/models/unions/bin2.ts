import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The bank identification number (BIN) of the card. */
export type Bin2 = string;

export const bin2Schema: Schema<Bin2> = s.of<Bin2>(s.union([s.string()]));

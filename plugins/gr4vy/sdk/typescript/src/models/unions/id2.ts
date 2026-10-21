import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The Bank Identification Number (BIN) of the card. */
export type Id2 = string;

export const id2Schema: Schema<Id2> = s.of<Id2>(s.union([s.string()]));

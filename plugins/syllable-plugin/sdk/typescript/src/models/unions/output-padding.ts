import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of seconds to start listening to user input before assistant speech ends */
export type OutputPadding = number;

export const outputPaddingSchema: Schema<OutputPadding> = s.of<OutputPadding>(s.union([s.float64()]));

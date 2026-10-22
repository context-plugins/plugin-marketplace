import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { modeSchema, type Mode } from "../mode.js";

/** The mode to use with this payment method. */
export type Mode11 = Mode;

export const mode11Schema: Schema<Mode11> = s.of<Mode11>(s.union([s.lazy(() => modeSchema)]));

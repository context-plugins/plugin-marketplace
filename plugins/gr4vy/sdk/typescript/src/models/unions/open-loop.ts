import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if this payment service is open loop. */
export type OpenLoop = boolean;

export const openLoopSchema: Schema<OpenLoop> = s.of<OpenLoop>(s.union([s.boolean()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the model is ready to serve traffic on OpenRouter. */
export type IsReady = boolean;

export const isReadySchema: Schema<IsReady> = s.of<IsReady>(s.union([s.boolean()]));

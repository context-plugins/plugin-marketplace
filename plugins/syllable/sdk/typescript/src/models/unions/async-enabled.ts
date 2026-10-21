import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether asynchronous mode is enabled for the conversation */
export type AsyncEnabled = boolean;

export const asyncEnabledSchema: Schema<AsyncEnabled> = s.of<AsyncEnabled>(s.union([s.boolean()]));

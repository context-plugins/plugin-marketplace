import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether to force immediate tool call without user interaction. */
export type Call = boolean;

export const callSchema: Schema<Call> = s.of<Call>(s.union([s.boolean()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Caller ID for call */
export type CallerId = string;

export const callerIdSchema: Schema<CallerId> = s.of<CallerId>(s.union([s.string()]));

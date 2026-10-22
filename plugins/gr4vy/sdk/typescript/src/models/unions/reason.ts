import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The reason for this refund. Could be a multiline string. */
export type Reason = string;

export const reasonSchema: Schema<Reason> = s.of<Reason>(s.union([s.string()]));

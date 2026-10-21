import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether to expose the go_to_step escape hatch to the LLM. Defaults to disabled. */
export type Allowgotostep = boolean;

export const allowgotostepSchema: Schema<Allowgotostep> = s.of<Allowgotostep>(s.union([s.boolean()]));

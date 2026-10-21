import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The intermediate reasoning content of assistant message. This field is a compatible option for
 * the 'reasoning_content' field.
 */
export type Reasoning = string;

export const reasoningSchema: Schema<Reasoning> = s.of<Reasoning>(s.union([s.string()]));

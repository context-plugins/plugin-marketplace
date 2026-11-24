import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Reasoning = string;

export const reasoningSchema: Schema<Reasoning> = s.of<Reasoning>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ContextWindow = number;

export const contextWindowSchema: Schema<ContextWindow> = s.of<ContextWindow>(s.union([s.int()]));

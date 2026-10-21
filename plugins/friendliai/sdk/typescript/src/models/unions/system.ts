import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { system1Schema, type System1 } from "./system1.js";

/**
 * Optional top-level system instruction applied before conversation turns. Supports a plain string
 * or an array of text blocks.
 */
export type System = System1;

export const systemSchema: Schema<System> = s.of<System>(s.union([s.lazy(() => system1Schema)]));

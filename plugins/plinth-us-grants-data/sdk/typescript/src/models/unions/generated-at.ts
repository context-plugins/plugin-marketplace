import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 8601 timestamp the slice was built. */
export type GeneratedAt = string;

export const generatedAtSchema: Schema<GeneratedAt> = s.of<GeneratedAt>(s.union([s.string()]));

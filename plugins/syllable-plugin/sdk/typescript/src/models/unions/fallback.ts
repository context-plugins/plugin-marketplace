import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Voice substituted at runtime for critical features once this one is retired */
export type Fallback = string;

export const fallbackSchema: Schema<Fallback> = s.of<Fallback>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Provider substituted at runtime for critical features once this one is retired. */
export type Fallback2 = string;

export const fallback2Schema: Schema<Fallback2> = s.of<Fallback2>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Model substituted at runtime for critical features once this one is retired. */
export type Fallback1 = string;

export const fallback1Schema: Schema<Fallback1> = s.of<Fallback1>(s.union([s.string()]));

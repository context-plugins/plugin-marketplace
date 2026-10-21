import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The OAuth scope. */
export type Scope = string;

export const scopeSchema: Schema<Scope> = s.of<Scope>(s.union([s.string()]));

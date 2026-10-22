import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The preferred resource type in the response. */
export type Prefer = string[];

export const preferSchema: Schema<Prefer> = s.of<Prefer>(s.union([s.array(s.string())]));

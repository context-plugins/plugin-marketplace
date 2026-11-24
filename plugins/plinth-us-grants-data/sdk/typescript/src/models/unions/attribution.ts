import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Attribution the source licence obliges you to reproduce. Present it verbatim wherever you show
 * figures from this jurisdiction.
 */
export type Attribution = string;

export const attributionSchema: Schema<Attribution> = s.of<Attribution>(s.union([s.string()]));

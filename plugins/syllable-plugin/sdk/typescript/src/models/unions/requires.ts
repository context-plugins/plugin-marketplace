import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * List of input field names required for this transition. Validates that specified inputs are
 * collected before allowing transition.
 */
export type Requires = string[];

export const requiresSchema: Schema<Requires> = s.of<Requires>(s.union([s.array(s.string())]));

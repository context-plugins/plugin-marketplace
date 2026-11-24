import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** true, false or "unknown" */
export type Consistent = boolean | string;

export const consistentSchema: Schema<Consistent> = s.of<Consistent>(s.union([s.boolean(), s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Provider-recommended replacement for this model version; no automatic substitution. */
export type Replacement = string;

export const replacementSchema: Schema<Replacement> = s.of<Replacement>(s.union([s.string()]));

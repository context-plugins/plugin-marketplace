import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Parameters that did not apply. Non-empty means the answer is not the question asked. */
export type Unsupported = string[];

export const unsupportedSchema: Schema<Unsupported> = s.of<Unsupported>(s.union([s.array(s.string())]));

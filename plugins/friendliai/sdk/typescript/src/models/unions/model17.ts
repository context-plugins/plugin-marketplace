import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Model identifier for this response, when available. */
export type Model17 = string;

export const model17Schema: Schema<Model17> = s.of<Model17>(s.union([s.string()]));

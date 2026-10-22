import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A generic error code that may be returned when the session could not be generated. */
export type Code = string;

export const codeSchema: Schema<Code> = s.of<Code>(s.union([s.string()]));

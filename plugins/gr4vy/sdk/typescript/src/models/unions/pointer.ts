import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A JSON pointer for the particular property that caused the error. */
export type Pointer = string;

export const pointerSchema: Schema<Pointer> = s.of<Pointer>(s.union([s.string()]));

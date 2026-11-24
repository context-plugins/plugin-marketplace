import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The organization's name, when the row resolved. */
export type Name = string;

export const nameSchema: Schema<Name> = s.of<Name>(s.union([s.string()]));

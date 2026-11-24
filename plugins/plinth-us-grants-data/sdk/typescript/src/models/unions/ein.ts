import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The EIN the row resolved to, when it did. */
export type Ein = string;

export const einSchema: Schema<Ein> = s.of<Ein>(s.union([s.string()]));

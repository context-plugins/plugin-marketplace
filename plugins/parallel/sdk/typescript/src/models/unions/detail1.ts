import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional detail supporting the warning., Optional detail supporting the error., Optional detail
 * supporting the error., Optional detail supporting the error.
 */
export type Detail1 = Record<string, unknown>;

export const detail1Schema: Schema<Detail1> = s.of<Detail1>(s.union([s.record(s.string(), s.unknown())]));

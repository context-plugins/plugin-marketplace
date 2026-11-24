import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional detail supporting the error., Optional detail supporting the warning., Optional detail
 * supporting the warning., Optional detail supporting the warning.
 */
export type Detail = Record<string, unknown>;

export const detailSchema: Schema<Detail> = s.of<Detail>(s.union([s.record(s.string(), s.unknown())]));

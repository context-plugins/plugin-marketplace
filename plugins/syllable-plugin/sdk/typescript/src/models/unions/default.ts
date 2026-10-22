import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The default value for the parameter. If `type` is string, must be a string. If `type` is int,
 * must be an int. If `type` is boolean, must be a boolean. If `type` is data_source_list, must be a
 * list of strings (data source names).
 */
export type Default = Record<string, unknown>;

export const defaultSchema: Schema<Default> = s.of<Default>(s.union([s.record(s.string(), s.unknown())]));

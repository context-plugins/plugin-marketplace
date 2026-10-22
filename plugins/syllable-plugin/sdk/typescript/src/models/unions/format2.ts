import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The string value to use for the parameter. The value will be evaluated with the Python
 * `str.format` method, for example, `Hello, {name}!`
 */
export type Format2 = string;

export const format2Schema: Schema<Format2> = s.of<Format2>(s.union([s.string()]));

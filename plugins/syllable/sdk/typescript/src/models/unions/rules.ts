import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Directory extension number rules. To include a language rule, use key "language" with a language
 * code value.
 */
export type Rules = string[];

export const rulesSchema: Schema<Rules> = s.of<Rules>(s.union([s.array(s.string())]));

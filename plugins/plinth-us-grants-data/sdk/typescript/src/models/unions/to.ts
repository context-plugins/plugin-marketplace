import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Second EIN, for the pair fields (grants_to_*): the recipient, where the row's organization is the
 * funder.
 */
export type To = string;

export const toSchema: Schema<To> = s.of<To>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When `group_by=line_item`, this field provides the line item name of the grouped costs result.
 */
export type LineItem = string;

export const lineItemSchema: Schema<LineItem> = s.of<LineItem>(s.union([s.string()]));

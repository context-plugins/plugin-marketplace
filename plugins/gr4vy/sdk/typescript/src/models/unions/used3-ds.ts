import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that attempted 3DS authentication or not. For best performance, combine
 * it with `created_at_gte` and `created_at_lte`.
 */
export type Used3Ds = boolean;

export const used3DsSchema: Schema<Used3Ds> = s.of<Used3Ds>(s.union([s.boolean()]));

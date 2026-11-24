import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * {"field": "total_revenue", "order": "desc"} — or the field name alone. Sortable: total_revenue,
 * total_expenses, net_assets, grants_paid, name.
 */
export type Sort = Record<string, unknown> | string;

export const sortSchema: Schema<Sort> = s.of<Sort>(s.union([s.record(s.string(), s.unknown()), s.string()]));

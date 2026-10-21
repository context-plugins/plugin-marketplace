import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventFilter = {
  /** Filter type. One of [contextAttribute, eventProperty, group] */
  type: string;
  /** If not a group node, the context attribute name or event property name to filter on */
  attribute?: string;
  op: string;
  /**
   * The context attribute / event property values or group member nodes. Numeric values must not
   * exceed 14 decimal places.
   */
  values: Record<string, unknown>[];
  /** For context attribute filters, the context kind. */
  contextKind?: string;
  /** If set, then take the inverse of the operator. 'in' becomes 'not in'. */
  negate: boolean;
};

export const eventFilterSchema: Schema<EventFilter> = s.object<EventFilter>({
  type: s.string(),
  attribute: s.optional(s.string()),
  op: s.string(),
  values: s.array(s.record(s.string(), s.unknown())),
  contextKind: s.optional(s.string()),
  negate: s.boolean(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

/**
 * A saved filter. Sync parses only entries that carry `operator` and `type`; one without `type` is
 * saved but skipped when the connector syncs.
 */
export type ConnectorFilterValue = {
  /** One of the field's `operators`, for example `in` or `is_after` */
  operator: string;
  /** The filter value; its type follows `type` */
  value: Record<string, unknown>;
  /** The field's `filterType` from the registry schema */
  type: Type2;
};

export const connectorFilterValueSchema: Schema<ConnectorFilterValue> = s.object<ConnectorFilterValue>({
  operator: s.string(),
  value: s.record(s.string(), s.unknown()),
  type: type2Schema,
});

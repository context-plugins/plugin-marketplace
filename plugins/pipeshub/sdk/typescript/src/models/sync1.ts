import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorFilterValueSchema, type ConnectorFilterValue } from "./connector-filter-value.js";

export type Sync1 = {
  values?: Record<string, ConnectorFilterValue>;
};

export const sync1Schema: Schema<Sync1> = s.object<Sync1>({
  values: s.optional(
    s.record(
      s.string(),
      s.lazy(() => connectorFilterValueSchema),
    ),
  ),
});

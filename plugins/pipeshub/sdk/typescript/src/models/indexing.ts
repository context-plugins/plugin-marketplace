import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorFilterValueSchema, type ConnectorFilterValue } from "./connector-filter-value.js";

export type Indexing = {
  values?: Record<string, ConnectorFilterValue>;
};

export const indexingSchema: Schema<Indexing> = s.object<Indexing>({
  values: s.optional(
    s.record(
      s.string(),
      s.lazy(() => connectorFilterValueSchema),
    ),
  ),
});

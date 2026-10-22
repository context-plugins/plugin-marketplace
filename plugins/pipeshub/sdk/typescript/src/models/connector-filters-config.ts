import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { indexingSchema, type Indexing } from "./indexing.js";
import { sync1Schema, type Sync1 } from "./sync1.js";

export type ConnectorFiltersConfig = {
  sync?: Sync1;
  indexing?: Indexing;
};

export const connectorFiltersConfigSchema: Schema<ConnectorFiltersConfig> = s.object<ConnectorFiltersConfig>({
  sync: s.optional(s.lazy(() => sync1Schema)),
  indexing: s.optional(s.lazy(() => indexingSchema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorFilterSectionSchema, type ConnectorFilterSection } from "./connector-filter-section.js";

export type Filters4 = {
  sync?: ConnectorFilterSection;
  indexing?: ConnectorFilterSection;
};

export const filters4Schema: Schema<Filters4> = s.object<Filters4>({
  sync: s.optional(s.lazy(() => connectorFilterSectionSchema)),
  indexing: s.optional(s.lazy(() => connectorFilterSectionSchema)),
});

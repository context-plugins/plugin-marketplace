import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { schemaModelSchema, type SchemaModel } from "./schema-model.js";

export type ConnectorFilterSection = {
  schema?: SchemaModel;
  values?: Record<string, unknown>;
};

export const connectorFilterSectionSchema: Schema<ConnectorFilterSection> = s.object<ConnectorFilterSection>({
  schema: s.optional(s.lazy(() => schemaModelSchema)),
  values: s.optional(s.record(s.string(), s.unknown())),
});

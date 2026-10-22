import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorFilterFieldSchema, type ConnectorFilterField } from "./connector-filter-field.js";

export type SchemaModel = {
  fields?: ConnectorFilterField[];
};

export const schemaModelSchema: Schema<SchemaModel> = s.object<SchemaModel>({
  fields: s.optional(s.array(s.lazy(() => connectorFilterFieldSchema))),
});

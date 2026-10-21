import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** JSON Schema object applied when `type` is `json_schema`. */
export type SchemaModel = Record<string, unknown>;

export const schemaModelSchema: Schema<SchemaModel> = s.of<SchemaModel>(
  s.union([s.record(s.string(), s.unknown())]),
);

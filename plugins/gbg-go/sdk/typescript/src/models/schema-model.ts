import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SchemaModel = {
  ref: string;
};

export const schemaModelSchema: Schema<SchemaModel> = s.object<SchemaModel>({
  ref: s.string(),
  _keysMap: {
    ref: "$ref",
  },
});

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { resourceFieldsEnumSchema, type ResourceFieldsEnum } from "../resource-fields-enum.js";

export type Fields = string | ResourceFieldsEnum[];

export const fieldsSchema: Schema<Fields> = s.of<Fields>(
  s.union([s.string(), s.array(s.lazy(() => resourceFieldsEnumSchema))]),
);

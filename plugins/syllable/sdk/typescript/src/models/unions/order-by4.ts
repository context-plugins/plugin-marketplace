import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dataSourcePropertiesSchema, type DataSourceProperties } from "../data-source-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy4 = DataSourceProperties;

export const orderBy4Schema: Schema<OrderBy4> = s.of<OrderBy4>(
  s.union([s.lazy(() => dataSourcePropertiesSchema)]),
);

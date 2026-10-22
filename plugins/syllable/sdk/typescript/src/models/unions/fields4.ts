import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dataSourcePropertiesSchema, type DataSourceProperties } from "../data-source-properties.js";

/** The fields to include in the response */
export type Fields4 = DataSourceProperties[];

export const fields4Schema: Schema<Fields4> = s.of<Fields4>(
  s.union([s.array(s.lazy(() => dataSourcePropertiesSchema))]),
);

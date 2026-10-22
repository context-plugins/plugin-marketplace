import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { batchPropertiesSchema, type BatchProperties } from "../batch-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy313 = BatchProperties;

export const orderBy313Schema: Schema<OrderBy313> = s.of<OrderBy313>(
  s.union([s.lazy(() => batchPropertiesSchema)]),
);

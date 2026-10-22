import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { experimentPropertiesSchema, type ExperimentProperties } from "../experiment-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy6 = ExperimentProperties;

export const orderBy6Schema: Schema<OrderBy6> = s.of<OrderBy6>(
  s.union([s.lazy(() => experimentPropertiesSchema)]),
);

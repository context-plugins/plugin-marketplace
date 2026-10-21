import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolPropertiesSchema, type ToolProperties } from "../tool-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy38 = ToolProperties;

export const orderBy38Schema: Schema<OrderBy38> = s.of<OrderBy38>(
  s.union([s.lazy(() => toolPropertiesSchema)]),
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  availableTargetPropertiesSchema,
  type AvailableTargetProperties,
} from "../available-target-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy39 = AvailableTargetProperties;

export const orderBy39Schema: Schema<OrderBy39> = s.of<OrderBy39>(
  s.union([s.lazy(() => availableTargetPropertiesSchema)]),
);

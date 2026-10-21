import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  availableTargetPropertiesSchema,
  type AvailableTargetProperties,
} from "../available-target-properties.js";

/** The fields to include in the response */
export type Fields21 = AvailableTargetProperties[];

export const fields21Schema: Schema<Fields21> = s.of<Fields21>(
  s.union([s.array(s.lazy(() => availableTargetPropertiesSchema))]),
);

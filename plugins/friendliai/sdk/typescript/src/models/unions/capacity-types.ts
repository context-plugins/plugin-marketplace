import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { capacityTypeSchema, type CapacityType } from "../capacity-type.js";

/**
 * Return only usage for the specified capacity types. Supported fields include `reservation` only.
 * When this filter is given, only `reserved_gpu_usage` will be provided; `gpu_usage`, request,
 * token, and audio usage fields are omitted. Combining `capacity_types` with
 * `product_types=model_apis` is rejected with HTTP 400.
 */
export type CapacityTypes = CapacityType[];

export const capacityTypesSchema: Schema<CapacityTypes> = s.of<CapacityTypes>(
  s.union([s.array(s.lazy(() => capacityTypeSchema))]),
);

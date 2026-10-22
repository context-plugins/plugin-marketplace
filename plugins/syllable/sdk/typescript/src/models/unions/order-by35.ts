import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { servicePropertiesSchema, type ServiceProperties } from "../service-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy35 = ServiceProperties;

export const orderBy35Schema: Schema<OrderBy35> = s.of<OrderBy35>(
  s.union([s.lazy(() => servicePropertiesSchema)]),
);

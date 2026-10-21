import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dashboardPropertiesSchema, type DashboardProperties } from "../dashboard-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy312 = DashboardProperties;

export const orderBy312Schema: Schema<OrderBy312> = s.of<OrderBy312>(
  s.union([s.lazy(() => dashboardPropertiesSchema)]),
);

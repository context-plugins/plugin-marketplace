import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dashboardPropertiesSchema, type DashboardProperties } from "../dashboard-properties.js";

/** The fields to include in the response */
export type Fields24 = DashboardProperties[];

export const fields24Schema: Schema<Fields24> = s.of<Fields24>(
  s.union([s.array(s.lazy(() => dashboardPropertiesSchema))]),
);

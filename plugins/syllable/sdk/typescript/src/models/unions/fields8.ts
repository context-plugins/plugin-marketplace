import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { insightsPropertiesSchema, type InsightsProperties } from "../insights-properties.js";

/** The fields to include in the response */
export type Fields8 = InsightsProperties[];

export const fields8Schema: Schema<Fields8> = s.of<Fields8>(
  s.union([s.array(s.lazy(() => insightsPropertiesSchema))]),
);

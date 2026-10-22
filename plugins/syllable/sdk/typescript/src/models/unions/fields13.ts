import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { insightToolPropertiesSchema, type InsightToolProperties } from "../insight-tool-properties.js";

/** The fields to include in the response */
export type Fields13 = InsightToolProperties[];

export const fields13Schema: Schema<Fields13> = s.of<Fields13>(
  s.union([s.array(s.lazy(() => insightToolPropertiesSchema))]),
);

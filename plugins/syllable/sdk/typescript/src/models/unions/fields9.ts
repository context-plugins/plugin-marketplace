import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  insightsFolderPropertiesSchema,
  type InsightsFolderProperties,
} from "../insights-folder-properties.js";

/** The fields to include in the response */
export type Fields9 = InsightsFolderProperties[];

export const fields9Schema: Schema<Fields9> = s.of<Fields9>(
  s.union([s.array(s.lazy(() => insightsFolderPropertiesSchema))]),
);

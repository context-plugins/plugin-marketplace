import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolPropertiesSchema, type ToolProperties } from "../tool-properties.js";

/** The fields to include in the response */
export type Fields20 = ToolProperties[];

export const fields20Schema: Schema<Fields20> = s.of<Fields20>(
  s.union([s.array(s.lazy(() => toolPropertiesSchema))]),
);

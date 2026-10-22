import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { batchPropertiesSchema, type BatchProperties } from "../batch-properties.js";

/** The fields to include in the response */
export type Fields25 = BatchProperties[];

export const fields25Schema: Schema<Fields25> = s.of<Fields25>(
  s.union([s.array(s.lazy(() => batchPropertiesSchema))]),
);

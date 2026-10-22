import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { experimentPropertiesSchema, type ExperimentProperties } from "../experiment-properties.js";

/** The fields to include in the response */
export type Fields6 = ExperimentProperties[];

export const fields6Schema: Schema<Fields6> = s.of<Fields6>(
  s.union([s.array(s.lazy(() => experimentPropertiesSchema))]),
);

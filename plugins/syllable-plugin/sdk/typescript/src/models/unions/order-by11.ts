import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { bridgePhrasesPropertiesSchema, type BridgePhrasesProperties } from "../bridge-phrases-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy11 = BridgePhrasesProperties;

export const orderBy11Schema: Schema<OrderBy11> = s.of<OrderBy11>(
  s.union([s.lazy(() => bridgePhrasesPropertiesSchema)]),
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { bridgePhrasesPropertiesSchema, type BridgePhrasesProperties } from "../bridge-phrases-properties.js";

/** The fields to include in the response */
export type Fields1 = BridgePhrasesProperties[];

export const fields1Schema: Schema<Fields1> = s.of<Fields1>(
  s.union([s.array(s.lazy(() => bridgePhrasesPropertiesSchema))]),
);

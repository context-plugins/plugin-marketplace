import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional JSON Schema for the final output (API runs only). */
export type Outputschema1 = Record<string, unknown>;

export const outputschema1Schema: Schema<Outputschema1> = s.of<Outputschema1>(
  s.union([s.record(s.string(), s.unknown())]),
);

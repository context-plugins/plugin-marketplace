import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Additional information about the transaction stored as key-value pairs. If provided, the whole
 * value will be overridden.
 */
export type Metadata11 = Record<string, string>;

export const metadata11Schema: Schema<Metadata11> = s.of<Metadata11>(
  s.union([s.record(s.string(), s.string())]),
);

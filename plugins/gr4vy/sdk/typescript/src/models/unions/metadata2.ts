import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Any additional information about the 3DS configuration that you would like to store as key-value
 * pairs.
 */
export type Metadata2 = Record<string, string>;

export const metadata2Schema: Schema<Metadata2> = s.of<Metadata2>(
  s.union([s.record(s.string(), s.string())]),
);

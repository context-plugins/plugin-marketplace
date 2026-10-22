import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Additional information about the transaction stored as key-value pairs. */
export type Metadata9 = Record<string, string>;

export const metadata9Schema: Schema<Metadata9> = s.of<Metadata9>(
  s.union([s.record(s.string(), s.string())]),
);

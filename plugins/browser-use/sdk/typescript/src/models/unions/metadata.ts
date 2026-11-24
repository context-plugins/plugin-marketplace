import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Labels for this browser. Up to 10 key-value pairs. Filterable on the browsers list and in the
 * dashboard history.
 */
export type Metadata = Record<string, string>;

export const metadataSchema: Schema<Metadata> = s.of<Metadata>(s.union([s.record(s.string(), s.string())]));

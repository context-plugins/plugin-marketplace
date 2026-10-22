import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Any additional information about the transaction that you would like to store as key-value pairs.
 * This data is passed to payment service providers that support it.
 */
export type Metadata = Record<string, string>;

export const metadataSchema: Schema<Metadata> = s.of<Metadata>(s.union([s.record(s.string(), s.string())]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Provide any data you like, for example a string or a JSON object. We will save the data alongside
 * the entity. Whenever you fetch the entity with our API, we will also include the metadata. You
 * can use up to approximately 1kB.
 *
 * Any metadata added to the subscription will be automatically forwarded to the payments generated
 * for it.
 */
export type Metadata1 = string | number | Record<string, unknown> | string[];

export const metadata1Schema: Schema<Metadata1> = s.of<Metadata1>(
  s.union([s.string(), s.float64(), s.record(s.string(), s.unknown()), s.array(s.string())]),
);

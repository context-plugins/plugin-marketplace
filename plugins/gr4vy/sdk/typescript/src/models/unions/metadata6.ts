import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Arbitrary metadata for the payment link. */
export type Metadata6 = Record<string, unknown>;

export const metadata6Schema: Schema<Metadata6> = s.of<Metadata6>(
  s.union([s.record(s.string(), s.unknown())]),
);

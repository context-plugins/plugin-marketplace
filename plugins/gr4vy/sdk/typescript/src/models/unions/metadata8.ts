import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The metadata to used to evaluate checkout rules, which will help determine the right payment
 * options to display.
 */
export type Metadata8 = Record<string, string>;

export const metadata8Schema: Schema<Metadata8> = s.of<Metadata8>(
  s.union([s.record(s.string(), s.string())]),
);

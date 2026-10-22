import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** 4-digit PAN expiration year. */
export type Panexpirationyear = string;

export const panexpirationyearSchema: Schema<Panexpirationyear> = s.of<Panexpirationyear>(
  s.union([s.string()]),
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** 2-digit PAN expiration month. */
export type Panexpirationmonth = string;

export const panexpirationmonthSchema: Schema<Panexpirationmonth> = s.of<Panexpirationmonth>(
  s.union([s.string()]),
);

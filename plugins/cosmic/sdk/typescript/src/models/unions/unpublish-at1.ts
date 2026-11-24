import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** UNIX millisecond timestamp. */
export type UnpublishAt1 = string | number;

export const unpublishAt1Schema: Schema<UnpublishAt1> = s.of<UnpublishAt1>(
  s.union([s.string(), s.float64()]),
);

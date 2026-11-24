import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** UNIX millisecond timestamp. Send `null` to clear. */
export type UnpublishAt2 = string | number;

export const unpublishAt2Schema: Schema<UnpublishAt2> = s.of<UnpublishAt2>(
  s.union([s.string(), s.float64()]),
);

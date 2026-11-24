import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** UNIX millisecond timestamp., UNIX millisecond timestamp for scheduled unpublishing. */
export type UnpublishAt = string | number;

export const unpublishAtSchema: Schema<UnpublishAt> = s.of<UnpublishAt>(s.union([s.string(), s.float64()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** UNIX millisecond timestamp. Send `null` to clear. */
export type PublishAt2 = string | number;

export const publishAt2Schema: Schema<PublishAt2> = s.of<PublishAt2>(s.union([s.string(), s.float64()]));

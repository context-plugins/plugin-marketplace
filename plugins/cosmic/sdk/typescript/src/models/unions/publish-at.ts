import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** UNIX millisecond timestamp., UNIX millisecond timestamp for scheduled publishing. */
export type PublishAt = string | number;

export const publishAtSchema: Schema<PublishAt> = s.of<PublishAt>(s.union([s.string(), s.float64()]));

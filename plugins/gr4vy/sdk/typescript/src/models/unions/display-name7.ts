import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Readable description of the itinerary item. */
export type DisplayName7 = string;

export const displayName7Schema: Schema<DisplayName7> = s.of<DisplayName7>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The total number of links clicked from emails. */
export type TotalClicks = number | boolean;

export const totalClicksSchema: Schema<TotalClicks> = s.of<TotalClicks>(s.union([s.int(), s.boolean()]));

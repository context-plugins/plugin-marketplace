import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Human-readable description of the event */
export type Description18 = string;

export const description18Schema: Schema<Description18> = s.of<Description18>(s.union([s.string()]));

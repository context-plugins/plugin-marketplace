import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The URL to track the shipment. */
export type Url = string;

export const urlSchema: Schema<Url> = s.of<Url>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** URL to send webhook payloads. */
export type Url2 = string;

export const url2Schema: Schema<Url2> = s.of<Url2>(s.union([s.string()]));

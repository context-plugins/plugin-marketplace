import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Text description of insight upload folder */
export type Description22 = string;

export const description22Schema: Schema<Description22> = s.of<Description22>(s.union([s.string()]));

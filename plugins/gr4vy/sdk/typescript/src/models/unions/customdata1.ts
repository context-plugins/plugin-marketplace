import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Additional data to be sent to Nuvei. */
export type Customdata1 = string;

export const customdata1Schema: Schema<Customdata1> = s.of<Customdata1>(s.union([s.string()]));

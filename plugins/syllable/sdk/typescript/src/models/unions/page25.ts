import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Page number (0-based) */
export type Page25 = number;

export const page25Schema: Schema<Page25> = s.of<Page25>(s.union([s.int()]));

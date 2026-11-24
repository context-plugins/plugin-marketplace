import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** hourly | daily | weekly (default) | monthly. */
export type Frequency1 = string;

export const frequency1Schema: Schema<Frequency1> = s.of<Frequency1>(s.union([s.string()]));

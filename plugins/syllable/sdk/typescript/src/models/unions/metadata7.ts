import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Provider/model parts of a latency label */
export type Metadata7 = string[];

export const metadata7Schema: Schema<Metadata7> = s.of<Metadata7>(s.union([s.array(s.string())]));

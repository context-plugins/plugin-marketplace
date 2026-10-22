import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional signature when `type=thinking`. */
export type Signature1 = string;

export const signature1Schema: Schema<Signature1> = s.of<Signature1>(s.union([s.string()]));

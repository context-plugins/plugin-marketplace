import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An optional reason to attach extra context to the refund requests. */
export type Reason1 = string;

export const reason1Schema: Schema<Reason1> = s.of<Reason1>(s.union([s.string()]));

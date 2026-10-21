import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The payment service's unique ID for the capture. */
export type Xid = string;

export const xidSchema: Schema<Xid> = s.of<Xid>(s.union([s.string()]));

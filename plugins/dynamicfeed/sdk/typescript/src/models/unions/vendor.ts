import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** filter by vendor (e.g. Microsoft, Cisco) */
export type Vendor = string;

export const vendorSchema: Schema<Vendor> = s.of<Vendor>(s.union([s.string()]));

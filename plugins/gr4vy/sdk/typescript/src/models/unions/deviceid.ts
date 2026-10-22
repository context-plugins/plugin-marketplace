import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the device on which the payment is occuring. */
export type Deviceid = string;

export const deviceidSchema: Schema<Deviceid> = s.of<Deviceid>(s.union([s.string()]));

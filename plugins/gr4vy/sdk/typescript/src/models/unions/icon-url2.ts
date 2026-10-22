import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** An icon to display for the payment service. */
export type IconUrl2 = string;

export const iconUrl2Schema: Schema<IconUrl2> = s.of<IconUrl2>(s.union([s.string()]));

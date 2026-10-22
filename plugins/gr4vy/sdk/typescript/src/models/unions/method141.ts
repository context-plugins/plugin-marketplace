import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Technical identifier for the payment method type */
export type Method141 = string;

export const method141Schema: Schema<Method141> = s.of<Method141>(s.union([s.string()]));

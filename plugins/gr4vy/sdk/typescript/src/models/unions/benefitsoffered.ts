import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether benefits are offered for this cobrand card. */
export type Benefitsoffered = boolean;

export const benefitsofferedSchema: Schema<Benefitsoffered> = s.of<Benefitsoffered>(s.union([s.boolean()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The markup fee, if applicable, in the smallest currency unit. */
export type Markup = number;

export const markupSchema: Schema<Markup> = s.of<Markup>(s.union([s.int()]));

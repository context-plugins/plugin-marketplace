import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The description of the prompt */
export type Description2 = string;

export const description2Schema: Schema<Description2> = s.of<Description2>(s.union([s.string()]));

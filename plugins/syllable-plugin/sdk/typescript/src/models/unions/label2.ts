import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The label of the custom message */
export type Label2 = string;

export const label2Schema: Schema<Label2> = s.of<Label2>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { start1Schema, type Start1 } from "./start1.js";

/** Actions to execute on the first input from the user. */
export type Start2 = Start1[];

export const start2Schema: Schema<Start2> = s.of<Start2>(s.union([s.array(s.lazy(() => start1Schema))]));

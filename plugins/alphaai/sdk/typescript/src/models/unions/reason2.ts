import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Reason2 = string;

export const reason2Schema: Schema<Reason2> = s.of<Reason2>(s.union([s.string()]));

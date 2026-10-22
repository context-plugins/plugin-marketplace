import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Cursor2 = string;

export const cursor2Schema: Schema<Cursor2> = s.of<Cursor2>(s.union([s.string()]));

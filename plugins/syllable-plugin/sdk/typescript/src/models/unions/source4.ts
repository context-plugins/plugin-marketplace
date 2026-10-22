import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the user or agent sent the message */
export type Source4 = string;

export const source4Schema: Schema<Source4> = s.of<Source4>(s.union([s.string()]));

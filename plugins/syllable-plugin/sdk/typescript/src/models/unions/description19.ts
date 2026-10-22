import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The hypothesis under test */
export type Description19 = string;

export const description19Schema: Schema<Description19> = s.of<Description19>(s.union([s.string()]));

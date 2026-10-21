import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Natural-language description of what the tool does and when to call it. */
export type Description1 = string;

export const description1Schema: Schema<Description1> = s.of<Description1>(s.union([s.string()]));

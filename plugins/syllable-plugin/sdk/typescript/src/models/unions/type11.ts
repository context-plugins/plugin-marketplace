import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** More specific class of the event */
export type Type11 = string;

export const type11Schema: Schema<Type11> = s.of<Type11>(s.union([s.string()]));

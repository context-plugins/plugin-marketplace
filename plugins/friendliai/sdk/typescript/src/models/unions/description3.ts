import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional description of the custom tool, used to provide more context. */
export type Description3 = string;

export const description3Schema: Schema<Description3> = s.of<Description3>(s.union([s.string()]));

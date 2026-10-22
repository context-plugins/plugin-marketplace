import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Description of the permission */
export type Description32 = string;

export const description32Schema: Schema<Description32> = s.of<Description32>(s.union([s.string()]));

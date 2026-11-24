import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BodyStyle = string | string[];

export const bodyStyleSchema: Schema<BodyStyle> = s.of<BodyStyle>(s.union([s.string(), s.array(s.string())]));

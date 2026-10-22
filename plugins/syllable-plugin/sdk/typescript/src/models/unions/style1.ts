import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { styleSchema, type Style } from "../style.js";

export type Style1 = Style;

export const style1Schema: Schema<Style1> = s.of<Style1>(s.union([s.lazy(() => styleSchema)]));

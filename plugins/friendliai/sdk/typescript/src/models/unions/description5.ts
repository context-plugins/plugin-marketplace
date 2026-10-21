import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Description5 = string;

export const description5Schema: Schema<Description5> = s.of<Description5>(s.union([s.string()]));

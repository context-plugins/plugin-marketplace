import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Content1 = string;

export const content1Schema: Schema<Content1> = s.of<Content1>(s.union([s.string()]));

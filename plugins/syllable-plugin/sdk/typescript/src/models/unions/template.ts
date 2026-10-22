import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Template = string;

export const templateSchema: Schema<Template> = s.of<Template>(s.union([s.string()]));

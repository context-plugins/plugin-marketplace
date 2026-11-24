import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Exclude = string;

export const excludeSchema: Schema<Exclude> = s.of<Exclude>(s.union([s.string()]));

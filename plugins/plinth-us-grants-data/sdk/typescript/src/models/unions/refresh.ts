import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Refresh = string;

export const refreshSchema: Schema<Refresh> = s.of<Refresh>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Runid = string;

export const runidSchema: Schema<Runid> = s.of<Runid>(s.union([s.string()]));

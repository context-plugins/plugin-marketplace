import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Status5 = string;

export const status5Schema: Schema<Status5> = s.of<Status5>(s.union([s.string()]));

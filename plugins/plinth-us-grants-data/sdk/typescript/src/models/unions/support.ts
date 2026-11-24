import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Support = string;

export const supportSchema: Schema<Support> = s.of<Support>(s.union([s.string()]));

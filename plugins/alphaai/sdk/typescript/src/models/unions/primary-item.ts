import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PrimaryItem = string;

export const primaryItemSchema: Schema<PrimaryItem> = s.of<PrimaryItem>(s.union([s.string()]));

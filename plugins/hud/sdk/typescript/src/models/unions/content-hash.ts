import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ContentHash = string;

export const contentHashSchema: Schema<ContentHash> = s.of<ContentHash>(s.union([s.string()]));

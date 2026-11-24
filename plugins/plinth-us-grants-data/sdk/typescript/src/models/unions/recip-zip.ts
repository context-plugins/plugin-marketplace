import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecipZip = string;

export const recipZipSchema: Schema<RecipZip> = s.of<RecipZip>(s.union([s.string()]));

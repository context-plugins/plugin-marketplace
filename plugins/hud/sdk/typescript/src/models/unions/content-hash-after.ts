import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ContentHashAfter = string;

export const contentHashAfterSchema: Schema<ContentHashAfter> = s.of<ContentHashAfter>(s.union([s.string()]));

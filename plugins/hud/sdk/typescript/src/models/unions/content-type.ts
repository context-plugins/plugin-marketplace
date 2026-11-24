import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ContentType = string;

export const contentTypeSchema: Schema<ContentType> = s.of<ContentType>(s.union([s.string()]));

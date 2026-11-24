import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Uri = string;

export const uriSchema: Schema<Uri> = s.of<Uri>(s.union([s.string()]));

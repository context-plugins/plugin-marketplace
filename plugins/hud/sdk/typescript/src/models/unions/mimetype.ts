import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Mimetype = string;

export const mimetypeSchema: Schema<Mimetype> = s.of<Mimetype>(s.union([s.string()]));

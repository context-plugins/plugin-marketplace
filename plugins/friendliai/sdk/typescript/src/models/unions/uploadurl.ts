import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Upload URL of the file. `None` if the file is already uploaded. */
export type Uploadurl = string;

export const uploadurlSchema: Schema<Uploadurl> = s.of<Uploadurl>(s.union([s.string()]));

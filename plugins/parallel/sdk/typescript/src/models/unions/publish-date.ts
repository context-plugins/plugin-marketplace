import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Publish date of the webpage in YYYY-MM-DD format, if available. */
export type PublishDate = string;

export const publishDateSchema: Schema<PublishDate> = s.of<PublishDate>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Cursor for the next page. Pass as the `cursor` query parameter to fetch the next page. */
export type Nextcursor = string;

export const nextcursorSchema: Schema<Nextcursor> = s.of<Nextcursor>(s.union([s.string()]));

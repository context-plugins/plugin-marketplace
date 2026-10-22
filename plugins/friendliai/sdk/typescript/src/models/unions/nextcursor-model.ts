import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Next cursor to use for pagination. `None` indicates no more items to fetch. */
export type NextcursorModel = Uint8Array;

export const nextcursorModelSchema: Schema<NextcursorModel> = s.of<NextcursorModel>(s.union([s.bytes()]));

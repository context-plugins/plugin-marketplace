import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A cursor for use in pagination. Corresponding to the `next_page` field from the previous
 * response.
 */
export type Page = string;

export const pageSchema: Schema<Page> = s.of<Page>(s.union([s.string()]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Link IDs to filter by. */
export type LinkIds = string | string[];

export const linkIdsSchema: Schema<LinkIds> = s.of<LinkIds>(s.union([s.string(), s.array(s.string())]));

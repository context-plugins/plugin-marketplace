import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** IDs of tags to filter by. */
export type Ids = string | string[];

export const idsSchema: Schema<Ids> = s.of<Ids>(s.union([s.string(), s.array(s.string())]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** If true, applies stricter schema adherence when generating tool arguments. */
export type Strict = boolean;

export const strictSchema: Schema<Strict> = s.of<Strict>(s.union([s.boolean()]));

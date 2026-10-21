import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique ID for webhook, if updating an existing webhook */
export type Id4 = number;

export const id4Schema: Schema<Id4> = s.of<Id4>(s.union([s.int()]));

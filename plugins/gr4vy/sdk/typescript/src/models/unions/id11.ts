import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for the transaction that has a matching `id` value. */
export type Id11 = string;

export const id11Schema: Schema<Id11> = s.of<Id11>(s.union([s.string()]));

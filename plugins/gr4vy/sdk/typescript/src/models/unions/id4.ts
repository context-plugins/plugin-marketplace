import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID for the gift card. */
export type Id4 = string;

export const id4Schema: Schema<Id4> = s.of<Id4>(s.union([s.string()]));

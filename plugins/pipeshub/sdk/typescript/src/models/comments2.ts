import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Echoed free-text comments from the request. */
export type Comments2 = {
  positive?: string;
  negative?: string;
};

export const comments2Schema: Schema<Comments2> = s.object<Comments2>({
  positive: s.optional(s.string()),
  negative: s.optional(s.string()),
});

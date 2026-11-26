import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `relevance` (ranked) or `published` (newest first) — the latter when every word is too common to
 * rank on.
 */
export const Sort = {
  Relevance: "relevance",
  Published: "published",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);

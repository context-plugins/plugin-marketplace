import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The category of message you are sending. */
export const Category = {
  Promotional: "promotional",
  Transactional: "transactional",
  Conversational: "conversational",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);

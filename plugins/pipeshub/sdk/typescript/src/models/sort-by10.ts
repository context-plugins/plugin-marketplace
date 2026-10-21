import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy10 = {
  CreatedAt: "createdAt",
  MessageType: "messageType",
  Content: "content",
} as const;
export type SortBy10 = (typeof SortBy10)[keyof typeof SortBy10] | (string & {});

export const sortBy10Schema: EnumSchema<SortBy10> = s.enumOf<SortBy10>(SortBy10);

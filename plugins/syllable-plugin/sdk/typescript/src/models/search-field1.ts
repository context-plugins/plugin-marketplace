import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchField1 = {
  SessionId: "session_id",
  Status: "status",
} as const;
export type SearchField1 = (typeof SearchField1)[keyof typeof SearchField1] | (string & {});

export const searchField1Schema: EnumSchema<SearchField1> = s.enumOf<SearchField1>(SearchField1);

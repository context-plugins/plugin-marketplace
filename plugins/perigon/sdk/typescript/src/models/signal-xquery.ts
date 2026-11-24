import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchTypeSchema, type SearchType } from "./search-type.js";

export type SignalXQuery = {
  /** @default "V1" */
  version?: "V1";
  query: string;
  searchType: SearchType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalXQuerySchema: Schema<SignalXQuery> = s.object<SignalXQuery>(
  {
    version: s.defaulted(s.literal("V1"), "V1"),
    query: s.string(),
    searchType: searchTypeSchema,
  },
  { additionalProperties: s.json() },
);

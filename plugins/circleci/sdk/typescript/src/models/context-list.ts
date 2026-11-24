import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextSchema, type Context } from "./context.js";

export type ContextList = {
  /** List of contexts */
  items?: Context[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contextListSchema: Schema<ContextList> = s.object<ContextList>(
  {
    items: s.optional(s.array(s.lazy(() => contextSchema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);

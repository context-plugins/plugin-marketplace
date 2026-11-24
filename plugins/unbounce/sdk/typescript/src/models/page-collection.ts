import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pageSchema, type Page } from "./page.js";

export type PageCollection = {
  pages?: Page[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pageCollectionSchema: Schema<PageCollection> = s.object<PageCollection>(
  {
    pages: s.optional(s.array(s.lazy(() => pageSchema))),
  },
  { additionalProperties: s.json() },
);

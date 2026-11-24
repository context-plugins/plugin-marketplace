import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cursorsSchema, type Cursors } from "./cursors.js";

export type Paging = {
  cursors?: Cursors;
  /** URL to fetch next page. */
  next?: string;
  /** URL to fetch previous page. */
  previous?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagingSchema: Schema<Paging> = s.object<Paging>(
  {
    cursors: s.optional(s.lazy(() => cursorsSchema)),
    next: s.optional(s.string()),
    previous: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

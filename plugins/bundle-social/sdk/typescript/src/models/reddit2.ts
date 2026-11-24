import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Reddit2 = {
  id?: string | null;
  permalink?: string | null;
  subredditName?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reddit2Schema: Schema<Reddit2> = s.object<Reddit2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    subredditName: s.optionalNullable(s.string()),
    _keysMap: {
      subredditName: "subreddit_name",
    },
  },
  { additionalProperties: s.json() },
);

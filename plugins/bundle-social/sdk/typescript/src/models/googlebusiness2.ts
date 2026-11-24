import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Googlebusiness2 = {
  /**
   * Resource name of the Local Post, e.g.
   * 'accounts/{accountId}/locations/{locationId}/localPosts/{postId}'.
   */
  id?: string | null;
  /** Public link to the post (searchUrl) when available. */
  permalink?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googlebusiness2Schema: Schema<Googlebusiness2> = s.object<Googlebusiness2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

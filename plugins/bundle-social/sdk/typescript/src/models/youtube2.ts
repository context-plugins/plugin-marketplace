import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Youtube2 = {
  id?: string | null;
  permalink?: string | null;
  thumbnail?: string | null;
  /** YouTube resumable upload session URI for retry handling */
  sessionUri?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const youtube2Schema: Schema<Youtube2> = s.object<Youtube2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
    sessionUri: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

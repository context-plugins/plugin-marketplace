import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Bluesky2 = {
  id?: string | null;
  uri?: string | null;
  /** Content ID of the created record */
  cid?: string | null;
  permalink?: string | null;
  /** Author DID (owner of the record) */
  did?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bluesky2Schema: Schema<Bluesky2> = s.object<Bluesky2>(
  {
    id: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    cid: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    did: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

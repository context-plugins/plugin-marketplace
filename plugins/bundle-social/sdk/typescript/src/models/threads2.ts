import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Threads2 = {
  id?: string | null;
  permalink?: string | null;
  /** Media container id; lets a retry detect a container Meta already published. */
  creationId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const threads2Schema: Schema<Threads2> = s.object<Threads2>(
  {
    id: s.optionalNullable(s.string()),
    permalink: s.optionalNullable(s.string()),
    creationId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);

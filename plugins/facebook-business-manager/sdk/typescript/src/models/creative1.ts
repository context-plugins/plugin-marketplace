import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Creative1 = {
  /** The ID of the associated ad creative */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creative1Schema: Schema<Creative1> = s.object<Creative1>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

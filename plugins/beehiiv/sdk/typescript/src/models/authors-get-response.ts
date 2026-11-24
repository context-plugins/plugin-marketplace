import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorSchema, type Author } from "./author.js";

export type AuthorsGetResponse = {
  data: Author;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorsGetResponseSchema: Schema<AuthorsGetResponse> = s.object<AuthorsGetResponse>(
  {
    data: authorSchema,
  },
  { additionalProperties: s.json() },
);

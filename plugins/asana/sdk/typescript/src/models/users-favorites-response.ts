import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asanaNamedResourceSchema, type AsanaNamedResource } from "./asana-named-resource.js";

export type UsersFavoritesResponse = {
  data?: AsanaNamedResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersFavoritesResponseSchema: Schema<UsersFavoritesResponse> = s.object<UsersFavoritesResponse>(
  {
    data: s.optional(s.array(s.lazy(() => asanaNamedResourceSchema))),
  },
  { additionalProperties: s.json() },
);

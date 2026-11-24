import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links2PlatformPayeesApi = {
  /** A link to the current query. */
  self?: string;
  /** A link to the next page of results, if available. */
  next?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links2PlatformPayeesApiSchema: Schema<Links2PlatformPayeesApi> =
  s.object<Links2PlatformPayeesApi>(
    {
      self: s.optional(s.string()),
      next: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksPlatformPayeesApi = {
  /** A link to the payee details. */
  self?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksPlatformPayeesApiSchema: Schema<LinksPlatformPayeesApi> = s.object<LinksPlatformPayeesApi>(
  {
    self: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

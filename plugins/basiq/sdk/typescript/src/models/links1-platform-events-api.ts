import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links1PlatformEventsApi = {
  accounts?: string;
  self?: string;
  transactions?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links1PlatformEventsApiSchema: Schema<Links1PlatformEventsApi> =
  s.object<Links1PlatformEventsApi>(
    {
      accounts: s.optional(s.string()),
      self: s.optional(s.string()),
      transactions: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

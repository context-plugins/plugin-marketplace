import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LinksPlatformEventsApi = {
  self?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksPlatformEventsApiSchema: Schema<LinksPlatformEventsApi> = s.object<LinksPlatformEventsApi>(
  {
    self: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

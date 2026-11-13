import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfileUserLocaleRequest = {
  /** Locale code (e.g. 'en-US', 'fr'). Set to null to clear. */
  locale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileUserLocaleRequestSchema: Schema<ProfileUserLocaleRequest> =
  s.object<ProfileUserLocaleRequest>(
    {
      locale: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

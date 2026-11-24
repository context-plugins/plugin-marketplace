import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayAppsListing429Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playAppsListing429ErrorSchema: Schema<PlayAppsListing429Error> =
  s.object<PlayAppsListing429Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );

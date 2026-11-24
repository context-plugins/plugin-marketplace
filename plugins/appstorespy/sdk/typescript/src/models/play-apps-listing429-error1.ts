import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayAppsListing429Error1 = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playAppsListing429Error1Schema: Schema<PlayAppsListing429Error1> =
  s.object<PlayAppsListing429Error1>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );

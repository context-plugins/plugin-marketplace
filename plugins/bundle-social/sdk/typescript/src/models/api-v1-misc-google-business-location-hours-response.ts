import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationHoursResponse = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationHoursResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationHoursResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationHoursResponse>(
    {
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

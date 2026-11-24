import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationFoodMenusResponse = {
  name?: string;
  menus?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationFoodMenusResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationFoodMenusResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationFoodMenusResponse>(
    {
      name: s.optional(s.string()),
      menus: s.optional(s.array(s.record(s.string(), s.unknown()))),
    },
    { additionalProperties: s.json() },
  );

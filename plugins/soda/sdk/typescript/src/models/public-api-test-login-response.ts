import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiTestLoginResponse = {
  organisationName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiTestLoginResponseSchema: Schema<PublicApiTestLoginResponse> =
  s.object<PublicApiTestLoginResponse>(
    {
      organisationName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

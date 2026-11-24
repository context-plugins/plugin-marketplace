import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiTestDataStandardResponse = {
  scanId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiTestDataStandardResponseSchema: Schema<PublicApiTestDataStandardResponse> =
  s.object<PublicApiTestDataStandardResponse>(
    {
      scanId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

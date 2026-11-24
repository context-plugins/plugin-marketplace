import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteDataStandardResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteDataStandardResponseSchema: Schema<PublicApiDeleteDataStandardResponse> =
  s.object<PublicApiDeleteDataStandardResponse>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );

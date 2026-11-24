import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiDeleteDatasourceResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiDeleteDatasourceResponseSchema: Schema<PublicApiDeleteDatasourceResponse> =
  s.object<PublicApiDeleteDatasourceResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

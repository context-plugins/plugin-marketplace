import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2Identities422Error = {
  errors: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2Identities422ErrorSchema: Schema<ApiV2Identities422Error> =
  s.object<ApiV2Identities422Error>(
    {
      errors: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );

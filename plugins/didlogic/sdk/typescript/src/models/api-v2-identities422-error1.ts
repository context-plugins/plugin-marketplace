import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2Identities422Error1 = {
  errors: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2Identities422Error1Schema: Schema<ApiV2Identities422Error1> =
  s.object<ApiV2Identities422Error1>(
    {
      errors: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

export type ApiV1CallPrice422Error1 = {
  error: Error2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallPrice422Error1Schema: Schema<ApiV1CallPrice422Error1> =
  s.object<ApiV1CallPrice422Error1>(
    {
      error: error2Schema,
    },
    { additionalProperties: s.json() },
  );

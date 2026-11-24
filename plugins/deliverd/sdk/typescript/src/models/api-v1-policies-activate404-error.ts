import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type ApiV1PoliciesActivate404Error = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesActivate404ErrorSchema: Schema<ApiV1PoliciesActivate404Error> =
  s.object<ApiV1PoliciesActivate404Error>(
    {
      error: errorSchema,
    },
    { additionalProperties: s.json() },
  );

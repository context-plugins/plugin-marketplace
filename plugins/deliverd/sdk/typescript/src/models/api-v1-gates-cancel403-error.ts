import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type ApiV1GatesCancel403Error = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GatesCancel403ErrorSchema: Schema<ApiV1GatesCancel403Error> =
  s.object<ApiV1GatesCancel403Error>(
    {
      error: errorSchema,
    },
    { additionalProperties: s.json() },
  );

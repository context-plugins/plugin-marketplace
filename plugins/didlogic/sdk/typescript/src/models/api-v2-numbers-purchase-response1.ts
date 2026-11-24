import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorsSchema, type Errors } from "./errors.js";
import { purchase2Schema, type Purchase2 } from "./purchase2.js";

export type ApiV2NumbersPurchaseResponse1 = {
  errors?: Errors;
  /** Purchase response object */
  purchase?: Purchase2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchaseResponse1Schema: Schema<ApiV2NumbersPurchaseResponse1> =
  s.object<ApiV2NumbersPurchaseResponse1>(
    {
      errors: s.optional(s.lazy(() => errorsSchema)),
      purchase: s.optional(s.lazy(() => purchase2Schema)),
    },
    { additionalProperties: s.json() },
  );

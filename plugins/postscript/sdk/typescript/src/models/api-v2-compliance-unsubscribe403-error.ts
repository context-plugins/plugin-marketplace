import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type ApiV2ComplianceUnsubscribe403Error = {
  errors?: Error[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2ComplianceUnsubscribe403ErrorSchema: Schema<ApiV2ComplianceUnsubscribe403Error> =
  s.object<ApiV2ComplianceUnsubscribe403Error>(
    {
      errors: s.optional(s.array(s.lazy(() => errorSchema))),
    },
    { additionalProperties: s.json() },
  );

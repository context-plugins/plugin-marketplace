import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2ComplianceRedactResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2ComplianceRedactResponseSchema: Schema<ApiV2ComplianceRedactResponse> =
  s.object<ApiV2ComplianceRedactResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

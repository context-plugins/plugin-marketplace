import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2ComplianceUnsubscribeResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2ComplianceUnsubscribeResponseSchema: Schema<ApiV2ComplianceUnsubscribeResponse> =
  s.object<ApiV2ComplianceUnsubscribeResponse>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsSendRequest = {
  to: string[];
  /** A covering note, shown above the link */
  message?: string;
  /** Let recipients comment back. True when omitted */
  allowComments?: boolean;
  /** Revoke their access automatically after this long */
  expiresInDays?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsSendRequestProperties: s.Shape<ApiV1ReportsSendRequest> = {
  to: s.array(s.string()),
  message: s.optional(s.string()),
  allowComments: s.optional(s.boolean()),
  expiresInDays: s.optional(s.int()),
};

export const apiV1ReportsSendRequestInternalSchema: Schema<ApiV1ReportsSendRequest> =
  s.object<ApiV1ReportsSendRequest>(apiV1ReportsSendRequestProperties, { additionalProperties: s.json() });

export const apiV1ReportsSendRequestSchema: Schema<ApiV1ReportsSendRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportsSendRequest>(
    {
      ...apiV1ReportsSendRequestProperties,
      to: s.array(s.string().check(s.email())).check(s.minLength(1), s.maxLength(50)),
      message: s.optional(s.string().check(s.maxLength(2000))),
      expiresInDays: s.optional(s.int().check(s.gte(1), s.lte(365))),
    },
    { additionalProperties: s.json() },
  ),
);

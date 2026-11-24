import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PlaybooksApprovalRequest = {
  /** Emails, names or groups; the organisation's administrators when omitted */
  approvers?: string[];
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PlaybooksApprovalRequestProperties: s.Shape<ApiV1PlaybooksApprovalRequest> = {
  approvers: s.optional(s.array(s.string())),
  note: s.optional(s.string()),
};

export const apiV1PlaybooksApprovalRequestInternalSchema: Schema<ApiV1PlaybooksApprovalRequest> =
  s.object<ApiV1PlaybooksApprovalRequest>(apiV1PlaybooksApprovalRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PlaybooksApprovalRequestSchema: Schema<ApiV1PlaybooksApprovalRequest> = s.lazySchema(() =>
  s.object<ApiV1PlaybooksApprovalRequest>(
    {
      ...apiV1PlaybooksApprovalRequestProperties,
      approvers: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(320))).check(s.maxLength(20)),
      ),
      note: s.optional(s.string().check(s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);

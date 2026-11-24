import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1TasksFindingsApprovalRequest = {
  /** Emails, names or groups; the organisation's administrators when omitted */
  approvers?: string[];
  note?: string;
  expiresAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksFindingsApprovalRequestProperties: s.Shape<ApiV1TasksFindingsApprovalRequest> = {
  approvers: s.optional(s.array(s.string())),
  note: s.optional(s.string()),
  expiresAt: s.optional(s.dateTime()),
};

export const apiV1TasksFindingsApprovalRequestInternalSchema: Schema<ApiV1TasksFindingsApprovalRequest> =
  s.object<ApiV1TasksFindingsApprovalRequest>(apiV1TasksFindingsApprovalRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksFindingsApprovalRequestSchema: Schema<ApiV1TasksFindingsApprovalRequest> =
  s.lazySchema(() =>
    s.object<ApiV1TasksFindingsApprovalRequest>(
      {
        ...apiV1TasksFindingsApprovalRequestProperties,
        approvers: s.optional(
          s.array(s.string().check(s.minLength(1), s.maxLength(320))).check(s.maxLength(20)),
        ),
        note: s.optional(s.string().check(s.maxLength(2000))),
      },
      { additionalProperties: s.json() },
    ),
  );

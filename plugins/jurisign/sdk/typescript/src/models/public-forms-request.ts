import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicFormsRequest = {
  name: string;
  /** Template with exactly 1 signer and its own document */
  signRequestTemplateId: string;
  expiresAt?: Date | null;
  /** Anti-abuse cap; clamped to the platform maximum */
  dailySubmissionLimit?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicFormsRequestProperties: s.Shape<PublicFormsRequest> = {
  name: s.string(),
  signRequestTemplateId: s.string(),
  expiresAt: s.optionalNullable(s.dateTime()),
  dailySubmissionLimit: s.optionalNullable(s.int()),
  _keysMap: {
    signRequestTemplateId: "sign_request_template_id",
    expiresAt: "expires_at",
    dailySubmissionLimit: "daily_submission_limit",
  },
};

export const publicFormsRequestInternalSchema: Schema<PublicFormsRequest> = s.object<PublicFormsRequest>(
  publicFormsRequestProperties,
  { additionalProperties: s.json() },
);

export const publicFormsRequestSchema: Schema<PublicFormsRequest> = s.lazySchema(() =>
  s.object<PublicFormsRequest>(
    {
      ...publicFormsRequestProperties,
      name: s.string().check(s.maxLength(255)),
      dailySubmissionLimit: s.optionalNullable(s.int().check(s.gte(1))),
    },
    { additionalProperties: s.json() },
  ),
);

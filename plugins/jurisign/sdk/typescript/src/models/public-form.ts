import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusJuriSignPublicFormsApiSchema,
  type StatusJuriSignPublicFormsApi,
} from "./status-juri-sign-public-forms-api.js";
import { templateSchema, type Template } from "./template.js";

export type PublicForm = {
  id?: string;
  name?: string;
  status?: StatusJuriSignPublicFormsApi;
  /** The shareable link to publish */
  publicUrl?: string;
  template?: Template;
  expiresAt?: Date | null;
  dailySubmissionLimit?: number | null;
  submissionsCount?: number;
  lastSubmittedAt?: Date | null;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicFormProperties: s.Shape<PublicForm> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusJuriSignPublicFormsApiSchema)),
  publicUrl: s.optional(s.string()),
  template: s.optional(s.lazy(() => templateSchema)),
  expiresAt: s.optionalNullable(s.dateTime()),
  dailySubmissionLimit: s.optionalNullable(s.int()),
  submissionsCount: s.optional(s.int()),
  lastSubmittedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    publicUrl: "public_url",
    expiresAt: "expires_at",
    dailySubmissionLimit: "daily_submission_limit",
    submissionsCount: "submissions_count",
    lastSubmittedAt: "last_submitted_at",
    createdAt: "created_at",
  },
};

export const publicFormInternalSchema: Schema<PublicForm> = s.object<PublicForm>(publicFormProperties, {
  additionalProperties: s.json(),
});

export const publicFormSchema: Schema<PublicForm> = s.lazySchema(() =>
  s.object<PublicForm>(
    {
      ...publicFormProperties,
      publicUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);

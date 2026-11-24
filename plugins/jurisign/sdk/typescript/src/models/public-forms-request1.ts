import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type PublicFormsRequest1 = {
  name?: string;
  status?: Status1;
  expiresAt?: Date | null;
  dailySubmissionLimit?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicFormsRequest1Schema: Schema<PublicFormsRequest1> = s.object<PublicFormsRequest1>(
  {
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
    expiresAt: s.optionalNullable(s.dateTime()),
    dailySubmissionLimit: s.optionalNullable(s.int()),
    _keysMap: {
      expiresAt: "expires_at",
      dailySubmissionLimit: "daily_submission_limit",
    },
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resumeAtSchema, type ResumeAt } from "./resume-at.js";

export type SubscriptionsResumeRequest = {
  /** When to resume. Currently only 'now' is supported. */
  resumeAt?: ResumeAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionsResumeRequestSchema: Schema<SubscriptionsResumeRequest> =
  s.object<SubscriptionsResumeRequest>(
    {
      resumeAt: s.optional(s.lazy(() => resumeAtSchema)),
      _keysMap: {
        resumeAt: "resume_at",
      },
    },
    { additionalProperties: s.json() },
  );

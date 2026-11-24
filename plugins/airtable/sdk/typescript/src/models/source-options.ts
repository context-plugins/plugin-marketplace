import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formPageSubmissionSchema, type FormPageSubmission } from "./form-page-submission.js";
import { formSubmissionSchema, type FormSubmission } from "./form-submission.js";

export type SourceOptions = {
  formSubmission?: FormSubmission;
  formPageSubmission?: FormPageSubmission;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceOptionsSchema: Schema<SourceOptions> = s.object<SourceOptions>(
  {
    formSubmission: s.optional(s.lazy(() => formSubmissionSchema)),
    formPageSubmission: s.optional(s.lazy(() => formPageSubmissionSchema)),
  },
  { additionalProperties: s.json() },
);

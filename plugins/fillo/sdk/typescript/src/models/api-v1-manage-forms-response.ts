import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formSummarySchema, type FormSummary } from "./form-summary.js";

export type ApiV1ManageFormsResponse = {
  data: FormSummary[];
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsResponseSchema: Schema<ApiV1ManageFormsResponse> =
  s.object<ApiV1ManageFormsResponse>(
    {
      data: s.array(s.lazy(() => formSummarySchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );

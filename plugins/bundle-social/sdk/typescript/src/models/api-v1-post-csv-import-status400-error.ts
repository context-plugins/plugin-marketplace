import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";

export type ApiV1PostCsvImportStatus400Error = {
  statusCode?: number | null;
  message: string;
  issues?: Issue[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostCsvImportStatus400ErrorSchema: Schema<ApiV1PostCsvImportStatus400Error> =
  s.object<ApiV1PostCsvImportStatus400Error>(
    {
      statusCode: s.optionalNullable(s.float64()),
      message: s.string(),
      issues: s.optionalNullable(s.array(s.lazy(() => issueSchema))),
    },
    { additionalProperties: s.json() },
  );

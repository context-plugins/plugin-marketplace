import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { issueSchema, type Issue } from "./issue.js";

export type ApiV1MiscGoogleBusinessMedia400Error1 = {
  statusCode?: number | null;
  message: string;
  issues?: Issue[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessMedia400Error1Schema: Schema<ApiV1MiscGoogleBusinessMedia400Error1> =
  s.object<ApiV1MiscGoogleBusinessMedia400Error1>(
    {
      statusCode: s.optionalNullable(s.float64()),
      message: s.string(),
      issues: s.optionalNullable(s.array(s.lazy(() => issueSchema))),
    },
    { additionalProperties: s.json() },
  );

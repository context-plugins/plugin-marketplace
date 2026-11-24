import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  threadDeliverdDevReportsApiSchema,
  type ThreadDeliverdDevReportsApi,
} from "./thread-deliverd-dev-reports-api.js";

export type ApiV1ReportsCommentsResponse = {
  reportId: string;
  threads: ThreadDeliverdDevReportsApi[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsCommentsResponseSchema: Schema<ApiV1ReportsCommentsResponse> =
  s.object<ApiV1ReportsCommentsResponse>(
    {
      reportId: s.string(),
      threads: s.array(s.lazy(() => threadDeliverdDevReportsApiSchema)),
      nextCursor: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );

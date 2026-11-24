import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudflowRunSummarySchema, type CloudflowRunSummary } from "./cloudflow-run-summary.js";

/** A cursor-paginated page of a flow's runs. */
export type CloudflowRunList = {
  items: CloudflowRunSummary[];
  /** Token for the next page. Null on the last page. */
  pageToken?: string | null;
  /** Best-effort total. May be null. */
  rowCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowRunListSchema: Schema<CloudflowRunList> = s.object<CloudflowRunList>(
  {
    items: s.array(s.lazy(() => cloudflowRunSummarySchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);

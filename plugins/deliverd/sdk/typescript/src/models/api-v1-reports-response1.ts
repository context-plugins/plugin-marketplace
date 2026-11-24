import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  approvalDeliverdDevReportsApiSchema,
  type ApprovalDeliverdDevReportsApi,
} from "./approval-deliverd-dev-reports-api.js";
import { audienceInternalSchema, audienceSchema, type Audience } from "./audience.js";
import { reportSchema, type Report } from "./report.js";
import { status2Schema, type Status2 } from "./status2.js";
import {
  versionDeliverdDevReportsApiSchema,
  type VersionDeliverdDevReportsApi,
} from "./version-deliverd-dev-reports-api.js";

export type ApiV1ReportsResponse1 = {
  report: Report;
  version: VersionDeliverdDevReportsApi;
  url: string;
  warnings: string[];
  audience: Audience[];
  status: Status2;
  approval?: ApprovalDeliverdDevReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsResponse1Properties: s.Shape<ApiV1ReportsResponse1> = {
  report: reportSchema,
  version: versionDeliverdDevReportsApiSchema,
  url: s.string(),
  warnings: s.array(s.string()),
  audience: s.array(s.lazy(() => audienceInternalSchema)),
  status: status2Schema,
  approval: s.optional(s.lazy(() => approvalDeliverdDevReportsApiSchema)),
};

export const apiV1ReportsResponse1InternalSchema: Schema<ApiV1ReportsResponse1> =
  s.object<ApiV1ReportsResponse1>(apiV1ReportsResponse1Properties, { additionalProperties: s.json() });

export const apiV1ReportsResponse1Schema: Schema<ApiV1ReportsResponse1> = s.lazySchema(() =>
  s.object<ApiV1ReportsResponse1>(
    {
      ...apiV1ReportsResponse1Properties,
      audience: s.array(s.lazy(() => audienceSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

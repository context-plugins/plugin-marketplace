import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audienceInternalSchema, audienceSchema, type Audience } from "./audience.js";
import { reportSchema, type Report } from "./report.js";

export type ApiV1ReportsResponse4 = {
  report: Report;
  audience: Audience[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsResponse4Properties: s.Shape<ApiV1ReportsResponse4> = {
  report: reportSchema,
  audience: s.array(s.lazy(() => audienceInternalSchema)),
};

export const apiV1ReportsResponse4InternalSchema: Schema<ApiV1ReportsResponse4> =
  s.object<ApiV1ReportsResponse4>(apiV1ReportsResponse4Properties, { additionalProperties: s.json() });

export const apiV1ReportsResponse4Schema: Schema<ApiV1ReportsResponse4> = s.lazySchema(() =>
  s.object<ApiV1ReportsResponse4>(
    {
      ...apiV1ReportsResponse4Properties,
      audience: s.array(s.lazy(() => audienceSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

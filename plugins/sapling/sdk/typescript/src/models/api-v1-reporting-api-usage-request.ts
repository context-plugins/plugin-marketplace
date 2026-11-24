import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportingApiUsageRequest = {
  /** Window end, in days before today. @default 0 */
  endDaysBack?: number;
  /**
   * Sapling API key. Required when no "Authorization: Bearer <key>" header is sent; when both are
   * sent, the body key takes precedence over the header.
   */
  key?: string;
  /**
   * When true, a successful JSON-object response additionally carries "usage": {"characters": <n>}
   * — the billable character count this request submitted (0 for unbilled requests; the 2.5x
   * adjustment for logographic languages is included, so CJK requests report more than their raw
   * length). Repeat texts inside the billing deduplication window are still counted here even
   * though they are not re-charged, so the number is an upper bound on the final charge. Responses
   * whose body is not a JSON object (e.g. bare-array response formats) cannot carry the field. An
   * existing usage field (such as account/status or completion token usage) is preserved unchanged.
   *
   * @default false
   */
  returnUsage?: boolean;
  /** Window start, in days before today. Defaults to the first of this month. */
  startDaysBack?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportingApiUsageRequestProperties: s.Shape<ApiV1ReportingApiUsageRequest> = {
  endDaysBack: s.defaulted(s.int(), 0),
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  startDaysBack: s.optional(s.int()),
  _keysMap: {
    endDaysBack: "end_days_back",
    returnUsage: "return_usage",
    startDaysBack: "start_days_back",
  },
};

export const apiV1ReportingApiUsageRequestInternalSchema: Schema<ApiV1ReportingApiUsageRequest> =
  s.object<ApiV1ReportingApiUsageRequest>(apiV1ReportingApiUsageRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportingApiUsageRequestSchema: Schema<ApiV1ReportingApiUsageRequest> = s.lazySchema(() =>
  s.object<ApiV1ReportingApiUsageRequest>(
    {
      ...apiV1ReportingApiUsageRequestProperties,
      endDaysBack: s.defaulted(s.int().check(s.gte(0)), 0),
      startDaysBack: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);

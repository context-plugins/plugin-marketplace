import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Interval, intervalSchema } from "./interval.js";

export type ApiV1ReportingApiEndpointUsageRequest = {
  /** Window end, in days before today. @default 0 */
  endDaysBack?: number;
  /** @default Interval.Daily */
  interval?: Interval;
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
  /** Window start, in days before today. @default 6 */
  startDaysBack?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportingApiEndpointUsageRequestProperties: s.Shape<ApiV1ReportingApiEndpointUsageRequest> = {
  endDaysBack: s.defaulted(s.int(), 0),
  interval: s.defaulted(intervalSchema, Interval.Daily),
  key: s.optional(s.string()),
  returnUsage: s.defaulted(s.boolean(), false),
  startDaysBack: s.defaulted(s.int(), 6),
  _keysMap: {
    endDaysBack: "end_days_back",
    returnUsage: "return_usage",
    startDaysBack: "start_days_back",
  },
};

export const apiV1ReportingApiEndpointUsageRequestInternalSchema: Schema<ApiV1ReportingApiEndpointUsageRequest> =
  s.object<ApiV1ReportingApiEndpointUsageRequest>(apiV1ReportingApiEndpointUsageRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ReportingApiEndpointUsageRequestSchema: Schema<ApiV1ReportingApiEndpointUsageRequest> =
  s.lazySchema(() =>
    s.object<ApiV1ReportingApiEndpointUsageRequest>(
      {
        ...apiV1ReportingApiEndpointUsageRequestProperties,
        endDaysBack: s.defaulted(s.int().check(s.gte(0)), 0),
        startDaysBack: s.defaulted(s.int().check(s.gte(0)), 6),
      },
      { additionalProperties: s.json() },
    ),
  );

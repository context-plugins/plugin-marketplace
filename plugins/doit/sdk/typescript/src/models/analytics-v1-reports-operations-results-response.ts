import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultDoiTReportsApiSchema, type ResultDoiTReportsApi } from "./result-doi-treports-api.js";
import { type9DoiTReportsApiSchema, type Type9DoiTReportsApi } from "./type9-doi-treports-api.js";

export type AnalyticsV1ReportsOperationsResultsResponse = {
  /**
   * The report's id. Present only when the operation was started against a saved report (run by
   * id); omitted for ad hoc runs against an inline config.
   */
  id?: string;
  /**
   * The report's current name, looked up at read time (not a snapshot from when the operation
   * started). Present only when the operation was started against a saved report (run by id) and
   * the report still exists; omitted for ad hoc runs against an inline config.
   */
  reportName?: string;
  /**
   * Email address of the report owner, looked up at read time. Present only when the operation was
   * started against a saved report (run by id) and the report still exists; omitted for ad hoc runs
   * against an inline config.
   */
  owner?: string;
  /**
   * Present only when the operation was started against a saved report (run by id) and the report
   * still exists; omitted for ad hoc runs against an inline config.
   */
  type?: Type9DoiTReportsApi;
  /**
   * The creation time of the report, in milliseconds since the epoch. Present only when the
   * operation was started against a saved report (run by id) and the report still exists; omitted
   * for ad hoc runs against an inline config.
   */
  createTime?: number;
  /**
   * The time when the report was last updated, in milliseconds since the epoch, looked up at read
   * time. Present only when the operation was started against a saved report (run by id) and the
   * report still exists; omitted for ad hoc runs against an inline config.
   */
  updateTime?: number;
  /**
   * The URL of the report in DoiT console. Present only when the operation was started against a
   * saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline
   * config.
   */
  urlUi?: string;
  result?: ResultDoiTReportsApi;
  /**
   * Signed URL the rendered file can be downloaded from. Present only when the fileOutput parameter
   * was supplied and the file was rendered. Never a variant of the response — the result property
   * above is returned either way, so a render that fails leaves result intact and omits fileOutput
   * rather than failing the call. The URL is valid for 7 days; request the endpoint again for a
   * fresh one.
   */
  fileOutput?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const analyticsV1ReportsOperationsResultsResponseProperties: s.Shape<AnalyticsV1ReportsOperationsResultsResponse> =
  {
    id: s.optional(s.string()),
    reportName: s.optional(s.string()),
    owner: s.optional(s.string()),
    type: s.optional(s.lazy(() => type9DoiTReportsApiSchema)),
    createTime: s.optional(s.int()),
    updateTime: s.optional(s.int()),
    urlUi: s.optional(s.string()),
    result: s.optional(s.lazy(() => resultDoiTReportsApiSchema)),
    fileOutput: s.optional(s.string()),
    _keysMap: {
      urlUi: "urlUI",
    },
  };

export const analyticsV1ReportsOperationsResultsResponseInternalSchema: Schema<AnalyticsV1ReportsOperationsResultsResponse> =
  s.object<AnalyticsV1ReportsOperationsResultsResponse>(
    analyticsV1ReportsOperationsResultsResponseProperties,
    { additionalProperties: s.json() },
  );

export const analyticsV1ReportsOperationsResultsResponseSchema: Schema<AnalyticsV1ReportsOperationsResultsResponse> =
  s.lazySchema(() =>
    s.object<AnalyticsV1ReportsOperationsResultsResponse>(
      {
        ...analyticsV1ReportsOperationsResultsResponseProperties,
        fileOutput: s.optional(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
  );

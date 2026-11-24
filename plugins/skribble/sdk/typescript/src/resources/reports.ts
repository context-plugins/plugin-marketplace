import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { Lang, langSchema } from "../models/lang.js";
import {
  problemSkribbleAdditionalInformationApiInternalSchema,
  type ProblemSkribbleAdditionalInformationApi,
} from "../models/problem-skribble-additional-information-api.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for generating, retrieving, and managing reports related to document processing.
 */
export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ETSI TS 119 102-2 validation report
   *
   * @remarks
   * Get the ETSI TS 119 102-2 signature validation report as a XML
   *
   * @returns Success
   *
   * @throws {@link Reports.GetReportsEtsiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReportsEtsi(
    request: Reports.GetReportsEtsiRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Reports.GetReportsEtsiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/reports/{id}/etsi"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Reports.GetReportsEtsiError,
      },
      options,
    );
  }

  /**
   * Skribble validation report
   *
   * @remarks
   * Get the digitally signed Skribble validation report as PDF. The report is generated once per
   * validation ID, language, ETSI attachment flag and timezone, then cached — subsequent requests
   * with the same parameters are served from cache and not billed. Optionally attach the ETSI TS
   * 119 102-2 XML validation report as an embedded file in the PDF.
   *
   * @returns Signed validation report PDF
   *
   * @throws {@link Reports.GetSkribbleReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSkribbleReport(
    request: Reports.GetSkribbleReportRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Reports.GetSkribbleReportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/reports/{id}/skribble"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "lang", value: request.lang, schema: s.defaulted(langSchema, Lang.En) },
          {
            name: "attachETSIReport",
            value: request.attachEtsiReport,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "timeZone", value: request.timeZone, schema: s.defaulted(s.string(), "UTC") },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Reports.GetSkribbleReportError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type GetReportsEtsiRequest = {
    /** The 'id' provided by the validate operation */
    id: string;
  };

  export class GetReportsEtsiError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi8", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReportsEtsiError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 401,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 403,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 404,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 406,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi6",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi7",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi8",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }

  export type GetSkribbleReportRequest = {
    /** The 'id' provided by the validate operation */
    id: string;
    /** Language of the validation report @default Lang.En */
    lang?: Lang;
    /**
     * Attach the ETSI TS 119 102-2 XML validation report as a file attachment to the PDF. When
     * enabled, the XML report is embedded in the PDF and a paperclip annotation is added on the
     * last page. This registers additional usage for the ETSI report endpoint.
     *
     * @default false
     */
    attachEtsiReport?: boolean;
    /**
     * IANA timezone name used to render timestamps in the report — the "Generated at" time and each
     * signer's "Time of signature". Defaults to UTC, preserving the previous behaviour when
     * omitted. The rendered zone abbreviation (e.g. `UTC`, `CET`, `PST`) reflects the chosen zone.
     * Browser callers can pass `Intl.DateTimeFormat().resolvedOptions().timeZone`. The timezone is
     * part of the report cache key, so each distinct timezone (per language and ETSI flag) is
     * rendered, billed and cached once. An unknown or malformed value returns `400`.
     *
     * @default "UTC"
     */
    timeZone?: string;
  };

  export class GetSkribbleReportError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi8", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi9", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSkribbleReportError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 401,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 403,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 404,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 406,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi6",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi7",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 502,
        kind: "problemSkribbleAdditionalInformationApi8",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi9",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { qualificationInternalSchema, type Qualification } from "../models/qualification.js";
import {
  v1QualifyRequest2InternalSchema,
  type V1QualifyRequest2,
} from "../models/unions/v1-qualify-request2.js";
import { v1OutcomesRequestInternalSchema, type V1OutcomesRequest } from "../models/v1-outcomes-request.js";
import { v1OutcomesResponseSchema, type V1OutcomesResponse } from "../models/v1-outcomes-response.js";
import { v1ResultsResponseSchema, type V1ResultsResponse } from "../models/v1-results-response.js";
import type { Servers } from "../servers.js";

/**
 * B2B lead and counterparty qualification
 */
export class Qualify {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * The read, checks and latest outcome of qualifications this key ran
   *
   * @returns Results
   *
   * @throws {@link Qualify.GetResultsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  getResults(
    request: Qualify.GetResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ResultsResponse, Qualify.GetResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/results"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ResultsResponseSchema },
        errorFactory: Qualify.GetResultsError,
      },
      options,
    );
  }

  /**
   * Qualify a business lead or counterparty from a form submission or outreach
   *
   * @remarks
   * API key required; counts as 2 checks. Checks the domain (MX, SPF, DMARC, RDAP registration
   * date, one website fetch), matches it to a Jid file and reads the file's standing, licences,
   * filings, capital raises, loans and adverse records. Returns signals with sources,
   * legitimacy/capacity/consistency scores (0 to 100, with reasons), a recommendation, a next step,
   * questions to ask, checks and a read (headline, engage | verify_first | do_not_engage, failed
   * checks, lookup links: render the read for humans), and a signed receipt. Businesses only:
   * personal webmail, a disposable address or no confident business match returns assessment
   * individual_or_unverified with no scores. A possible list match is effect review, never a
   * finding. The raw message is hashed and never stored unless retain is true. Not for credit,
   * employment, insurance or housing decisions about individuals.
   *
   * @returns Qualification
   *
   * @throws {@link Qualify.QualifyCounterpartyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  qualifyCounterparty(
    request: Qualify.QualifyCounterpartyRequest,
    options?: RequestOptions,
  ): ApiPromise<Qualification, Qualify.QualifyCounterpartyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/qualify"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1QualifyRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: qualificationInternalSchema },
        errorFactory: Qualify.QualifyCounterpartyError,
      },
      options,
    );
  }

  /**
   * Record what you decided about a screen or qualify result
   *
   * @remarks
   * With the API key that ran the result: { result_id, outcome, note? }. Or { token } from a signed
   * outcome link. Free. Stored without personal data for 13 months; outcomes tune the published
   * rules.
   *
   * @returns Recorded
   *
   * @throws {@link Qualify.RecordOutcomeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  recordOutcome(
    request: Qualify.RecordOutcomeRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OutcomesResponse, Qualify.RecordOutcomeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/outcomes"),
        auth: orAnonymous(this.#auth.bearer),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1OutcomesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1OutcomesResponseSchema },
        errorFactory: Qualify.RecordOutcomeError,
      },
      options,
    );
  }
}

export namespace Qualify {
  export type GetResultsRequest = {
    /** Comma-separated qual_ ids, up to 200 */
    ids: string;
  };

  export class GetResultsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetResultsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type QualifyCounterpartyRequest = {
    body: V1QualifyRequest2;
  };

  export class QualifyCounterpartyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<QualifyCounterpartyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RecordOutcomeRequest = {
    body: V1OutcomesRequest;
  };

  export class RecordOutcomeError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecordOutcomeError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 410, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

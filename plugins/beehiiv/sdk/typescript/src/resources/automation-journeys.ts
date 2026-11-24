import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  AutomationJourneysGetRequestStatus,
  automationJourneysGetRequestStatusSchema,
} from "../models/automation-journeys-get-request-status.js";
import {
  automationJourneysIndexResponseSchema,
  type AutomationJourneysIndexResponse,
} from "../models/automation-journeys-index-response.js";
import {
  automationJourneysResponseSchema,
  type AutomationJourneysResponse,
} from "../models/automation-journeys-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsAutomationsJourneysRequestSchema,
  type PublicationsAutomationsJourneysRequest,
} from "../models/publications-automations-journeys-request.js";
import type { Servers } from "../servers.js";

export class AutomationJourneys {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Add subscription to an automation OAuth Scope: automations:write
   *
   * @remarks
   * Add an existing subscription to an automation flow. Requires the automation to have an active
   * *Add by API* trigger. The specified `email` or `subscription_id` will be matched against your
   * existing subscribers. If an existing subscriber is found, they will be enrolled immediately.
   * Looking to enroll new subscribers? Use the **Create Subscription** endpoint instead and specify
   * the `automation_ids` param.
   *
   * @returns Created
   *
   * @throws {@link AutomationJourneys.Create2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create2(
    request: AutomationJourneys.Create2Request,
    options?: RequestOptions,
  ): ApiPromise<AutomationJourneysResponse, AutomationJourneys.Create2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/automations/{automationId}/journeys",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "automationId", value: request.automationId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsAutomationsJourneysRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: automationJourneysResponseSchema },
        errorFactory: AutomationJourneys.Create2Error,
      },
      options,
    );
  }

  /**
   * List automation journeys OAuth Scope: automations:read
   *
   * @remarks
   * Retrieve a list of automation journeys that have occurred within a specific automation.
   *
   * @returns OK
   *
   * @throws {@link AutomationJourneys.Index5Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index5(
    request: AutomationJourneys.Index5Request,
    options?: RequestOptions,
  ): ApiPromise<AutomationJourneysIndexResponse, AutomationJourneys.Index5Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/automations/{automationId}/journeys",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "automationId", value: request.automationId, schema: s.string() },
        ],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(
              automationJourneysGetRequestStatusSchema,
              AutomationJourneysGetRequestStatus.All,
            ),
          },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationJourneysIndexResponseSchema },
        errorFactory: AutomationJourneys.Index5Error,
      },
      options,
    );
  }

  /**
   * Get automation journey OAuth Scope: automations:read
   *
   * @remarks
   * Retrieve a single automation journey by ID.
   *
   * @returns OK
   *
   * @throws {@link AutomationJourneys.Show2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  show2(
    request: AutomationJourneys.Show2Request,
    options?: RequestOptions,
  ): ApiPromise<AutomationJourneysResponse, AutomationJourneys.Show2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/automations/{automationId}/journeys/{automationJourneyId}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "automationId", value: request.automationId, schema: s.string() },
          { name: "automationJourneyId", value: request.automationJourneyId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationJourneysResponseSchema },
        errorFactory: AutomationJourneys.Show2Error,
      },
      options,
    );
  }
}

export namespace AutomationJourneys {
  export type Create2Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the automation object */
    automationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsAutomationsJourneysRequest;
  };

  export class Create2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Index5Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the automation object */
    automationId: string;
    /**
     * Optionally filter the results by the automation journey's status.
     *
     * @default AutomationJourneysGetRequestStatus.All
     */
    status?: AutomationJourneysGetRequestStatus;
    /**
     * A limit on the number of objects to be returned. The limit can range between 1 and 100, and
     * the default is 10.
     */
    limit?: number;
    /**
     * Pagination returns the results in pages. Each page contains the number of results specified
     * by the `limit` (default: 10).
     */
    page?: number;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index5Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index5Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type Show2Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The prefixed ID of the automation object */
    automationId: string;
    /** The prefixed automation journey id */
    automationJourneyId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Show2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Show2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

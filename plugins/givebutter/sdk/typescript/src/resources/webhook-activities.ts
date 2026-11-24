import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  v1WebhooksActivitiesResponseInternalSchema,
  type V1WebhooksActivitiesResponse,
} from "../models/v1-webhooks-activities-response.js";
import {
  webhookActivityResourceSchema,
  type WebhookActivityResource,
} from "../models/webhook-activity-resource.js";
import type { Servers } from "../servers.js";

export class WebhookActivities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all webhook activities
   *
   * @returns Paginated set of `WebhookActivityResource`
   *
   * @throws {@link WebhookActivities.WebhooksActivitiesIndexError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhooksActivitiesIndex(
    request: WebhookActivities.WebhooksActivitiesIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebhooksActivitiesResponse, WebhookActivities.WebhooksActivitiesIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks/{webhook}/activities"),
        auth: this.#auth.http,
        pathParams: [{ name: "webhook", value: request.webhook, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WebhooksActivitiesResponseInternalSchema },
        errorFactory: WebhookActivities.WebhooksActivitiesIndexError,
      },
      options,
    );
  }

  /**
   * Get a webhook activity
   *
   * @returns `WebhookActivityResource`
   *
   * @throws {@link WebhookActivities.WebhooksActivitiesShowError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhooksActivitiesShow(
    request: WebhookActivities.WebhooksActivitiesShowRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookActivityResource, WebhookActivities.WebhooksActivitiesShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/webhooks/{webhook}/activities/{activity}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "webhook", value: request.webhook, schema: s.string() },
          { name: "activity", value: request.activity, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookActivityResourceSchema },
        errorFactory: WebhookActivities.WebhooksActivitiesShowError,
      },
      options,
    );
  }
}

export namespace WebhookActivities {
  export type WebhooksActivitiesIndexRequest = {
    /** The webhook ID */
    webhook: string;
  };

  export class WebhooksActivitiesIndexError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<WebhooksActivitiesIndexError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type WebhooksActivitiesShowRequest = {
    /** The webhook ID */
    webhook: string;
    /** The activity ID */
    activity: string;
  };

  export class WebhooksActivitiesShowError extends ApiError {
    declare readonly payload: Declared<"modelNotFoundException1", ModelNotFoundException1> | Undeclared;

    static readonly errors: ErrorDecoders<WebhooksActivitiesShowError> = [
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}

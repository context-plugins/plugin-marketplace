import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { jsonErrorResponseSchema, type JsonErrorResponse } from "./models/json-error-response.js";
import { leadRequestInternalSchema, type LeadRequest } from "./models/lead-request.js";
import { leadResponseInternalSchema, type LeadResponse } from "./models/lead-response.js";
import { leadUploadSchema, type LeadUpload } from "./models/lead-upload.js";
import { paymentListResponseSchema, type PaymentListResponse } from "./models/payment-list-response.js";
import { paymentRequestSchema, type PaymentRequest } from "./models/payment-request.js";
import { paymentResponseSchema, type PaymentResponse } from "./models/payment-response.js";
import {
  webhookCreateResponseInternalSchema,
  type WebhookCreateResponse,
} from "./models/webhook-create-response.js";
import {
  webhookListResponseInternalSchema,
  type WebhookListResponse,
} from "./models/webhook-list-response.js";
import {
  webhookRequestModelInternalSchema,
  type WebhookRequestModel,
} from "./models/webhook-request-model.js";
import { webhookResponseInternalSchema, type WebhookResponse } from "./models/webhook-response.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Lili across 3 of this provider's published API definitions:
 * lili-application-api-openapi.yml, lili-customer-management-api-openapi.yml,
 * lili-webhooks-api-openapi.yml. Each path carries the servers of the definition it was published
 * in.
 */
export class LiliClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "LILI_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "LiliClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Create Webhook
   *
   * @remarks
   * The Create Webhook API registers a new Webhook Listener in the Lili platform.
   *
   * As part of the response object, a token is returned. This token will be returned on any future
   * webhook call to ensure webhook legitimacy.
   *
   * @returns OK
   *
   * @throws {@link LiliClient.AddWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addWebhook(
    request: LiliClient.AddWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookCreateResponse, LiliClient.AddWebhookError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/lili/api/v1/webhooks"),
        auth: this.#auth.accessKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookRequestModelInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookCreateResponseInternalSchema },
        errorFactory: LiliClient.AddWebhookError,
      },
      options,
    );
  }

  /**
   * Download Bank Letter
   *
   * @remarks
   * Gets a PDF containing a bank letter for a customer
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPaymentNotification(
    request: LiliClient.CreatePaymentNotificationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lili/api/v1/{customerId}/bankLetter"),
        auth: this.#auth.accessKey,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete Webhook
   *
   * @remarks
   * The Delete Webhook API is used to completely delete a registered webhook.
   *
   * @returns OK
   *
   * @throws {@link LiliClient.DeleteWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: LiliClient.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiliClient.DeleteWebhookError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/lili/api/v1/webhooks/{webhookId}"),
        auth: this.#auth.accessKey,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiliClient.DeleteWebhookError,
      },
      options,
    );
  }

  /**
   * Get All Webhooks
   *
   * @remarks
   * The Get all webhooks returns a list of all the webhooks the platform registered in Lili
   *
   * @returns OK
   *
   * @throws {@link LiliClient.GetAllError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAll(options?: RequestOptions): ApiPromise<WebhookListResponse, LiliClient.GetAllError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lili/api/v1/webhooks"),
        auth: this.#auth.accessKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookListResponseInternalSchema },
        errorFactory: LiliClient.GetAllError,
      },
      options,
    );
  }

  /**
   * Get Webhook Details
   *
   * @remarks
   * The Get Webhook Details returns the details of an webhook that was registered in the Lili
   * system.
   *
   * @returns OK
   *
   * @throws {@link LiliClient.GetWebhookError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWebhook(
    request: LiliClient.GetWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse, LiliClient.GetWebhookError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lili/api/v1/webhooks/{webhookId}"),
        auth: this.#auth.accessKey,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: webhookResponseInternalSchema },
        errorFactory: LiliClient.GetWebhookError,
      },
      options,
    );
  }

  /**
   * Get a list of payments related to the customer
   *
   * @returns List of payments related to the customer
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentList(
    request: LiliClient.PaymentListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaymentListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/lili/api/v1/partner/payments"),
        auth: this.#auth.accessKey,
        pathParams: [],
        query: [
          { name: "customerId", value: request.customerId, schema: s.optional(s.string()) },
          {
            name: "receiverAccountNumber",
            value: request.receiverAccountNumber,
            schema: s.optional(s.string()),
          },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Register a payment transaction
   *
   * @remarks
   * Creates a payment notification in the Lili system
   *
   * @returns Payment request created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putLiliApiV1Payments(
    request: LiliClient.PutLiliApiV1PaymentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaymentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/lili/api/v1/payments"),
        auth: this.#auth.accessKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => paymentRequestSchema)) },
      },
      {
        success: { kind: "json", schema: paymentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create Application
   *
   * @remarks
   * The Create Application API is used to create a new Application in the Lili platform.
   *
   * The respon contains a UUID representing the applicant that was created in the Lili platform,
   * and a URL that allows initializing the application process with the pre-filled information.
   *
   * @returns Created with a URL of the onboarding link
   *
   * @throws {@link LiliClient.RegisterAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerAccount(
    request: LiliClient.RegisterAccountRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LeadResponse, LiliClient.RegisterAccountError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/lili/api/v1/lead"),
        auth: this.#auth.accessKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => leadRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: leadResponseInternalSchema },
        errorFactory: LiliClient.RegisterAccountError,
      },
      options,
    );
  }

  /**
   * Update Lead
   *
   * @remarks
   * The Update Lead API is used to update an existing lead in the Lili platform.
   *
   * @returns Success
   *
   * @throws {@link LiliClient.UpdateLeadError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLead(
    request: LiliClient.UpdateLeadRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiliClient.UpdateLeadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/lili/api/v1/lead/{customerId}"),
        auth: this.#auth.accessKey,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => leadRequestInternalSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiliClient.UpdateLeadError,
      },
      options,
    );
  }

  /**
   * Update Webhook
   *
   * @remarks
   * The Update Webhook updates a webhook that is registered in the Lili system. Usually, this is
   * used to disable an active webhook, or reactivate it.
   *
   * @returns OK
   *
   * @throws {@link LiliClient.UpdateWebhookError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWebhook(
    request: LiliClient.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<WebhookResponse, LiliClient.UpdateWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/lili/api/v1/webhooks/{webhookId}"),
        auth: this.#auth.accessKey,
        pathParams: [{ name: "webhookId", value: request.webhookId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: webhookRequestModelInternalSchema },
      },
      {
        success: { kind: "json", schema: webhookResponseInternalSchema },
        errorFactory: LiliClient.UpdateWebhookError,
      },
      options,
    );
  }

  /**
   * Upload Additional Document
   *
   * @remarks
   * The Upload Additional Document API is used to upload an additional document to the Lili
   * platform for a given lead.
   *
   * @returns Document uploaded
   *
   * @throws {@link LiliClient.UploadAdditionalDocError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LiliError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadAdditionalDoc(
    request: LiliClient.UploadAdditionalDocRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LiliClient.UploadAdditionalDocError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/lili/api/v1/lead/{customerId}/upload"),
        auth: this.#auth.accessKey,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => leadUploadSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: LiliClient.UploadAdditionalDocError,
      },
      options,
    );
  }
}

export namespace LiliClient {
  export type AddWebhookRequest = {
    body: WebhookRequestModel;
  };

  export class AddWebhookError extends ApiError {
    declare readonly payload: Declared<"jsonErrorResponse", JsonErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AddWebhookError> = [
      { on: 400, kind: "jsonErrorResponse", decode: { kind: "json", schema: jsonErrorResponseSchema } },
    ];
  }

  export type CreatePaymentNotificationRequest = {
    /** The customer ID, as provided in the create lead response */
    customerId: string;
  };

  export type DeleteWebhookRequest = {
    /** The webhook ID */
    webhookId: string;
  };

  export class DeleteWebhookError extends ApiError {
    declare readonly payload: Declared<"jsonErrorResponse", JsonErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteWebhookError> = [
      { on: 400, kind: "jsonErrorResponse", decode: { kind: "json", schema: jsonErrorResponseSchema } },
    ];
  }

  export class GetAllError extends ApiError {
    declare readonly payload: Declared<"jsonErrorResponse", JsonErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllError> = [
      { on: 400, kind: "jsonErrorResponse", decode: { kind: "json", schema: jsonErrorResponseSchema } },
    ];
  }

  export type GetWebhookRequest = {
    /** The webhook ID */
    webhookId: string;
  };

  export class GetWebhookError extends ApiError {
    declare readonly payload: Declared<"jsonErrorResponse", JsonErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetWebhookError> = [
      { on: 400, kind: "jsonErrorResponse", decode: { kind: "json", schema: jsonErrorResponseSchema } },
    ];
  }

  export type PaymentListRequest = {
    /** The customer ID, as provided in the create lead response */
    customerId?: string;
    /** The receiver account number */
    receiverAccountNumber?: string;
    /** Start date for the payment list */
    startDate?: Date;
    /** End date for the payment list */
    endDate?: Date;
  };

  export type PutLiliApiV1PaymentsRequest = {
    body?: PaymentRequest;
  };

  export type RegisterAccountRequest = {
    body?: LeadRequest;
  };

  export class RegisterAccountError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<RegisterAccountError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type UpdateLeadRequest = {
    customerId: string;
    body?: LeadRequest;
  };

  export class UpdateLeadError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLeadError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }

  export type UpdateWebhookRequest = {
    /** The webhook ID */
    webhookId: string;
    body: WebhookRequestModel;
  };

  export class UpdateWebhookError extends ApiError {
    declare readonly payload: Declared<"jsonErrorResponse", JsonErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateWebhookError> = [
      { on: 400, kind: "jsonErrorResponse", decode: { kind: "json", schema: jsonErrorResponseSchema } },
    ];
  }

  export type UploadAdditionalDocRequest = {
    customerId: string;
    body?: LeadUpload;
  };

  export class UploadAdditionalDocError extends ApiError {
    declare readonly payload: Declared<"error400", Record<string, unknown>> | Undeclared;

    static readonly errors: ErrorDecoders<UploadAdditionalDocError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.record(s.string(), s.unknown()) } },
    ];
  }
}

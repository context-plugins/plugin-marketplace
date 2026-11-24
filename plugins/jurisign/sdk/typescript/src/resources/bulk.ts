import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkCampaignsCancelResponseSchema,
  type BulkCampaignsCancelResponse,
} from "../models/bulk-campaigns-cancel-response.js";
import {
  bulkCampaignsExportResponseSchema,
  type BulkCampaignsExportResponse,
} from "../models/bulk-campaigns-export-response.js";
import {
  bulkCampaignsLaunchResponseSchema,
  type BulkCampaignsLaunchResponse,
} from "../models/bulk-campaigns-launch-response.js";
import {
  bulkCampaignsRequestInternalSchema,
  type BulkCampaignsRequest,
} from "../models/bulk-campaigns-request.js";
import {
  bulkCampaignsResponseSchema,
  type BulkCampaignsResponse,
} from "../models/bulk-campaigns-response.js";
import {
  bulkCampaignsResponse1Schema,
  type BulkCampaignsResponse1,
} from "../models/bulk-campaigns-response1.js";
import {
  bulkCampaignsResponse2Schema,
  type BulkCampaignsResponse2,
} from "../models/bulk-campaigns-response2.js";
import {
  bulkCampaignsRetryResponseSchema,
  type BulkCampaignsRetryResponse,
} from "../models/bulk-campaigns-retry-response.js";
import {
  bulkTemplatesRequestInternalSchema,
  type BulkTemplatesRequest,
} from "../models/bulk-templates-request.js";
import {
  bulkTemplatesRequest1Schema,
  type BulkTemplatesRequest1,
} from "../models/bulk-templates-request1.js";
import {
  bulkTemplatesResponseSchema,
  type BulkTemplatesResponse,
} from "../models/bulk-templates-response.js";
import {
  bulkTemplatesResponse1Schema,
  type BulkTemplatesResponse1,
} from "../models/bulk-templates-response1.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { validationError1Schema, type ValidationError1 } from "../models/validation-error1.js";
import type { Servers } from "../servers.js";

/**
 * Merge templates and bulk campaigns (one individualised request per recipient)
 */
export class Bulk {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Bulk Campaign
   *
   * @returns Campaign cancelled
   *
   * @throws {@link Bulk.CancelBulkCampaignError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelBulkCampaign(
    request: Bulk.CancelBulkCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkCampaignsCancelResponse, Bulk.CancelBulkCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bulk-campaigns/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkCampaignsCancelResponseSchema },
        errorFactory: Bulk.CancelBulkCampaignError,
      },
      options,
    );
  }

  /**
   * Create Bulk Campaign
   *
   * @remarks
   * Create a bulk campaign with recipients provided directly as JSON (no Excel upload needed for
   * API clients). Each recipient generates one individualized sign request, merged from the bulk
   * template. Invalid rows (missing fields, invalid email, duplicate email) are skipped and
   * reported in `skipped_recipients`, not fatal.
   *
   * @returns Campaign created (draft, not yet launched)
   *
   * @throws {@link Bulk.CreateBulkCampaignError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBulkCampaign(
    request: Bulk.CreateBulkCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkCampaignsResponse1, Bulk.CreateBulkCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bulk-campaigns"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkCampaignsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkCampaignsResponse1Schema },
        errorFactory: Bulk.CreateBulkCampaignError,
      },
      options,
    );
  }

  /**
   * Create Bulk Template
   *
   * @remarks
   * Create a merge-field HTML template (e.g. ` Bonjour {{prenom}} {{nom}} `). Merge fields are
   * auto-extracted from the content.
   *
   * @returns Bulk template created
   *
   * @throws {@link Bulk.CreateBulkTemplateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBulkTemplate(
    request: Bulk.CreateBulkTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkTemplatesResponse1, Bulk.CreateBulkTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bulk-templates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkTemplatesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkTemplatesResponse1Schema },
        errorFactory: Bulk.CreateBulkTemplateError,
      },
      options,
    );
  }

  /**
   * Delete Bulk Campaign
   *
   * @remarks
   * Fails with 422 if the campaign is currently processing.
   *
   * @returns Bulk campaign deleted
   *
   * @throws {@link Bulk.DeleteBulkCampaignError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBulkCampaign(
    request: Bulk.DeleteBulkCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, Bulk.DeleteBulkCampaignError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bulk-campaigns/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Bulk.DeleteBulkCampaignError,
      },
      options,
    );
  }

  /**
   * Delete Bulk Template
   *
   * @remarks
   * Fails with 422 if the template is still referenced by a campaign.
   *
   * @returns Bulk template deleted
   *
   * @throws {@link Bulk.DeleteBulkTemplateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBulkTemplate(
    request: Bulk.DeleteBulkTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, Bulk.DeleteBulkTemplateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/bulk-templates/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Bulk.DeleteBulkTemplateError,
      },
      options,
    );
  }

  /**
   * Export Campaign Results
   *
   * @remarks
   * Per-recipient status, send/sign timestamps, and error messages.
   *
   * @returns Recipient results
   *
   * @throws {@link Bulk.ExportBulkCampaignResultsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportBulkCampaignResults(
    request: Bulk.ExportBulkCampaignResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkCampaignsExportResponse, Bulk.ExportBulkCampaignResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bulk-campaigns/{id}/export"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkCampaignsExportResponseSchema },
        errorFactory: Bulk.ExportBulkCampaignResultsError,
      },
      options,
    );
  }

  /**
   * Get Bulk Campaign
   *
   * @returns Bulk campaign details
   *
   * @throws {@link Bulk.GetBulkCampaignError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBulkCampaign(
    request: Bulk.GetBulkCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkCampaignsResponse2, Bulk.GetBulkCampaignError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bulk-campaigns/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkCampaignsResponse2Schema },
        errorFactory: Bulk.GetBulkCampaignError,
      },
      options,
    );
  }

  /**
   * Get Bulk Template
   *
   * @returns Bulk template details
   *
   * @throws {@link Bulk.GetBulkTemplateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBulkTemplate(
    request: Bulk.GetBulkTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkTemplatesResponse1, Bulk.GetBulkTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bulk-templates/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkTemplatesResponse1Schema },
        errorFactory: Bulk.GetBulkTemplateError,
      },
      options,
    );
  }

  /**
   * Launch Bulk Campaign
   *
   * @remarks
   * Dispatches an asynchronous job that generates each recipient's document, creates their sign
   * request, and sends it. Fails with 422 if the organization does not have enough remaining
   * credits.
   *
   * @returns Campaign launched (status: processing)
   *
   * @throws {@link Bulk.LaunchBulkCampaignError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  launchBulkCampaign(
    request: Bulk.LaunchBulkCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkCampaignsLaunchResponse, Bulk.LaunchBulkCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bulk-campaigns/{id}/launch"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkCampaignsLaunchResponseSchema },
        errorFactory: Bulk.LaunchBulkCampaignError,
      },
      options,
    );
  }

  /**
   * List Bulk Campaigns
   *
   * @returns Bulk campaigns list
   *
   * @throws {@link Bulk.ListBulkCampaignsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBulkCampaigns(
    request: Bulk.ListBulkCampaignsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BulkCampaignsResponse, Bulk.ListBulkCampaignsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bulk-campaigns"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkCampaignsResponseSchema },
        errorFactory: Bulk.ListBulkCampaignsError,
      },
      options,
    );
  }

  /**
   * List Bulk Templates
   *
   * @remarks
   * Retrieve reusable merge-field HTML templates used by bulk campaigns.
   *
   * @returns Bulk templates list
   *
   * @throws {@link Bulk.ListBulkTemplatesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBulkTemplates(
    options?: RequestOptions,
  ): ApiPromise<BulkTemplatesResponse, Bulk.ListBulkTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/bulk-templates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkTemplatesResponseSchema },
        errorFactory: Bulk.ListBulkTemplatesError,
      },
      options,
    );
  }

  /**
   * Retry Failed Recipients
   *
   * @remarks
   * Resets recipients in error back to pending so the campaign can be launched again.
   *
   * @returns Failed recipients reset
   *
   * @throws {@link Bulk.RetryBulkCampaignError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retryBulkCampaign(
    request: Bulk.RetryBulkCampaignRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkCampaignsRetryResponse, Bulk.RetryBulkCampaignError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bulk-campaigns/{id}/retry"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bulkCampaignsRetryResponseSchema },
        errorFactory: Bulk.RetryBulkCampaignError,
      },
      options,
    );
  }

  /**
   * Update Bulk Template
   *
   * @returns Bulk template updated
   *
   * @throws {@link Bulk.UpdateBulkTemplateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBulkTemplate(
    request: Bulk.UpdateBulkTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkTemplatesResponse1, Bulk.UpdateBulkTemplateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/bulk-templates/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => bulkTemplatesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: bulkTemplatesResponse1Schema },
        errorFactory: Bulk.UpdateBulkTemplateError,
      },
      options,
    );
  }
}

export namespace Bulk {
  export type CancelBulkCampaignRequest = {
    /** Resource UUID */
    id: string;
  };

  export class CancelBulkCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelBulkCampaignError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type CreateBulkCampaignRequest = {
    body: BulkCampaignsRequest;
  };

  export class CreateBulkCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBulkCampaignError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
    ];
  }

  export type CreateBulkTemplateRequest = {
    body: BulkTemplatesRequest;
  };

  export class CreateBulkTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBulkTemplateError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
    ];
  }

  export type DeleteBulkCampaignRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DeleteBulkCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBulkCampaignError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type DeleteBulkTemplateRequest = {
    /** Resource UUID */
    id: string;
  };

  export class DeleteBulkTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBulkTemplateError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type ExportBulkCampaignResultsRequest = {
    /** Resource UUID */
    id: string;
  };

  export class ExportBulkCampaignResultsError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportBulkCampaignResultsError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type GetBulkCampaignRequest = {
    /** Resource UUID */
    id: string;
  };

  export class GetBulkCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBulkCampaignError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type GetBulkTemplateRequest = {
    /** Resource UUID */
    id: string;
  };

  export class GetBulkTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBulkTemplateError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type LaunchBulkCampaignRequest = {
    /** Resource UUID */
    id: string;
  };

  export class LaunchBulkCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<LaunchBulkCampaignError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type ListBulkCampaignsRequest = {
    status?: string;
    /** @default 20 */
    perPage?: number;
  };

  export class ListBulkCampaignsError extends ApiError {
    declare readonly payload: Declared<"messageResponse", MessageResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListBulkCampaignsError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export class ListBulkTemplatesError extends ApiError {
    declare readonly payload: Declared<"messageResponse", MessageResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListBulkTemplatesError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type RetryBulkCampaignRequest = {
    /** Resource UUID */
    id: string;
  };

  export class RetryBulkCampaignError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Declared<"messageResponse3", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RetryBulkCampaignError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "messageResponse3", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type UpdateBulkTemplateRequest = {
    /** Resource UUID */
    id: string;
    body?: BulkTemplatesRequest1;
  };

  export class UpdateBulkTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBulkTemplateError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 404, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }
}

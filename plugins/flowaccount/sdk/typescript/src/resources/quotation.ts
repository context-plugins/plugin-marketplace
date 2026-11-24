import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { inlineDocumentSchema, type InlineDocument } from "../models/inline-document.js";
import { messageSentSchema, type MessageSent } from "../models/message-sent.js";
import { paymentModelSchema, type PaymentModel } from "../models/payment-model.js";
import { simpleDocumentSchema, type SimpleDocument } from "../models/simple-document.js";
import type { Servers } from "../servers.js";

export class Quotation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * To change status by the document id and key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationChangeStatusByKey(
    request: Quotation.QuotationChangeStatusByKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/quotations/{documentId}/status-key/{statusKey}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "documentId", value: request.documentId, schema: s.int() },
          { name: "statusKey", value: request.statusKey, schema: s.nullable(s.string()) },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To Create a document with SimpleDocument as the parameter
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationCreate(
    request: Quotation.QuotationCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageSent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/quotations/simple-document"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: simpleDocumentSchema },
      },
      {
        success: { kind: "json", schema: messageSentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To Create a document with InlineDocument as the parameter
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationCreate2(
    request: Quotation.QuotationCreate2Request,
    options?: RequestOptions,
  ): ApiPromise<MessageSent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/quotations/inline-document"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: inlineDocumentSchema },
      },
      {
        success: { kind: "json", schema: messageSentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Quotation create partial manual payall
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationCreatePartialManualPayall(
    request: Quotation.QuotationCreatePartialManualPayallRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/quotations/{id}/partial-manual-payall"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To delete the document given a list of documentids
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationDelete(
    request: Quotation.QuotationDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{culture}/quotations/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To get details of a document
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationDetails(
    request: Quotation.QuotationDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/quotations/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To Update a document with simpleDocument as the parameter
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationEdit(
    request: Quotation.QuotationEditRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{culture}/quotations/simple-document/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: simpleDocumentSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To Update a document with inlineDocument as the parameter
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationEdit2(
    request: Quotation.QuotationEdit2Request,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{culture}/quotations/inline-document/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: inlineDocumentSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To query for documents
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationIndex(
    request: Quotation.QuotationIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/quotations"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [
          { name: "SortBy", value: request.sortBy, schema: s.optionalNullable(s.string()) },
          { name: "CurrentPage", value: request.currentPage, schema: s.optionalNullable(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optionalNullable(s.string()) },
          { name: "Filter", value: request.filter, schema: s.optionalNullable(s.string()) },
          { name: "SearchString", value: request.searchString, schema: s.optionalNullable(s.string()) },
          {
            name: "CustomDocumentModels",
            value: request.customDocumentModels,
            schema: s.optionalNullable(s.string()),
          },
          { name: "Range", value: request.range, schema: s.optionalNullable(s.string()) },
          { name: "Month", value: request.month, schema: s.optionalNullable(s.string()) },
          { name: "Year", value: request.year, schema: s.optionalNullable(s.string()) },
          { name: "StartDate", value: request.startDate, schema: s.optionalNullable(s.string()) },
          { name: "EndDate", value: request.endDate, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Quotation partial manual cancel
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationPartialManualCancel(
    request: Quotation.QuotationPartialManualCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/quotations/{id}/partial-manual-cancel"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To Accept payment with the paymentModel
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  quotationReceivePayment(
    request: Quotation.QuotationReceivePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/quotations/{id}/payments"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentModelSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Quotation {
  export type QuotationChangeStatusByKeyRequest = {
    documentId: number;
    statusKey: string | null;
    culture: string;
  };

  export type QuotationCreateRequest = {
    culture: string;
    body: SimpleDocument;
  };

  export type QuotationCreate2Request = {
    culture: string;
    body: InlineDocument;
  };

  export type QuotationCreatePartialManualPayallRequest = {
    id: number;
    culture: string;
  };

  export type QuotationDeleteRequest = {
    id: number;
    culture: string;
  };

  export type QuotationDetailsRequest = {
    /** Sql DocumentId */
    id: number;
    culture: string;
  };

  export type QuotationEditRequest = {
    id: number;
    culture: string;
    body: SimpleDocument;
  };

  export type QuotationEdit2Request = {
    id: number;
    culture: string;
    body: InlineDocument;
  };

  export type QuotationIndexRequest = {
    culture: string;
    sortBy?: string | null;
    currentPage?: string | null;
    pageSize?: string | null;
    filter?: string | null;
    searchString?: string | null;
    customDocumentModels?: string | null;
    range?: string | null;
    month?: string | null;
    year?: string | null;
    startDate?: string | null;
    endDate?: string | null;
  };

  export type QuotationPartialManualCancelRequest = {
    id: number;
    culture: string;
  };

  export type QuotationReceivePaymentRequest = {
    id: number;
    culture: string;
    body: PaymentModel;
  };
}

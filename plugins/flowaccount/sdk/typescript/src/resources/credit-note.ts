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

export class CreditNote {
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
  creditNoteChangeStatusByKey(
    request: CreditNote.CreditNoteChangeStatusByKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/{documentId}/status-key/{statusKey}"),
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
  creditNoteCreate(
    request: CreditNote.CreditNoteCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageSent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/simple-document"),
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
  creditNoteCreate2(
    request: CreditNote.CreditNoteCreate2Request,
    options?: RequestOptions,
  ): ApiPromise<MessageSent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/inline-document"),
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
   * To delete the document given a list of documentids
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditNoteDelete(
    request: CreditNote.CreditNoteDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/{id}"),
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
  creditNoteDetails(
    request: CreditNote.CreditNoteDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/{id}"),
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
  creditNoteEdit(
    request: CreditNote.CreditNoteEditRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/simple-document/{id}"),
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
  creditNoteEdit2(
    request: CreditNote.CreditNoteEdit2Request,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/inline-document/{id}"),
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
   * Credit note get cumulative document reference list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditNoteGetCumulativeDocumentReferenceList(
    request: CreditNote.CreditNoteGetCumulativeDocumentReferenceListRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/cumulative-references"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [{ name: "ids", value: request.ids, schema: s.optionalNullable(s.string()) }],
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
   * To query for documents
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditNoteIndex(
    request: CreditNote.CreditNoteIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{culture}/credit-notes"),
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
   * To Accept payment with the paymentModel
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditNoteReceivePayment(
    request: CreditNote.CreditNoteReceivePaymentRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{culture}/credit-notes/{id}/payments"),
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

export namespace CreditNote {
  export type CreditNoteChangeStatusByKeyRequest = {
    documentId: number;
    statusKey: string | null;
    culture: string;
  };

  export type CreditNoteCreateRequest = {
    culture: string;
    body: SimpleDocument;
  };

  export type CreditNoteCreate2Request = {
    culture: string;
    body: InlineDocument;
  };

  export type CreditNoteDeleteRequest = {
    id: number;
    culture: string;
  };

  export type CreditNoteDetailsRequest = {
    /** Sql DocumentId */
    id: number;
    culture: string;
  };

  export type CreditNoteEditRequest = {
    id: number;
    culture: string;
    body: SimpleDocument;
  };

  export type CreditNoteEdit2Request = {
    id: number;
    culture: string;
    body: InlineDocument;
  };

  export type CreditNoteGetCumulativeDocumentReferenceListRequest = {
    culture: string;
    ids?: string | null;
  };

  export type CreditNoteIndexRequest = {
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

  export type CreditNoteReceivePaymentRequest = {
    id: number;
    culture: string;
    body: PaymentModel;
  };
}

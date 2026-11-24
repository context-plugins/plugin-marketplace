import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contactResultInternalSchema, type ContactResult } from "../models/contact-result.js";
import type { Servers } from "../servers.js";

export class ContactApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Contact create
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactCreate(
    request: ContactApi.ContactCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{culture}/contacts"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactResultInternalSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Contact get contact list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactGetContactList(
    request: ContactApi.ContactGetContactListRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{culture}/contacts"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.nullable(s.int()) },
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
   * Contact get contact list2
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactGetContactList2(
    request: ContactApi.ContactGetContactList2Request,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{culture}/contacts/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.nullable(s.int()) },
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
   * Contact remove contact
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactRemoveContact(
    request: ContactApi.ContactRemoveContactRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/{culture}/contacts/{id}"),
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
   * Contact search
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactSearch(
    request: ContactApi.ContactSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{culture}/contacts/search"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "culture", value: request.culture, schema: s.string() }],
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
   * Contact update
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactUpdate(
    request: ContactApi.ContactUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/{culture}/contacts/{id}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "culture", value: request.culture, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactResultInternalSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Contact upload contact QR code
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FlowAccountError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactUploadContactQrCode(
    request: ContactApi.ContactUploadContactQrCodeRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{culture}/contacts/{contactId}/update-contact-qrcode"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "contactId", value: request.contactId, schema: s.int() },
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
}

export namespace ContactApi {
  export type ContactCreateRequest = {
    culture: string;
    body: ContactResult;
  };

  export type ContactGetContactListRequest = {
    id: number | null;
    culture: string;
  };

  export type ContactGetContactList2Request = {
    id: number | null;
    culture: string;
  };

  export type ContactRemoveContactRequest = {
    id: number;
    culture: string;
  };

  export type ContactSearchRequest = {
    culture: string;
  };

  export type ContactUpdateRequest = {
    id: number;
    culture: string;
    body: ContactResult;
  };

  export type ContactUploadContactQrCodeRequest = {
    contactId: number;
    culture: string;
  };
}

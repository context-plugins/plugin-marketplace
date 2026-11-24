import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contactCreateSchema, type ContactCreate } from "../models/contact-create.js";
import { contactListResponseSchema, type ContactListResponse } from "../models/contact-list-response.js";
import { contactSchema, type Contact } from "../models/contact.js";
import { contact1Schema, type Contact1 } from "../models/contact1.js";
import {
  createContactRequestInternalSchema,
  type CreateContactRequest,
} from "../models/create-contact-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  updateContactRequestInternalSchema,
  type UpdateContactRequest,
} from "../models/update-contact-request.js";
import type { Servers } from "../servers.js";

export class Contacts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a new contact
   *
   * @remarks
   * Creates a new contact for the organization
   *
   * @returns 201
   *
   * @throws {@link Contacts.CreateContactError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContact(
    request: Contacts.CreateContactRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Contact1, Contacts.CreateContactError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/contacts/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createContactRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: contact1Schema },
        errorFactory: Contacts.CreateContactError,
      },
      options,
    );
  }

  /**
   * Create contact
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create2(request: Contacts.Create2Request, options?: RequestOptions): ApiPromise<Contact, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/contacts"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => contactCreateSchema)) },
      },
      {
        success: { kind: "json", schema: contactSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete contact by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteByExternalId2(
    request: Contacts.DeleteByExternalId2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/contacts/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete contact
   *
   * @remarks
   * Delete a contact by its ID
   *
   * @returns 200
   *
   * @throws {@link Contacts.DeleteContactByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContactById(
    request: Contacts.DeleteContactByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Contacts.DeleteContactByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/contacts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Contacts.DeleteContactByIdError,
      },
      options,
    );
  }

  /**
   * Delete contact
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  delete2(
    request: Contacts.Delete2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/contacts/{contactId}"),
        auth: noneAuth,
        pathParams: [{ name: "contactId", value: request.contactId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get contact by external ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getByExternalId2(
    request: Contacts.GetByExternalId2Request,
    options?: RequestOptions,
  ): ApiPromise<Contact, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get contact
   *
   * @remarks
   * Get a contact by its ID
   *
   * @returns 200
   *
   * @throws {@link Contacts.GetContactByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactById(
    request: Contacts.GetContactByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Contact1, Contacts.GetContactByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contact1Schema },
        errorFactory: Contacts.GetContactByIdError,
      },
      options,
    );
  }

  /**
   * Get contact by ID
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  get2(request: Contacts.Get2Request, options?: RequestOptions): ApiPromise<Contact, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts/{contactId}"),
        auth: noneAuth,
        pathParams: [{ name: "contactId", value: request.contactId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List contacts
   *
   * @remarks
   * Get a list of contacts for the organization
   *
   * @returns 200
   *
   * @throws {@link Contacts.ListContactsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContacts(
    request: Contacts.ListContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactListResponse, Contacts.ListContactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts/"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactListResponseSchema },
        errorFactory: Contacts.ListContactsError,
      },
      options,
    );
  }

  /**
   * Get contacts
   *
   * @returns Success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  list2(request: Contacts.List2Request, options?: RequestOptions): ApiPromise<Contact[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => contactSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update contact by external ID
   *
   * @remarks
   * Update a contact by its external ID
   *
   * @returns 200
   *
   * @throws {@link Contacts.UpdateContactByExternalIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContactByExternalId(
    request: Contacts.UpdateContactByExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Contact1, Contacts.UpdateContactByExternalIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/contacts/external/{externalId}"),
        auth: noneAuth,
        pathParams: [{ name: "externalId", value: request.externalId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateContactRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: contact1Schema },
        errorFactory: Contacts.UpdateContactByExternalIdError,
      },
      options,
    );
  }

  /**
   * Update contact
   *
   * @remarks
   * Update a contact by its ID
   *
   * @returns 200
   *
   * @throws {@link Contacts.UpdateContactByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PaidError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContactById(
    request: Contacts.UpdateContactByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Contact1, Contacts.UpdateContactByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/contacts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateContactRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: contact1Schema },
        errorFactory: Contacts.UpdateContactByIdError,
      },
      options,
    );
  }
}

export namespace Contacts {
  export type CreateContactRequestParams = {
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: CreateContactRequest;
  };

  export class CreateContactError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContactError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Create2Request = {
    /** Bearer authentication */
    authorization: string;
    body?: ContactCreate;
  };

  export type DeleteByExternalId2Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type DeleteContactByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class DeleteContactByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteContactByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Delete2Request = {
    contactId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetByExternalId2Request = {
    externalId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type GetContactByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class GetContactByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactByIdError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type Get2Request = {
    contactId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export type ListContactsRequest = {
    /** @default 10 */
    limit?: number;
    offset?: number;
    /** API Key authentication using Bearer token */
    authorization: string;
  };

  export class ListContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type List2Request = {
    /** Bearer authentication */
    authorization: string;
  };

  export type UpdateContactByExternalIdRequest = {
    externalId: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateContactRequest;
  };

  export class UpdateContactByExternalIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContactByExternalIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateContactByIdRequest = {
    id: string;
    /** API Key authentication using Bearer token */
    authorization: string;
    /** Body */
    body?: UpdateContactRequest;
  };

  export class UpdateContactByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContactByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

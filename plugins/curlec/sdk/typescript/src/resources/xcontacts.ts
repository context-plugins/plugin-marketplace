import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactsRequestInternalSchema, type ContactsRequest } from "../models/contacts-request.js";
import { contactsRequest1Schema, type ContactsRequest1 } from "../models/contacts-request1.js";
import { contactsResponseInternalSchema, type ContactsResponse } from "../models/contacts-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { xContactInternalSchema, type XContact } from "../models/xcontact.js";
import type { Servers } from "../servers.js";

/**
 * RazorpayX payout recipients — create, fetch, update contacts
 */
export class XContacts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a contact
   *
   * @remarks
   * Create a payout recipient contact. Returns existing contact if all identifying fields (name,
   * email, contact, type) match an existing record.
   *
   * @returns Contact created
   *
   * @throws {@link XContacts.CreateContactError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContact(
    request: XContacts.CreateContactRequest,
    options?: RequestOptions,
  ): ApiPromise<XContact, XContacts.CreateContactError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/contacts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: xContactInternalSchema },
        errorFactory: XContacts.CreateContactError,
      },
      options,
    );
  }

  /**
   * Fetch a contact
   *
   * @remarks
   * Fetch details of a specific contact by its ID.
   *
   * @returns Contact details
   *
   * @throws {@link XContacts.FetchContactError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchContact(
    request: XContacts.FetchContactRequest,
    options?: RequestOptions,
  ): ApiPromise<XContact, XContacts.FetchContactError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts/{contact_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "contact_id", value: request.contactId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: xContactInternalSchema },
        errorFactory: XContacts.FetchContactError,
      },
      options,
    );
  }

  /**
   * List contacts
   *
   * @remarks
   * Filter and list all contacts. Supports filtering by name, email, phone number, reference ID,
   * and active status.
   *
   * @returns List of contacts
   *
   * @throws {@link XContacts.ListContactsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContacts(
    request: XContacts.ListContactsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ContactsResponse, XContacts.ListContactsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "contact", value: request.contact, schema: s.optional(s.string()) },
          { name: "reference_id", value: request.referenceId, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactsResponseInternalSchema },
        errorFactory: XContacts.ListContactsError,
      },
      options,
    );
  }

  /**
   * Update or activate/deactivate a contact
   *
   * @remarks
   * Update contact details or activate/deactivate a contact. Set `active: false` to deactivate.
   *
   * @returns Updated contact
   *
   * @throws {@link XContacts.UpdateContactError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContact(
    request: XContacts.UpdateContactRequest,
    options?: RequestOptions,
  ): ApiPromise<XContact, XContacts.UpdateContactError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/contacts/{contact_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "contact_id", value: request.contactId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactsRequest1Schema },
      },
      {
        success: { kind: "json", schema: xContactInternalSchema },
        errorFactory: XContacts.UpdateContactError,
      },
      options,
    );
  }
}

export namespace XContacts {
  export type CreateContactRequest = {
    body: ContactsRequest;
  };

  export class CreateContactError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContactError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchContactRequest = {
    /** Unique identifier of the contact (e.g. `cont_00000000000001`). */
    contactId: string;
  };

  export class FetchContactError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchContactError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListContactsRequest = {
    /** Filter by contact name (partial match supported). */
    name?: string;
    /** Filter by contact email address. */
    email?: string;
    /** Filter by contact phone number. */
    contact?: string;
    /** Filter by your unique reference ID for the contact (max 40 chars). */
    referenceId?: string;
    /** Unix timestamp filter */
    from?: number;
    /** Unix timestamp. Only contacts created before this timestamp are returned. */
    to?: number;
    /** Number of contacts to return. Default: 10. Maximum: 100. @default 10 */
    count?: number;
    /** Number of contacts to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
  };

  export const listContactsRequestSchema: Schema<ListContactsRequest> = s.lazySchema(() =>
    s.object<ListContactsRequest>({
      name: s.optional(s.string()),
      email: s.optional(s.string()),
      contact: s.optional(s.string()),
      referenceId: s.optional(s.string()),
      from: s.optional(s.int()),
      to: s.optional(s.int()),
      count: s.defaulted(s.int().check(s.lte(100)), 10),
      skip: s.defaulted(s.int(), 0),
    }),
  );

  export class ListContactsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListContactsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateContactRequest = {
    /** Unique identifier of the contact (e.g. `cont_00000000000001`). */
    contactId: string;
    body: ContactsRequest1;
  };

  export class UpdateContactError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContactError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

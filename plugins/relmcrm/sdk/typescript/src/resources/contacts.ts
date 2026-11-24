import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactInputSchema, type ContactInput } from "../models/contact-input.js";
import { contactListSchema, type ContactList } from "../models/contact-list.js";
import { contactSchema, type Contact } from "../models/contact.js";
import { deletedSchema, type Deleted } from "../models/deleted.js";
import type { Servers } from "../servers.js";

export class Contacts {
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
   * Needs at least one of: a name, an identifier (email/phone/linkedin_url), a company, or a custom
   * field. Email is unique per workspace.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContact(
    request: Contacts.CreateContactRequest,
    options?: RequestOptions,
  ): ApiPromise<Contact, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/contacts"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: contactInputSchema },
      },
      {
        success: { kind: "json", schema: contactSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Soft-delete a contact
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContact(
    request: Contacts.DeleteContactRequest,
    options?: RequestOptions,
  ): ApiPromise<Deleted, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/contacts/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deletedSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a contact
   *
   * @returns Contact
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContact(request: Contacts.GetContactRequest, options?: RequestOptions): ApiPromise<Contact, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
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
   * @returns Contact list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContacts(
    request: Contacts.ListContactsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ContactList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/contacts"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "include_deleted", value: request.includeDeleted, schema: s.optional(s.boolean()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "company_id", value: request.companyId, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Restore a soft-deleted contact
   *
   * @returns Restored
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreContact(
    request: Contacts.RestoreContactRequest,
    options?: RequestOptions,
  ): ApiPromise<Contact, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/contacts/{id}/restore"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
   * Update a contact
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContact(
    request: Contacts.UpdateContactRequest,
    options?: RequestOptions,
  ): ApiPromise<Contact, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/contacts/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: contactInputSchema },
      },
      {
        success: { kind: "json", schema: contactSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Contacts {
  export type CreateContactRequest = {
    /** Safely retry a create: same key + same body replays the original result. */
    idempotencyKey?: string;
    body: ContactInput;
  };

  export type DeleteContactRequest = {
    id: string;
  };

  export type GetContactRequest = {
    id: string;
  };

  export type ListContactsRequest = {
    /** Page size (default 25, max 100). @default 25 */
    limit?: number;
    /** Opaque keyset cursor from a prior next_cursor. */
    cursor?: string;
    /** Include soft-deleted rows. */
    includeDeleted?: boolean;
    /** Substring over name/email/phone/linkedin. */
    q?: string;
    email?: string;
    companyId?: string;
    /** A registered contact.type value (validated). */
    type?: string;
  };

  export const listContactsRequestSchema: Schema<ListContactsRequest> = s.lazySchema(() =>
    s.object<ListContactsRequest>({
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      cursor: s.optional(s.string()),
      includeDeleted: s.optional(s.boolean()),
      q: s.optional(s.string()),
      email: s.optional(s.string()),
      companyId: s.optional(s.string()),
      type: s.optional(s.string()),
    }),
  );

  export type RestoreContactRequest = {
    id: string;
  };

  export type UpdateContactRequest = {
    id: string;
    /**
     * The record's current version for optimistic concurrency; a mismatch returns 412
     * version_conflict.
     */
    ifMatch?: string;
    body: ContactInput;
  };
}

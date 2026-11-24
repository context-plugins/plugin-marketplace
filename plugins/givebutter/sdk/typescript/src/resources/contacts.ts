import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import { contactResourceSchema, type ContactResource } from "../models/contact-resource.js";
import { contactTypeSchema, type ContactType } from "../models/contact-type.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import { sortByDescSchema, type SortByDesc } from "../models/sort-by-desc.js";
import { sortBySchema, type SortBy } from "../models/sort-by.js";
import {
  updateContactRequestInternalSchema,
  type UpdateContactRequest,
} from "../models/update-contact-request.js";
import { v1ContactsRequestInternalSchema, type V1ContactsRequest } from "../models/v1-contacts-request.js";
import { v1ContactsResponseInternalSchema, type V1ContactsResponse } from "../models/v1-contacts-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
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
   * Restore a contact
   *
   * @returns `ContactResource`
   *
   * @throws {@link Contacts.ContactRestoreError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactRestore(
    request: Contacts.ContactRestoreRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactResource, Contacts.ContactRestoreError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/restore"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: Contacts.ContactRestoreError,
      },
      options,
    );
  }

  /**
   * Delete a contact
   *
   * @throws {@link Contacts.ContactsDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsDestroy(
    request: Contacts.ContactsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Contacts.ContactsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Contacts.ContactsDestroyError,
      },
      options,
    );
  }

  /**
   * List all contacts
   *
   * @returns Paginated set of `ContactResource`
   *
   * @throws {@link Contacts.ContactsIndexError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsIndex(
    request: Contacts.ContactsIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1ContactsResponse, Contacts.ContactsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/contacts"),
        auth: this.#auth.http,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => contactTypeSchema)) },
          { name: "createdAfter", value: request.createdAfter, schema: s.optionalNullable(s.dateTime()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optionalNullable(s.dateTime()) },
          { name: "updatedAfter", value: request.updatedAfter, schema: s.optionalNullable(s.dateTime()) },
          { name: "updatedBefore", value: request.updatedBefore, schema: s.optionalNullable(s.dateTime()) },
          {
            name: "totalContributionsMin",
            value: request.totalContributionsMin,
            schema: s.optionalNullable(s.float64()),
          },
          {
            name: "totalContributionsMax",
            value: request.totalContributionsMax,
            schema: s.optionalNullable(s.float64()),
          },
          {
            name: "recurringContributionsMin",
            value: request.recurringContributionsMin,
            schema: s.optionalNullable(s.float64()),
          },
          {
            name: "recurringContributionsMax",
            value: request.recurringContributionsMax,
            schema: s.optionalNullable(s.float64()),
          },
          { name: "tags", value: request.tags, schema: s.optionalNullable(s.string()) },
          { name: "sortBy", value: request.sortBy, schema: s.optionalNullable(s.lazy(() => sortBySchema)) },
          {
            name: "sortByDesc",
            value: request.sortByDesc,
            schema: s.optionalNullable(s.lazy(() => sortByDescSchema)),
          },
          { name: "email", value: request.email, schema: s.optionalNullable(s.string()) },
          { name: "primaryEmail", value: request.primaryEmail, schema: s.optionalNullable(s.string()) },
          { name: "firstName", value: request.firstName, schema: s.optionalNullable(s.string()) },
          { name: "lastName", value: request.lastName, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ContactsResponseInternalSchema },
        errorFactory: Contacts.ContactsIndexError,
      },
      options,
    );
  }

  /**
   * Get a contact
   *
   * @returns `ContactResource`
   *
   * @throws {@link Contacts.ContactsShowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsShow(
    request: Contacts.ContactsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactResource, Contacts.ContactsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: Contacts.ContactsShowError,
      },
      options,
    );
  }

  /**
   * Create a contact
   *
   * @returns `ContactResource`
   *
   * @throws {@link Contacts.ContactsStoreError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsStore(
    request: Contacts.ContactsStoreRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ContactResource, Contacts.ContactsStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/contacts"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v1ContactsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: Contacts.ContactsStoreError,
      },
      options,
    );
  }

  /**
   * Update a contact
   *
   * @returns `ContactResource`
   *
   * @throws {@link Contacts.ContactsUpdateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsUpdate(
    request: Contacts.ContactsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactResource, Contacts.ContactsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateContactRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: Contacts.ContactsUpdateError,
      },
      options,
    );
  }
}

export namespace Contacts {
  export type ContactRestoreRequest = {
    /** The contact ID */
    contact: number;
  };

  export class ContactRestoreError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactRestoreError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type ContactsDestroyRequest = {
    /** The contact ID */
    contact: number;
  };

  export class ContactsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsDestroyError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type ContactsIndexRequest = {
    type?: ContactType;
    createdAfter?: Date | null;
    createdBefore?: Date | null;
    updatedAfter?: Date | null;
    updatedBefore?: Date | null;
    totalContributionsMin?: number | null;
    totalContributionsMax?: number | null;
    recurringContributionsMin?: number | null;
    recurringContributionsMax?: number | null;
    tags?: string | null;
    sortBy?: SortBy | null;
    sortByDesc?: SortByDesc | null;
    email?: string | null;
    primaryEmail?: string | null;
    firstName?: string | null;
    lastName?: string | null;
  };

  export const contactsIndexRequestSchema: Schema<ContactsIndexRequest> = s.lazySchema(() =>
    s.object<ContactsIndexRequest>({
      type: s.optional(s.lazy(() => contactTypeSchema)),
      createdAfter: s.optionalNullable(s.dateTime()),
      createdBefore: s.optionalNullable(s.dateTime()),
      updatedAfter: s.optionalNullable(s.dateTime()),
      updatedBefore: s.optionalNullable(s.dateTime()),
      totalContributionsMin: s.optionalNullable(s.float64()),
      totalContributionsMax: s.optionalNullable(s.float64()),
      recurringContributionsMin: s.optionalNullable(s.float64()),
      recurringContributionsMax: s.optionalNullable(s.float64()),
      tags: s.optionalNullable(s.string()),
      sortBy: s.optionalNullable(s.lazy(() => sortBySchema)),
      sortByDesc: s.optionalNullable(s.lazy(() => sortByDescSchema)),
      email: s.optionalNullable(s.string()),
      primaryEmail: s.optionalNullable(s.string()),
      firstName: s.optionalNullable(s.string().check(s.maxLength(1000))),
      lastName: s.optionalNullable(s.string().check(s.maxLength(1000))),
    }),
  );

  export class ContactsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"validationException1", ValidationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsIndexError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type ContactsShowRequest = {
    /** The contact ID */
    contact: number;
  };

  export class ContactsShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsShowError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type ContactsStoreRequest = {
    body?: V1ContactsRequest;
  };

  export class ContactsStoreError extends ApiError {
    declare readonly payload: Declared<"validationException1", ValidationException1> | Undeclared;

    static readonly errors: ErrorDecoders<ContactsStoreError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type ContactsUpdateRequest = {
    /** The contact ID */
    contact: number;
    body?: UpdateContactRequest;
  };

  export class ContactsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsUpdateError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }
}

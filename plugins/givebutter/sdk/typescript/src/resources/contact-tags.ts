import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import { contactResourceSchema, type ContactResource } from "../models/contact-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  v1ContactsTagsAddRequestInternalSchema,
  type V1ContactsTagsAddRequest,
} from "../models/v1-contacts-tags-add-request.js";
import {
  v1ContactsTagsRemoveRequestInternalSchema,
  type V1ContactsTagsRemoveRequest,
} from "../models/v1-contacts-tags-remove-request.js";
import {
  v1ContactsTagsSyncRequestInternalSchema,
  type V1ContactsTagsSyncRequest,
} from "../models/v1-contacts-tags-sync-request.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class ContactTags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove tags from a contact
   *
   * @returns `ContactResource`
   *
   * @throws {@link ContactTags.ContactTagDestroyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactTagDestroy(
    request: ContactTags.ContactTagDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactResource, ContactTags.ContactTagDestroyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/tags/remove"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ContactsTagsRemoveRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: ContactTags.ContactTagDestroyError,
      },
      options,
    );
  }

  /**
   * Add tags to a contact
   *
   * @returns `ContactResource`
   *
   * @throws {@link ContactTags.ContactTagStoreError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactTagStore(
    request: ContactTags.ContactTagStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactResource, ContactTags.ContactTagStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/tags/add"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ContactsTagsAddRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: ContactTags.ContactTagStoreError,
      },
      options,
    );
  }

  /**
   * Sync tags for a contact
   *
   * @returns `ContactResource`
   *
   * @throws {@link ContactTags.ContactTagSyncError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactTagSync(
    request: ContactTags.ContactTagSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactResource, ContactTags.ContactTagSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/tags/sync"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ContactsTagsSyncRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactResourceSchema },
        errorFactory: ContactTags.ContactTagSyncError,
      },
      options,
    );
  }
}

export namespace ContactTags {
  export type ContactTagDestroyRequest = {
    /** The contact ID */
    contact: number;
    body: V1ContactsTagsRemoveRequest;
  };

  export class ContactTagDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactTagDestroyError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
    ];
  }

  export type ContactTagStoreRequest = {
    /** The contact ID */
    contact: number;
    body: V1ContactsTagsAddRequest;
  };

  export class ContactTagStoreError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactTagStoreError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
    ];
  }

  export type ContactTagSyncRequest = {
    /** The contact ID */
    contact: number;
    body: V1ContactsTagsSyncRequest;
  };

  export class ContactTagSyncError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactTagSyncError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
    ];
  }
}

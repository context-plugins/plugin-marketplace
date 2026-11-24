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
import {
  contactActivityResourceInternalSchema,
  type ContactActivityResource,
} from "../models/contact-activity-resource.js";
import {
  contactActivityTypeEnumSchema,
  type ContactActivityTypeEnum,
} from "../models/contact-activity-type-enum.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  storeContactActivityRequestInternalSchema,
  type StoreContactActivityRequest,
} from "../models/store-contact-activity-request.js";
import {
  v1ContactsActivitiesResponseInternalSchema,
  type V1ContactsActivitiesResponse,
} from "../models/v1-contacts-activities-response.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class ContactActivities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a contact activity
   *
   * @returns No content
   *
   * @throws {@link ContactActivities.ContactsActivitiesDestroyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsActivitiesDestroy(
    request: ContactActivities.ContactsActivitiesDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ContactActivities.ContactsActivitiesDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/activities/{activity}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "contact", value: request.contact, schema: s.int() },
          { name: "activity", value: request.activity, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ContactActivities.ContactsActivitiesDestroyError,
      },
      options,
    );
  }

  /**
   * List all contact activities
   *
   * @returns Paginated set of `ContactActivityResource`
   *
   * @throws {@link ContactActivities.ContactsActivitiesIndexError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsActivitiesIndex(
    request: ContactActivities.ContactsActivitiesIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ContactsActivitiesResponse, ContactActivities.ContactsActivitiesIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/activities"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [
          {
            name: "type",
            value: request.type,
            schema: s.optional(s.lazy(() => contactActivityTypeEnumSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1ContactsActivitiesResponseInternalSchema },
        errorFactory: ContactActivities.ContactsActivitiesIndexError,
      },
      options,
    );
  }

  /**
   * Get a contact activity
   *
   * @returns `ContactActivityResource`
   *
   * @throws {@link ContactActivities.ContactsActivitiesShowError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsActivitiesShow(
    request: ContactActivities.ContactsActivitiesShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactActivityResource, ContactActivities.ContactsActivitiesShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/activities/{activity}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "contact", value: request.contact, schema: s.int() },
          { name: "activity", value: request.activity, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactActivityResourceInternalSchema },
        errorFactory: ContactActivities.ContactsActivitiesShowError,
      },
      options,
    );
  }

  /**
   * Create a contact activity
   *
   * @returns `ContactActivityResource`
   *
   * @throws {@link ContactActivities.ContactsActivitiesStoreError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsActivitiesStore(
    request: ContactActivities.ContactsActivitiesStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactActivityResource, ContactActivities.ContactsActivitiesStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/activities"),
        auth: this.#auth.http,
        pathParams: [{ name: "contact", value: request.contact, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: storeContactActivityRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactActivityResourceInternalSchema },
        errorFactory: ContactActivities.ContactsActivitiesStoreError,
      },
      options,
    );
  }

  /**
   * Update a contact activity
   *
   * @returns `ContactActivityResource`
   *
   * @throws {@link ContactActivities.ContactsActivitiesUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  contactsActivitiesUpdate(
    request: ContactActivities.ContactsActivitiesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactActivityResource, ContactActivities.ContactsActivitiesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/contacts/{contact}/activities/{activity}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "contact", value: request.contact, schema: s.int() },
          { name: "activity", value: request.activity, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactActivityResourceInternalSchema },
        errorFactory: ContactActivities.ContactsActivitiesUpdateError,
      },
      options,
    );
  }
}

export namespace ContactActivities {
  export type ContactsActivitiesDestroyRequest = {
    /** The contact ID */
    contact: number;
    /** The activity ID */
    activity: number;
  };

  export class ContactsActivitiesDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsActivitiesDestroyError> = [
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

  export type ContactsActivitiesIndexRequest = {
    /** The contact ID */
    contact: number;
    type?: ContactActivityTypeEnum;
  };

  export class ContactsActivitiesIndexError extends ApiError {
    declare readonly payload:
      | Declared<"validationException1", ValidationException1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsActivitiesIndexError> = [
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
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

  export type ContactsActivitiesShowRequest = {
    /** The contact ID */
    contact: number;
    /** The activity ID */
    activity: number;
  };

  export class ContactsActivitiesShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsActivitiesShowError> = [
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

  export type ContactsActivitiesStoreRequest = {
    /** The contact ID */
    contact: number;
    body: StoreContactActivityRequest;
  };

  export class ContactsActivitiesStoreError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsActivitiesStoreError> = [
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

  export type ContactsActivitiesUpdateRequest = {
    /** The contact ID */
    contact: number;
    /** The activity ID */
    activity: number;
  };

  export class ContactsActivitiesUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"validationException1", ValidationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ContactsActivitiesUpdateError> = [
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

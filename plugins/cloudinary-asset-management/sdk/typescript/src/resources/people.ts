import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { directionEnumSchema, type DirectionEnum } from "../models/direction-enum.js";
import { NameStatus, nameStatusSchema } from "../models/name-status.js";
import { peopleInspectRequestSchema, type PeopleInspectRequest } from "../models/people-inspect-request.js";
import {
  peopleInspectResponseSchema,
  type PeopleInspectResponse,
} from "../models/people-inspect-response.js";
import { peopleListResponseSchema, type PeopleListResponse } from "../models/people-list-response.js";
import { personResponseSchema, type PersonResponse } from "../models/person-response.js";
import { personStatusSchema, type PersonStatus } from "../models/person-status.js";
import { SortBy1, sortBy1Schema } from "../models/sort-by1.js";
import { updatePersonRequestSchema, type UpdatePersonRequest } from "../models/update-person-request.js";
import { updatePersonResponseSchema, type UpdatePersonResponse } from "../models/update-person-response.js";
import type { Servers } from "../servers.js";

/**
 * APIs for accessing and managing face recognition results.
 */
export class People {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get person details
   *
   * @remarks
   * Returns details of a specific recognized person. People Search must be enabled for this product
   * environment.
   *
   * @returns Person retrieved successfully
   *
   * @throws {@link People.GetPersonError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getPerson(
    request: People.GetPersonRequest,
    options?: RequestOptions,
  ): ApiPromise<PersonResponse, People.GetPersonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/people/{person_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "person_id", value: request.personId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: personResponseSchema },
        errorFactory: People.GetPersonError,
      },
      options,
    );
  }

  /**
   * Inspect the caller's permitted actions on people
   *
   * @remarks
   * Returns, for each requested person and action, whether the authenticated caller is permitted to
   * perform that action.
   *
   * @returns The permission inspection results were successfully computed.
   *
   * @throws {@link People.InspectPeoplePermissionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  inspectPeoplePermissions(
    request: People.InspectPeoplePermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<PeopleInspectResponse, People.InspectPeoplePermissionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/people/inspect"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: peopleInspectRequestSchema },
      },
      {
        success: { kind: "json", schema: peopleInspectResponseSchema },
        errorFactory: People.InspectPeoplePermissionsError,
      },
      options,
    );
  }

  /**
   * List recognized people
   *
   * @remarks
   * Returns a list of all recognized people in your product environment. People Search must be
   * enabled for this product environment.
   *
   * @returns People retrieved successfully
   *
   * @throws {@link People.ListPeopleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listPeople(
    request: People.ListPeopleRequest,
    options?: RequestOptions,
  ): ApiPromise<PeopleListResponse, People.ListPeopleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/people"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [
          { name: "max_results", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "next_cursor", value: request.nextCursor, schema: s.optional(s.string()) },
          {
            name: "name_status",
            value: request.nameStatus,
            schema: s.defaulted(nameStatusSchema, NameStatus.All),
          },
          { name: "name_prefix", value: request.namePrefix, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => personStatusSchema)) },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(sortBy1Schema, SortBy1.Name) },
          {
            name: "direction",
            value: request.direction,
            schema: s.optional(s.lazy(() => directionEnumSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: peopleListResponseSchema },
        errorFactory: People.ListPeopleError,
      },
      options,
    );
  }

  /**
   * Update a person
   *
   * @remarks
   * Updates a recognized person's name, status, or thumbnail image. At least one of name, status,
   * or thumbnail_asset_id must be provided. People Search must be enabled for this product
   * environment.
   *
   * @returns Person updated successfully
   *
   * @throws {@link People.UpdatePersonError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  updatePerson(
    request: People.UpdatePersonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdatePersonResponse, People.UpdatePersonError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/people/{person_id}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "person_id", value: request.personId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updatePersonRequestSchema },
      },
      {
        success: { kind: "json", schema: updatePersonResponseSchema },
        errorFactory: People.UpdatePersonError,
      },
      options,
    );
  }
}

export namespace People {
  export type GetPersonRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The unique identifier of the person. */
    personId: string;
  };

  export class GetPersonError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPersonError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type InspectPeoplePermissionsRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The people and actions to inspect. */
    body: PeopleInspectRequest;
  };

  export class InspectPeoplePermissionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<InspectPeoplePermissionsError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type ListPeopleRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The maximum number of people to return. Default: 50. @default 50 */
    maxResults?: number;
    /**
     * The cursor for pagination. Use the next_cursor value from a previous response to get the next
     * page of results.
     */
    nextCursor?: string;
    /** Filter by whether the person has been named. Default: all. @default NameStatus.All */
    nameStatus?: NameStatus;
    /** Filter people whose names start with the given prefix (case insensitive). */
    namePrefix?: string;
    /** Filter by person status. */
    status?: PersonStatus;
    /** The field to sort results by. Default: name (ascending). @default SortBy1.Name */
    sortBy?: SortBy1;
    /** The sort direction for the results. Default is "desc". */
    direction?: DirectionEnum;
  };

  export class ListPeopleError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListPeopleError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type UpdatePersonRequestParams = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The unique identifier of the person. */
    personId: string;
    /** The updated person attributes. */
    body: UpdatePersonRequest;
  };

  export class UpdatePersonError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdatePersonError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}

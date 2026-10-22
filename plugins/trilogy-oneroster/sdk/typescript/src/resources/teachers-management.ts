import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestResponseSchema, type BadRequestResponse } from "../models/bad-request-response.js";
import { forbiddenResponseSchema, type ForbiddenResponse } from "../models/forbidden-response.js";
import {
  imsOnerosterRosteringV1P2ClassesTeachersRequestSchema,
  type ImsOnerosterRosteringV1P2ClassesTeachersRequest,
} from "../models/ims-oneroster-rostering-v1-p2-classes-teachers-request.js";
import {
  imsOnerosterRosteringV1P2ClassesTeachersResponseSchema,
  type ImsOnerosterRosteringV1P2ClassesTeachersResponse,
} from "../models/ims-oneroster-rostering-v1-p2-classes-teachers-response.js";
import {
  imsOnerosterRosteringV1P2ClassesTeachersResponse1Schema,
  type ImsOnerosterRosteringV1P2ClassesTeachersResponse1,
} from "../models/ims-oneroster-rostering-v1-p2-classes-teachers-response1.js";
import {
  imsOnerosterRosteringV1P2SchoolsClassesTeachersResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse,
} from "../models/ims-oneroster-rostering-v1-p2-schools-classes-teachers-response.js";
import {
  imsOnerosterRosteringV1P2SchoolsTeachersResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsTeachersResponse,
} from "../models/ims-oneroster-rostering-v1-p2-schools-teachers-response.js";
import {
  imsOnerosterRosteringV1P2TeachersClassesResponseSchema,
  type ImsOnerosterRosteringV1P2TeachersClassesResponse,
} from "../models/ims-oneroster-rostering-v1-p2-teachers-classes-response.js";
import {
  imsOnerosterRosteringV1P2TeachersResponseSchema,
  type ImsOnerosterRosteringV1P2TeachersResponse,
} from "../models/ims-oneroster-rostering-v1-p2-teachers-response.js";
import {
  imsOnerosterRosteringV1P2TeachersResponse1Schema,
  type ImsOnerosterRosteringV1P2TeachersResponse1,
} from "../models/ims-oneroster-rostering-v1-p2-teachers-response1.js";
import {
  internalServerErrorResponseSchema,
  type InternalServerErrorResponse,
} from "../models/internal-server-error-response.js";
import { notFoundResponseSchema, type NotFoundResponse } from "../models/not-found-response.js";
import { orderBySchema, type OrderBy } from "../models/order-by.js";
import {
  tooManyRequestsResponseSchema,
  type TooManyRequestsResponse,
} from "../models/too-many-requests-response.js";
import {
  unauthorizedRequestResponseSchema,
  type UnauthorizedRequestResponse,
} from "../models/unauthorized-request-response.js";
import {
  unprocessableEntityResponseSchema,
  type UnprocessableEntityResponse,
} from "../models/unprocessable-entity-response.js";
import type { Servers } from "../servers.js";

/**
 * This enables the management of information about teachers (a teacher is a type of 'user').
 */
export class TeachersManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a teacher to a Class
   *
   * @remarks
   * Enrolls a teacher to a specific Class. The responding system must return the set of sourcedIds
   * that have been allocated to the newly created enrollment record.
   *
   * @returns Teacher successfully assigned to class
   *
   * @throws {@link TeachersManagement.AddTeacherToClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTeacherToClass(
    request: TeachersManagement.AddTeacherToClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2ClassesTeachersResponse1,
    TeachersManagement.AddTeacherToClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/{classSourcedId}/teachers"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "classSourcedId", value: request.classSourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2ClassesTeachersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2ClassesTeachersResponse1Schema },
        errorFactory: TeachersManagement.AddTeacherToClassError,
      },
      options,
    );
  }

  /**
   * Get all Teachers
   *
   * @remarks
   * To get all Teachers on the service provider.
   *
   * @returns Successful response containing a collection of teachers
   *
   * @throws {@link TeachersManagement.GetAllTeachersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllTeachers(
    request: TeachersManagement.GetAllTeachersRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2TeachersResponse, TeachersManagement.GetAllTeachersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/teachers/"),
        auth: this.#auth.oAuth2,
        pathParams: [],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.lazy(() => orderBySchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2TeachersResponseSchema },
        errorFactory: TeachersManagement.GetAllTeachersError,
      },
      options,
    );
  }

  /**
   * Get Classes for a Teacher
   *
   * @remarks
   * To get the set of Classes a Teacher is enrolled in. If the specified teacher cannot be
   * identified within the service provider, the api will return a 404 error code and message
   * 'Teacher not found.'
   *
   * @returns Successful response containing a collection of classes for the teacher
   *
   * @throws {@link TeachersManagement.GetClassesForTeacherError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassesForTeacher(
    request: TeachersManagement.GetClassesForTeacherRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2TeachersClassesResponse,
    TeachersManagement.GetClassesForTeacherError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/rostering/v1p2/teachers/{teacherSourcedId}/classes",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "teacherSourcedId", value: request.teacherSourcedId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.lazy(() => orderBySchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2TeachersClassesResponseSchema },
        errorFactory: TeachersManagement.GetClassesForTeacherError,
      },
      options,
    );
  }

  /**
   * Get a specific Teacher
   *
   * @remarks
   * To get a specific Teacher on the service provider. If the corresponding record cannot be
   * located, the api will return a 404 error code and message 'Teacher not found.'
   *
   * @returns Successful response with the teacher
   *
   * @throws {@link TeachersManagement.GetTeacherError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeacher(
    request: TeachersManagement.GetTeacherRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2TeachersResponse1, TeachersManagement.GetTeacherError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/teachers/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2TeachersResponse1Schema },
        errorFactory: TeachersManagement.GetTeacherError,
      },
      options,
    );
  }

  /**
   * Get teachers for a Class
   *
   * @remarks
   * To get all teachers assigned to a specific Class. If the corresponding record cannot be
   * located, the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Successful response with the list of teachers
   *
   * @throws {@link TeachersManagement.GetTeachersForClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeachersForClass(
    request: TeachersManagement.GetTeachersForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2ClassesTeachersResponse,
    TeachersManagement.GetTeachersForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/{classSourcedId}/teachers"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "classSourcedId", value: request.classSourcedId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.lazy(() => orderBySchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2ClassesTeachersResponseSchema },
        errorFactory: TeachersManagement.GetTeachersForClassError,
      },
      options,
    );
  }

  /**
   * Get Teachers for a specific Class in a School
   *
   * @remarks
   * To get all Teachers for a Class in a School on the service provider. If the specified school
   * and/or class cannot be identified within the service provider, the api will return a 404 error
   * code and message 'School or class not found.'
   *
   * @returns Collection of teachers successfully retrieved
   *
   * @throws {@link TeachersManagement.GetTeachersForClassInSchoolError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeachersForClassInSchool(
    request: TeachersManagement.GetTeachersForClassInSchoolRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2SchoolsClassesTeachersResponse,
    TeachersManagement.GetTeachersForClassInSchoolError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/rostering/v1p2/schools/{schoolSourcedId}/classes/{classSourcedId}/teachers",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [
          { name: "schoolSourcedId", value: request.schoolSourcedId, schema: s.string() },
          { name: "classSourcedId", value: request.classSourcedId, schema: s.string() },
        ],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.lazy(() => orderBySchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2SchoolsClassesTeachersResponseSchema },
        errorFactory: TeachersManagement.GetTeachersForClassInSchoolError,
      },
      options,
    );
  }

  /**
   * Get all teachers for a school
   *
   * @remarks
   * To get all Teachers for a School on the service provider. If the specified school cannot be
   * identified within the service provider, the api will return a 404 error code and message
   * 'School not found.'
   *
   * @returns Collection of teachers successfully retrieved
   *
   * @throws {@link TeachersManagement.GetTeachersForSchoolError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeachersForSchool(
    request: TeachersManagement.GetTeachersForSchoolRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2SchoolsTeachersResponse,
    TeachersManagement.GetTeachersForSchoolError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/rostering/v1p2/schools/{schoolSourcedId}/teachers",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "schoolSourcedId", value: request.schoolSourcedId, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 100) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.lazy(() => orderBySchema)) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2SchoolsTeachersResponseSchema },
        errorFactory: TeachersManagement.GetTeachersForSchoolError,
      },
      options,
    );
  }
}

export namespace TeachersManagement {
  export type AddTeacherToClassRequest = {
    /** Class sourcedId */
    classSourcedId: string;
    body?: ImsOnerosterRosteringV1P2ClassesTeachersRequest;
  };

  export class AddTeacherToClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddTeacherToClassError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetAllTeachersRequest = {
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** The maximum number of items to return in the paginated response @default 100 */
    limit?: number;
    /** The number of items to skip in the paginated response @default 0 */
    offset?: number;
    /** The field to sort the response by */
    sort?: string;
    /** The order to sort the response by */
    orderBy?: OrderBy;
    /** The filter to apply to the response */
    filter?: string;
    /** The search query to apply to the response */
    search?: string;
  };

  export class GetAllTeachersError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllTeachersError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetClassesForTeacherRequest = {
    /** The sourcedId of the teacher */
    teacherSourcedId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** The maximum number of items to return in the paginated response @default 100 */
    limit?: number;
    /** The number of items to skip in the paginated response @default 0 */
    offset?: number;
    /** The field to sort the response by */
    sort?: string;
    /** The order to sort the response by */
    orderBy?: OrderBy;
    /** The filter to apply to the response */
    filter?: string;
    /** The search query to apply to the response */
    search?: string;
  };

  export class GetClassesForTeacherError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassesForTeacherError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetTeacherRequest = {
    /** The sourcedId of the teacher */
    sourcedId: string;
  };

  export class GetTeacherError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeacherError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetTeachersForClassRequest = {
    /** Class sourcedId */
    classSourcedId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** The maximum number of items to return in the paginated response @default 100 */
    limit?: number;
    /** The number of items to skip in the paginated response @default 0 */
    offset?: number;
    /** The field to sort the response by */
    sort?: string;
    /** The order to sort the response by */
    orderBy?: OrderBy;
    /** The filter to apply to the response */
    filter?: string;
    /** The search query to apply to the response */
    search?: string;
  };

  export class GetTeachersForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeachersForClassError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetTeachersForClassInSchoolRequest = {
    /** School sourced ID */
    schoolSourcedId: string;
    /** Class sourced ID */
    classSourcedId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** The maximum number of items to return in the paginated response @default 100 */
    limit?: number;
    /** The number of items to skip in the paginated response @default 0 */
    offset?: number;
    /** The field to sort the response by */
    sort?: string;
    /** The order to sort the response by */
    orderBy?: OrderBy;
    /** The filter to apply to the response */
    filter?: string;
    /** The search query to apply to the response */
    search?: string;
  };

  export class GetTeachersForClassInSchoolError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeachersForClassInSchoolError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }

  export type GetTeachersForSchoolRequest = {
    /** School sourced ID */
    schoolSourcedId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
    /** The maximum number of items to return in the paginated response @default 100 */
    limit?: number;
    /** The number of items to skip in the paginated response @default 0 */
    offset?: number;
    /** The field to sort the response by */
    sort?: string;
    /** The order to sort the response by */
    orderBy?: OrderBy;
    /** The filter to apply to the response */
    filter?: string;
    /** The search query to apply to the response */
    search?: string;
  };

  export class GetTeachersForSchoolError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTeachersForSchoolError> = [
      { on: 400, kind: "badRequestResponse", decode: { kind: "json", schema: badRequestResponseSchema } },
      {
        on: 401,
        kind: "unauthorizedRequestResponse",
        decode: { kind: "json", schema: unauthorizedRequestResponseSchema },
      },
      { on: 403, kind: "forbiddenResponse", decode: { kind: "json", schema: forbiddenResponseSchema } },
      { on: 404, kind: "notFoundResponse", decode: { kind: "json", schema: notFoundResponseSchema } },
      {
        on: 422,
        kind: "unprocessableEntityResponse",
        decode: { kind: "json", schema: unprocessableEntityResponseSchema },
      },
      {
        on: 429,
        kind: "tooManyRequestsResponse",
        decode: { kind: "json", schema: tooManyRequestsResponseSchema },
      },
      {
        on: 500,
        kind: "internalServerErrorResponse",
        decode: { kind: "json", schema: internalServerErrorResponseSchema },
      },
    ];
  }
}

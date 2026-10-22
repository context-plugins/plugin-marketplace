import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { badRequestResponseSchema, type BadRequestResponse } from "../models/bad-request-response.js";
import { classSchema, type Class } from "../models/class.js";
import { forbiddenResponseSchema, type ForbiddenResponse } from "../models/forbidden-response.js";
import {
  imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequestSchema,
  type ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-request.js";
import {
  imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-academic-sessions-results-response.js";
import {
  imsOnerosterGradebookV1P2ClassesCategoriesResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesCategoriesResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-categories-response.js";
import {
  imsOnerosterGradebookV1P2ClassesLineItemsRequestSchema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsRequest,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-line-items-request.js";
import {
  imsOnerosterGradebookV1P2ClassesLineItemsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-line-items-response.js";
import {
  imsOnerosterGradebookV1P2ClassesLineItemsResponse1Schema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsResponse1,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-line-items-response1.js";
import {
  imsOnerosterGradebookV1P2ClassesLineItemsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-line-items-results-response.js";
import {
  imsOnerosterGradebookV1P2ClassesResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesResultsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-results-response.js";
import {
  imsOnerosterGradebookV1P2ClassesScoreScalesResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesScoreScalesResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-score-scales-response.js";
import {
  imsOnerosterGradebookV1P2ClassesStudentsResultsResponseSchema,
  type ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse,
} from "../models/ims-oneroster-gradebook-v1-p2-classes-students-results-response.js";
import {
  imsOnerosterRosteringV1P2ClassesRequestSchema,
  type ImsOnerosterRosteringV1P2ClassesRequest,
} from "../models/ims-oneroster-rostering-v1-p2-classes-request.js";
import {
  imsOnerosterRosteringV1P2ClassesRequest1Schema,
  type ImsOnerosterRosteringV1P2ClassesRequest1,
} from "../models/ims-oneroster-rostering-v1-p2-classes-request1.js";
import {
  imsOnerosterRosteringV1P2ClassesResponseSchema,
  type ImsOnerosterRosteringV1P2ClassesResponse,
} from "../models/ims-oneroster-rostering-v1-p2-classes-response.js";
import {
  imsOnerosterRosteringV1P2ClassesResponse1Schema,
  type ImsOnerosterRosteringV1P2ClassesResponse1,
} from "../models/ims-oneroster-rostering-v1-p2-classes-response1.js";
import {
  imsOnerosterRosteringV1P2ClassesResponse2Schema,
  type ImsOnerosterRosteringV1P2ClassesResponse2,
} from "../models/ims-oneroster-rostering-v1-p2-classes-response2.js";
import {
  imsOnerosterRosteringV1P2ClassesStudentsRequestSchema,
  type ImsOnerosterRosteringV1P2ClassesStudentsRequest,
} from "../models/ims-oneroster-rostering-v1-p2-classes-students-request.js";
import {
  imsOnerosterRosteringV1P2ClassesStudentsResponseSchema,
  type ImsOnerosterRosteringV1P2ClassesStudentsResponse,
} from "../models/ims-oneroster-rostering-v1-p2-classes-students-response.js";
import {
  imsOnerosterRosteringV1P2ClassesStudentsResponse1Schema,
  type ImsOnerosterRosteringV1P2ClassesStudentsResponse1,
} from "../models/ims-oneroster-rostering-v1-p2-classes-students-response1.js";
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
  imsOnerosterRosteringV1P2SchoolsClassesResponseSchema,
  type ImsOnerosterRosteringV1P2SchoolsClassesResponse,
} from "../models/ims-oneroster-rostering-v1-p2-schools-classes-response.js";
import {
  imsOnerosterRosteringV1P2StudentsClassesResponseSchema,
  type ImsOnerosterRosteringV1P2StudentsClassesResponse,
} from "../models/ims-oneroster-rostering-v1-p2-students-classes-response.js";
import {
  imsOnerosterRosteringV1P2TeachersClassesResponseSchema,
  type ImsOnerosterRosteringV1P2TeachersClassesResponse,
} from "../models/ims-oneroster-rostering-v1-p2-teachers-classes-response.js";
import {
  imsOnerosterRosteringV1P2TermsClassesResponseSchema,
  type ImsOnerosterRosteringV1P2TermsClassesResponse,
} from "../models/ims-oneroster-rostering-v1-p2-terms-classes-response.js";
import {
  imsOnerosterRosteringV1P2UsersClassesResponseSchema,
  type ImsOnerosterRosteringV1P2UsersClassesResponse,
} from "../models/ims-oneroster-rostering-v1-p2-users-classes-response.js";
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
 * This enables the management of classes i.e. scheduled learning of courses, with respect to
 * academic sessions.
 */
export class ClassesManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a student to a Class
   *
   * @remarks
   * Enrolls a student in a specific Class. The responding system must return the set of sourcedIds
   * that have been allocated to the newly created enrollment record.
   *
   * @returns Student successfully enrolled in class
   *
   * @throws {@link ClassesManagement.AddStudentToClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addStudentToClass(
    request: ClassesManagement.AddStudentToClassRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2ClassesStudentsResponse1, ClassesManagement.AddStudentToClassError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/{classSourcedId}/students"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "classSourcedId", value: request.classSourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2ClassesStudentsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2ClassesStudentsResponse1Schema },
        errorFactory: ClassesManagement.AddStudentToClassError,
      },
      options,
    );
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
   * @throws {@link ClassesManagement.AddTeacherToClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addTeacherToClass(
    request: ClassesManagement.AddTeacherToClassRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2ClassesTeachersResponse1, ClassesManagement.AddTeacherToClassError> {
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
        errorFactory: ClassesManagement.AddTeacherToClassError,
      },
      options,
    );
  }

  /**
   * Create a new Class
   *
   * @remarks
   * To create a new Class. The responding system must return the set of sourcedIds that have been
   * allocated to the newly created class record.
   *
   * @returns Class successfully created
   *
   * @throws {@link ClassesManagement.CreateClassError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClass(
    request: ClassesManagement.CreateClassRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2ClassesResponse1, ClassesManagement.CreateClassError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/"),
        auth: this.#auth.oAuth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2ClassesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2ClassesResponse1Schema },
        errorFactory: ClassesManagement.CreateClassError,
      },
      options,
    );
  }

  /**
   * Delete a Class
   *
   * @remarks
   * Perform a soft delete on a specific Class on the service provider. This operation changes the
   * status of the Class to 'tobedeleted'.
   *
   * @returns Class successfully deleted
   *
   * @throws {@link ClassesManagement.DeleteClassError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteClass(
    request: ClassesManagement.DeleteClassRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ClassesManagement.DeleteClassError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ClassesManagement.DeleteClassError,
      },
      options,
    );
  }

  /**
   * Get all Classes
   *
   * @remarks
   * To get all Classes on the service provider.
   *
   * @returns Successful response with a list of classes
   *
   * @throws {@link ClassesManagement.GetAllClassesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllClasses(
    request: ClassesManagement.GetAllClassesRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2ClassesResponse, ClassesManagement.GetAllClassesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/"),
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2ClassesResponseSchema },
        errorFactory: ClassesManagement.GetAllClassesError,
      },
      options,
    );
  }

  /**
   * Get Categories for a Class
   *
   * @remarks
   * Get the set of categories on the service provider for a specific class. If the corresponding
   * record cannot be located, the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Successful response containing a collection of categories for the class
   *
   * @throws {@link ClassesManagement.GetCategoriesForClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCategoriesForClass(
    request: ClassesManagement.GetCategoriesForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2ClassesCategoriesResponse,
    ClassesManagement.GetCategoriesForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/classes/{sourcedId}/categories"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2ClassesCategoriesResponseSchema },
        errorFactory: ClassesManagement.GetCategoriesForClassError,
      },
      options,
    );
  }

  /**
   * Get a specific class
   *
   * @remarks
   * Get a specific Class on the service provider. If the corresponding record cannot be located,
   * the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Successful response with the requested class
   *
   * @throws {@link ClassesManagement.GetClassError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClass(
    request: ClassesManagement.GetClassRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2ClassesResponse2, ClassesManagement.GetClassError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imsOnerosterRosteringV1P2ClassesResponse2Schema },
        errorFactory: ClassesManagement.GetClassError,
      },
      options,
    );
  }

  /**
   * Get all Classes for a School
   *
   * @remarks
   * To get all Classes for a School on the service provider. If the specified school cannot be
   * identified within the service provider, the api will return a 404 error code and message
   * 'School not found.'
   *
   * @returns Collection of classes successfully retrieved
   *
   * @throws {@link ClassesManagement.GetClassesForSchoolError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassesForSchool(
    request: ClassesManagement.GetClassesForSchoolRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2SchoolsClassesResponse, ClassesManagement.GetClassesForSchoolError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/schools/{schoolSourcedId}/classes"),
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2SchoolsClassesResponseSchema },
        errorFactory: ClassesManagement.GetClassesForSchoolError,
      },
      options,
    );
  }

  /**
   * Get Classes for a Student
   *
   * @remarks
   * To get the set of Classes related to a specific Student. If the specified student cannot be
   * identified within the service provider, the api will return a 404 error code and message
   * 'Student not found.'
   *
   * @returns Successful response containing a collection of classes for the student
   *
   * @throws {@link ClassesManagement.GetClassesForStudentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassesForStudent(
    request: ClassesManagement.GetClassesForStudentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2StudentsClassesResponse,
    ClassesManagement.GetClassesForStudentError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/rostering/v1p2/students/{studentSourcedId}/classes",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "studentSourcedId", value: request.studentSourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2StudentsClassesResponseSchema },
        errorFactory: ClassesManagement.GetClassesForStudentError,
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
   * @throws {@link ClassesManagement.GetClassesForTeacherError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassesForTeacher(
    request: ClassesManagement.GetClassesForTeacherRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2TeachersClassesResponse,
    ClassesManagement.GetClassesForTeacherError
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
        errorFactory: ClassesManagement.GetClassesForTeacherError,
      },
      options,
    );
  }

  /**
   * Get Classes for a Term
   *
   * @remarks
   * To get the set of Classes related to a specific Term. If the specified term cannot be
   * identified within the service provider, the api will return a 404 error code and message 'Term
   * not found.'
   *
   * @returns Successful response containing a collection of classes for the term
   *
   * @throws {@link ClassesManagement.GetClassesForTermError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassesForTerm(
    request: ClassesManagement.GetClassesForTermRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2TermsClassesResponse, ClassesManagement.GetClassesForTermError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/terms/{termSourcedId}/classes"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "termSourcedId", value: request.termSourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2TermsClassesResponseSchema },
        errorFactory: ClassesManagement.GetClassesForTermError,
      },
      options,
    );
  }

  /**
   * Get Classes for a User
   *
   * @remarks
   * To get the set of Classes a User is enrolled in.
   *
   * @returns Successful response containing a collection of classes for the user
   *
   * @throws {@link ClassesManagement.GetClassesForUserError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassesForUser(
    request: ClassesManagement.GetClassesForUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterRosteringV1P2UsersClassesResponse, ClassesManagement.GetClassesForUserError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/users/{userSourcedId}/classes"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "userSourcedId", value: request.userSourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2UsersClassesResponseSchema },
        errorFactory: ClassesManagement.GetClassesForUserError,
      },
      options,
    );
  }

  /**
   * Get Line Items for a Class
   *
   * @remarks
   * Get the set of lineItems on the service provider for a specific class. If the corresponding
   * record cannot be located, the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Successful response containing a collection of line items for the class
   *
   * @throws {@link ClassesManagement.GetLineItemsForClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLineItemsForClass(
    request: ClassesManagement.GetLineItemsForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2ClassesLineItemsResponse1,
    ClassesManagement.GetLineItemsForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/classes/{sourcedId}/lineItems"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2ClassesLineItemsResponse1Schema },
        errorFactory: ClassesManagement.GetLineItemsForClassError,
      },
      options,
    );
  }

  /**
   * Get Results for a Class
   *
   * @remarks
   * Get the set of results on the service provider for a specific class. If the corresponding
   * record cannot be located, the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Successful response containing a collection of results for the class
   *
   * @throws {@link ClassesManagement.GetResultsForClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResultsForClass(
    request: ClassesManagement.GetResultsForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<ImsOnerosterGradebookV1P2ClassesResultsResponse, ClassesManagement.GetResultsForClassError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/classes/{sourcedId}/results"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2ClassesResultsResponseSchema },
        errorFactory: ClassesManagement.GetResultsForClassError,
      },
      options,
    );
  }

  /**
   * Get Results for a Line Item for a Class
   *
   * @remarks
   * Get the set of results on the service provider for a specific lineItem and for a specific
   * class. If the corresponding record cannot be located, the api will return a 404 error code and
   * message 'Class or line item not found.'
   *
   * @returns Successful response containing a collection of results for the specified line item in
   * the class
   *
   * @throws {@link ClassesManagement.GetResultsForLineItemForClassError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResultsForLineItemForClass(
    request: ClassesManagement.GetResultsForLineItemForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse,
    ClassesManagement.GetResultsForLineItemForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/lineItems/{lineItemSourcedId}/results",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [
          { name: "classSourcedId", value: request.classSourcedId, schema: s.string() },
          { name: "lineItemSourcedId", value: request.lineItemSourcedId, schema: s.string() },
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2ClassesLineItemsResultsResponseSchema },
        errorFactory: ClassesManagement.GetResultsForLineItemForClassError,
      },
      options,
    );
  }

  /**
   * Get Results for a Student for a Class
   *
   * @remarks
   * Get the set of results on the service provider for a specific student and for a specific class.
   * If the corresponding record cannot be located, the api will return a 404 error code and message
   * 'Class or student not found.'
   *
   * @returns Successful response containing a collection of results for the specified student in
   * the class
   *
   * @throws {@link ClassesManagement.GetResultsForStudentForClassError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getResultsForStudentForClass(
    request: ClassesManagement.GetResultsForStudentForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2ClassesStudentsResultsResponse,
    ClassesManagement.GetResultsForStudentForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/students/{studentSourcedId}/results",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [
          { name: "classSourcedId", value: request.classSourcedId, schema: s.string() },
          { name: "studentSourcedId", value: request.studentSourcedId, schema: s.string() },
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2ClassesStudentsResultsResponseSchema },
        errorFactory: ClassesManagement.GetResultsForStudentForClassError,
      },
      options,
    );
  }

  /**
   * Get Score Scales for a Class
   *
   * @remarks
   * Get the set of scoreScales on the service provider for a specific class. If the corresponding
   * record cannot be located, the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Successful response containing a collection of score scales for the class
   *
   * @throws {@link ClassesManagement.GetScoreScalesForClassError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScoreScalesForClass(
    request: ClassesManagement.GetScoreScalesForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2ClassesScoreScalesResponse,
    ClassesManagement.GetScoreScalesForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/gradebook/v1p2/classes/{sourcedId}/scoreScales"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
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
        success: { kind: "json", schema: imsOnerosterGradebookV1P2ClassesScoreScalesResponseSchema },
        errorFactory: ClassesManagement.GetScoreScalesForClassError,
      },
      options,
    );
  }

  /**
   * Get students for a Class
   *
   * @remarks
   * To get all students enrolled in a specific Class. If the corresponding record cannot be
   * located, the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Successful response with the list of students
   *
   * @throws {@link ClassesManagement.GetStudentsForClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStudentsForClass(
    request: ClassesManagement.GetStudentsForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2ClassesStudentsResponse,
    ClassesManagement.GetStudentsForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/{classSourcedId}/students"),
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
        success: { kind: "json", schema: imsOnerosterRosteringV1P2ClassesStudentsResponseSchema },
        errorFactory: ClassesManagement.GetStudentsForClassError,
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
   * @throws {@link ClassesManagement.GetTeachersForClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTeachersForClass(
    request: ClassesManagement.GetTeachersForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterRosteringV1P2ClassesTeachersResponse,
    ClassesManagement.GetTeachersForClassError
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
        errorFactory: ClassesManagement.GetTeachersForClassError,
      },
      options,
    );
  }

  /**
   * Create Line Items for a Class
   *
   * @remarks
   * To create a set of lineItems for a specific class. The responding system must return the set of
   * sourcedIds that have been allocated to the newly created lineItem records. If the corresponding
   * record cannot be located, the api will return a 404 error code and message 'Class not found.'
   *
   * @returns Line item successfully created
   *
   * @throws {@link ClassesManagement.PostLineItemsForClassError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLineItemsForClass(
    request: ClassesManagement.PostLineItemsForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2ClassesLineItemsResponse,
    ClassesManagement.PostLineItemsForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/lineItems",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "classSourcedId", value: request.classSourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: imsOnerosterGradebookV1P2ClassesLineItemsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: imsOnerosterGradebookV1P2ClassesLineItemsResponseSchema },
        errorFactory: ClassesManagement.PostLineItemsForClassError,
      },
      options,
    );
  }

  /**
   * Create Results for an Academic Session for a Class
   *
   * @remarks
   * To create a set of results for a specific academic session and specific class. The responding
   * system must return the set of sourcedIds that have been allocated to the newly created result
   * records. If the corresponding record cannot be located, the api will return a 404 error code
   * and message 'Class or academic session not found.'
   *
   * @returns Results successfully created
   *
   * @throws {@link ClassesManagement.PostResultsForAcademicSessionForClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postResultsForAcademicSessionForClass(
    request: ClassesManagement.PostResultsForAcademicSessionForClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponse,
    ClassesManagement.PostResultsForAcademicSessionForClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/ims/oneroster/gradebook/v1p2/classes/{classSourcedId}/academicSessions/{academicSessionSourcedId}/results",
        ),
        auth: this.#auth.oAuth2,
        pathParams: [
          { name: "classSourcedId", value: request.classSourcedId, schema: s.string() },
          { name: "academicSessionSourcedId", value: request.academicSessionSourcedId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequestSchema,
        },
      },
      {
        success: {
          kind: "json",
          schema: imsOnerosterGradebookV1P2ClassesAcademicSessionsResultsResponseSchema,
        },
        errorFactory: ClassesManagement.PostResultsForAcademicSessionForClassError,
      },
      options,
    );
  }

  /**
   * Update a Class
   *
   * @remarks
   * To update an existing Class. The sourcedId for the record to be updated is supplied by the
   * requesting system.
   *
   * @returns Class successfully updated
   *
   * @throws {@link ClassesManagement.UpdateClassError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OneRosterApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClass(
    request: ClassesManagement.UpdateClassRequest,
    options?: RequestOptions,
  ): ApiPromise<Class, ClassesManagement.UpdateClassError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/ims/oneroster/rostering/v1p2/classes/{sourcedId}"),
        auth: this.#auth.oAuth2,
        pathParams: [{ name: "sourcedId", value: request.sourcedId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => imsOnerosterRosteringV1P2ClassesRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: classSchema },
        errorFactory: ClassesManagement.UpdateClassError,
      },
      options,
    );
  }
}

export namespace ClassesManagement {
  export type AddStudentToClassRequest = {
    /** Class sourcedId */
    classSourcedId: string;
    body?: ImsOnerosterRosteringV1P2ClassesStudentsRequest;
  };

  export class AddStudentToClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddStudentToClassError> = [
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

  export type CreateClassRequest = {
    body?: ImsOnerosterRosteringV1P2ClassesRequest;
  };

  export class CreateClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassError> = [
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

  export type DeleteClassRequest = {
    /** Class sourcedId */
    sourcedId: string;
  };

  export class DeleteClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteClassError> = [
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

  export type GetAllClassesRequest = {
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

  export class GetAllClassesError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllClassesError> = [
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

  export type GetCategoriesForClassRequest = {
    /** The sourcedId of the class */
    sourcedId: string;
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

  export class GetCategoriesForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCategoriesForClassError> = [
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

  export type GetClassRequest = {
    /** Class sourcedId */
    sourcedId: string;
  };

  export class GetClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassError> = [
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

  export type GetClassesForSchoolRequest = {
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

  export class GetClassesForSchoolError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassesForSchoolError> = [
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

  export type GetClassesForStudentRequest = {
    /** The sourcedId of the student */
    studentSourcedId: string;
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

  export class GetClassesForStudentError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassesForStudentError> = [
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

  export type GetClassesForTermRequest = {
    /** The sourcedId of the term */
    termSourcedId: string;
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

  export class GetClassesForTermError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassesForTermError> = [
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

  export type GetClassesForUserRequest = {
    /** The sourcedId of the user */
    userSourcedId: string;
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

  export class GetClassesForUserError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassesForUserError> = [
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

  export type GetLineItemsForClassRequest = {
    /** The sourcedId of the class */
    sourcedId: string;
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

  export class GetLineItemsForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLineItemsForClassError> = [
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

  export type GetResultsForClassRequest = {
    /** The sourcedId of the class */
    sourcedId: string;
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

  export class GetResultsForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResultsForClassError> = [
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

  export type GetResultsForLineItemForClassRequest = {
    /** The sourcedId of the class */
    classSourcedId: string;
    /** The sourcedId of the line item */
    lineItemSourcedId: string;
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

  export class GetResultsForLineItemForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResultsForLineItemForClassError> = [
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

  export type GetResultsForStudentForClassRequest = {
    /** The sourcedId of the class */
    classSourcedId: string;
    /** The sourcedId of the student */
    studentSourcedId: string;
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

  export class GetResultsForStudentForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetResultsForStudentForClassError> = [
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

  export type GetScoreScalesForClassRequest = {
    /** The sourcedId of the class */
    sourcedId: string;
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

  export class GetScoreScalesForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScoreScalesForClassError> = [
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

  export type GetStudentsForClassRequest = {
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

  export class GetStudentsForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStudentsForClassError> = [
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

  export type PostLineItemsForClassRequest = {
    /** The sourcedId of the class */
    classSourcedId: string;
    body: ImsOnerosterGradebookV1P2ClassesLineItemsRequest;
  };

  export class PostLineItemsForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostLineItemsForClassError> = [
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

  export type PostResultsForAcademicSessionForClassRequest = {
    /** The sourcedId of the class */
    classSourcedId: string;
    /** The sourcedId of the academic session */
    academicSessionSourcedId: string;
    body: ImsOnerosterGradebookV1P2ClassesAcademicSessionsResultsRequest;
  };

  export class PostResultsForAcademicSessionForClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostResultsForAcademicSessionForClassError> = [
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

  export type UpdateClassRequest = {
    /** Class sourcedId */
    sourcedId: string;
    body?: ImsOnerosterRosteringV1P2ClassesRequest1;
  };

  export class UpdateClassError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestResponse", BadRequestResponse>
      | Declared<"unauthorizedRequestResponse", UnauthorizedRequestResponse>
      | Declared<"forbiddenResponse", ForbiddenResponse>
      | Declared<"notFoundResponse", NotFoundResponse>
      | Declared<"unprocessableEntityResponse", UnprocessableEntityResponse>
      | Declared<"tooManyRequestsResponse", TooManyRequestsResponse>
      | Declared<"internalServerErrorResponse", InternalServerErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassError> = [
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

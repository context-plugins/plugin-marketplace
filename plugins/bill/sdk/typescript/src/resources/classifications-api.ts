import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  classificationAccountingClassBulkResponseDtoSchema,
  type ClassificationAccountingClassBulkResponseDto,
} from "../models/classification-accounting-class-bulk-response-dto.js";
import {
  classificationAccountingClassResponseDtoSchema,
  type ClassificationAccountingClassResponseDto,
} from "../models/classification-accounting-class-response-dto.js";
import {
  classificationChartOfAccountsBulkResponseDtoSchema,
  type ClassificationChartOfAccountsBulkResponseDto,
} from "../models/classification-chart-of-accounts-bulk-response-dto.js";
import {
  classificationChartOfAccountsResponseDtoSchema,
  type ClassificationChartOfAccountsResponseDto,
} from "../models/classification-chart-of-accounts-response-dto.js";
import {
  classificationDepartmentBulkResponseDtoSchema,
  type ClassificationDepartmentBulkResponseDto,
} from "../models/classification-department-bulk-response-dto.js";
import {
  classificationDepartmentResponseDtoSchema,
  type ClassificationDepartmentResponseDto,
} from "../models/classification-department-response-dto.js";
import {
  classificationEmployeeBulkResponseDtoSchema,
  type ClassificationEmployeeBulkResponseDto,
} from "../models/classification-employee-bulk-response-dto.js";
import {
  classificationEmployeeResponseDtoSchema,
  type ClassificationEmployeeResponseDto,
} from "../models/classification-employee-response-dto.js";
import {
  classificationItemBulkResponseDtoSchema,
  type ClassificationItemBulkResponseDto,
} from "../models/classification-item-bulk-response-dto.js";
import {
  classificationItemResponseDtoSchema,
  type ClassificationItemResponseDto,
} from "../models/classification-item-response-dto.js";
import {
  classificationJobBulkResponseDtoSchema,
  type ClassificationJobBulkResponseDto,
} from "../models/classification-job-bulk-response-dto.js";
import {
  classificationJobResponseDtoSchema,
  type ClassificationJobResponseDto,
} from "../models/classification-job-response-dto.js";
import {
  classificationLocationBulkResponseDtoSchema,
  type ClassificationLocationBulkResponseDto,
} from "../models/classification-location-bulk-response-dto.js";
import {
  classificationLocationResponseDtoSchema,
  type ClassificationLocationResponseDto,
} from "../models/classification-location-response-dto.js";
import {
  createClassificationAccountingClassRequestDtoInternalSchema,
  createClassificationAccountingClassRequestDtoSchema,
  type CreateClassificationAccountingClassRequestDto,
} from "../models/create-classification-accounting-class-request-dto.js";
import {
  createClassificationChartOfAccountsRequestDtoInternalSchema,
  createClassificationChartOfAccountsRequestDtoSchema,
  type CreateClassificationChartOfAccountsRequestDto,
} from "../models/create-classification-chart-of-accounts-request-dto.js";
import {
  createClassificationDepartmentRequestDtoInternalSchema,
  createClassificationDepartmentRequestDtoSchema,
  type CreateClassificationDepartmentRequestDto,
} from "../models/create-classification-department-request-dto.js";
import {
  createClassificationEmployeeRequestDtoInternalSchema,
  createClassificationEmployeeRequestDtoSchema,
  type CreateClassificationEmployeeRequestDto,
} from "../models/create-classification-employee-request-dto.js";
import {
  createClassificationItemRequestDtoInternalSchema,
  createClassificationItemRequestDtoSchema,
  type CreateClassificationItemRequestDto,
} from "../models/create-classification-item-request-dto.js";
import {
  createClassificationJobRequestDtoInternalSchema,
  createClassificationJobRequestDtoSchema,
  type CreateClassificationJobRequestDto,
} from "../models/create-classification-job-request-dto.js";
import {
  createClassificationLocationRequestDtoInternalSchema,
  createClassificationLocationRequestDtoSchema,
  type CreateClassificationLocationRequestDto,
} from "../models/create-classification-location-request-dto.js";
import {
  listResponseDtoClassificationAccountingClassResponseDtoSchema,
  type ListResponseDtoClassificationAccountingClassResponseDto,
} from "../models/list-response-dto-classification-accounting-class-response-dto.js";
import {
  listResponseDtoClassificationChartOfAccountsResponseDtoSchema,
  type ListResponseDtoClassificationChartOfAccountsResponseDto,
} from "../models/list-response-dto-classification-chart-of-accounts-response-dto.js";
import {
  listResponseDtoClassificationDepartmentResponseDtoSchema,
  type ListResponseDtoClassificationDepartmentResponseDto,
} from "../models/list-response-dto-classification-department-response-dto.js";
import {
  listResponseDtoClassificationEmployeeResponseDtoSchema,
  type ListResponseDtoClassificationEmployeeResponseDto,
} from "../models/list-response-dto-classification-employee-response-dto.js";
import {
  listResponseDtoClassificationItemResponseDtoSchema,
  type ListResponseDtoClassificationItemResponseDto,
} from "../models/list-response-dto-classification-item-response-dto.js";
import {
  listResponseDtoClassificationJobResponseDtoSchema,
  type ListResponseDtoClassificationJobResponseDto,
} from "../models/list-response-dto-classification-job-response-dto.js";
import {
  listResponseDtoClassificationLocationResponseDtoSchema,
  type ListResponseDtoClassificationLocationResponseDto,
} from "../models/list-response-dto-classification-location-response-dto.js";
import {
  updateClassificationAccountingClassRequestDtoSchema,
  type UpdateClassificationAccountingClassRequestDto,
} from "../models/update-classification-accounting-class-request-dto.js";
import {
  updateClassificationAccountingClassWithIdRequestDtoSchema,
  type UpdateClassificationAccountingClassWithIdRequestDto,
} from "../models/update-classification-accounting-class-with-id-request-dto.js";
import {
  updateClassificationChartOfAccountsRequestDtoSchema,
  type UpdateClassificationChartOfAccountsRequestDto,
} from "../models/update-classification-chart-of-accounts-request-dto.js";
import {
  updateClassificationChartOfAccountsWithIdRequestDtoSchema,
  type UpdateClassificationChartOfAccountsWithIdRequestDto,
} from "../models/update-classification-chart-of-accounts-with-id-request-dto.js";
import {
  updateClassificationDepartmentRequestDtoSchema,
  type UpdateClassificationDepartmentRequestDto,
} from "../models/update-classification-department-request-dto.js";
import {
  updateClassificationDepartmentWithIdRequestDtoSchema,
  type UpdateClassificationDepartmentWithIdRequestDto,
} from "../models/update-classification-department-with-id-request-dto.js";
import {
  updateClassificationEmployeeRequestDtoSchema,
  type UpdateClassificationEmployeeRequestDto,
} from "../models/update-classification-employee-request-dto.js";
import {
  updateClassificationEmployeeWithIdRequestDtoSchema,
  type UpdateClassificationEmployeeWithIdRequestDto,
} from "../models/update-classification-employee-with-id-request-dto.js";
import {
  updateClassificationItemRequestDtoSchema,
  type UpdateClassificationItemRequestDto,
} from "../models/update-classification-item-request-dto.js";
import {
  updateClassificationItemWithIdRequestDtoSchema,
  type UpdateClassificationItemWithIdRequestDto,
} from "../models/update-classification-item-with-id-request-dto.js";
import {
  updateClassificationJobRequestDtoSchema,
  type UpdateClassificationJobRequestDto,
} from "../models/update-classification-job-request-dto.js";
import {
  updateClassificationJobWithIdRequestDtoSchema,
  type UpdateClassificationJobWithIdRequestDto,
} from "../models/update-classification-job-with-id-request-dto.js";
import {
  updateClassificationLocationRequestDtoSchema,
  type UpdateClassificationLocationRequestDto,
} from "../models/update-classification-location-request-dto.js";
import {
  updateClassificationLocationWithIdRequestDtoSchema,
  type UpdateClassificationLocationWithIdRequestDto,
} from "../models/update-classification-location-with-id-request-dto.js";
import type { Servers } from "../servers.js";

export class ClassificationsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Archive an accounting class
   *
   * @remarks
   * Archive an existing accounting class. In the response, the `archived` field is set as `true`.
   *
   * @returns Archive an accounting class response
   *
   * @throws {@link ClassificationsApi.ArchiveClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveClassificationAccountingClass(
    request: ClassificationsApi.ArchiveClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassResponseDto,
    ClassificationsApi.ArchiveClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassResponseDtoSchema },
        errorFactory: ClassificationsApi.ArchiveClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Archive a chart of accounts
   *
   * @remarks
   * Archive an existing chart of accounts. In the response, the `archived` field is set as `true`.
   *
   * @returns Archive a chart of accounts response
   *
   * @throws {@link ClassificationsApi.ArchiveClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveClassificationChartOfAccounts(
    request: ClassificationsApi.ArchiveClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsResponseDto,
    ClassificationsApi.ArchiveClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsResponseDtoSchema },
        errorFactory: ClassificationsApi.ArchiveClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Archive a department
   *
   * @remarks
   * Archive an existing department. In the response, the `archived` field is set as `true`.
   *
   * @returns Archive a department response
   *
   * @throws {@link ClassificationsApi.ArchiveClassificationDepartmentError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveClassificationDepartment(
    request: ClassificationsApi.ArchiveClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationDepartmentResponseDto,
    ClassificationsApi.ArchiveClassificationDepartmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/departments/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationDepartmentResponseDtoSchema },
        errorFactory: ClassificationsApi.ArchiveClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Archive an employee
   *
   * @remarks
   * Archive an existing employee. In the response, the `archived` field is set as `true`.
   *
   * @returns Archive an employee response
   *
   * @throws {@link ClassificationsApi.ArchiveClassificationEmployeeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveClassificationEmployee(
    request: ClassificationsApi.ArchiveClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.ArchiveClassificationEmployeeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/employees/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationEmployeeResponseDtoSchema },
        errorFactory: ClassificationsApi.ArchiveClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Archive an item
   *
   * @remarks
   * Archive an existing item. In the response, the `archived` field is set as `true`.
   *
   * @returns Archive an item response
   *
   * @throws {@link ClassificationsApi.ArchiveClassificationItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveClassificationItem(
    request: ClassificationsApi.ArchiveClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.ArchiveClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/items/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationItemResponseDtoSchema },
        errorFactory: ClassificationsApi.ArchiveClassificationItemError,
      },
      options,
    );
  }

  /**
   * Archive a job
   *
   * @remarks
   * Archive an existing job. In the response, the `archived` field is set as `true`.
   *
   * @returns Archive a job response
   *
   * @throws {@link ClassificationsApi.ArchiveClassificationJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveClassificationJob(
    request: ClassificationsApi.ArchiveClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.ArchiveClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationJobResponseDtoSchema },
        errorFactory: ClassificationsApi.ArchiveClassificationJobError,
      },
      options,
    );
  }

  /**
   * Archive a location
   *
   * @remarks
   * Archive an existing location. In the response, the `archived` field is set as `true`.
   *
   * @returns Archive a location response
   *
   * @throws {@link ClassificationsApi.ArchiveClassificationLocationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveClassificationLocation(
    request: ClassificationsApi.ArchiveClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.ArchiveClassificationLocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/locations/{id}/archive"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationLocationResponseDtoSchema },
        errorFactory: ClassificationsApi.ArchiveClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Archive multiple accounting classes
   *
   * @remarks
   * Archive multiple accounting classes with one API request. In the response, the `archived` field
   * for each object is set as `true`.
   *
   * @returns Archive multiple accounting classes response
   *
   * @throws {@link ClassificationsApi.BulkArchiveClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveClassificationAccountingClass(
    request: ClassificationsApi.BulkArchiveClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassBulkResponseDto,
    ClassificationsApi.BulkArchiveClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkArchiveClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Archive multiple chart of accounts
   *
   * @remarks
   * Archive multiple chart of accounts with one API request. In the response, the `archived` field
   * for each object is set as `true`.
   *
   * @returns Archive multiple chart of accounts response
   *
   * @throws {@link ClassificationsApi.BulkArchiveClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveClassificationChartOfAccounts(
    request: ClassificationsApi.BulkArchiveClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsBulkResponseDto,
    ClassificationsApi.BulkArchiveClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkArchiveClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Archive multiple departments
   *
   * @remarks
   * Archive multiple departments with one API request. In the response, the `archived` field is set
   * as `true`.
   *
   * @returns Archive multiple departments response
   *
   * @throws {@link ClassificationsApi.BulkArchiveClassificationDepartmentError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveClassificationDepartment(
    request: ClassificationsApi.BulkArchiveClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationDepartmentBulkResponseDto,
    ClassificationsApi.BulkArchiveClassificationDepartmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/departments/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationDepartmentBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkArchiveClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Archive multiple employees
   *
   * @remarks
   * Archive multiple employees with one API request. In the response, the `archived` field for each
   * object is set as `true`.
   *
   * @returns Archive multiple employees response
   *
   * @throws {@link ClassificationsApi.BulkArchiveClassificationEmployeeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveClassificationEmployee(
    request: ClassificationsApi.BulkArchiveClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationEmployeeBulkResponseDto,
    ClassificationsApi.BulkArchiveClassificationEmployeeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/employees/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationEmployeeBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkArchiveClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Archive multiple items
   *
   * @remarks
   * Archive multiple items with one API request. In the response, the `archived` field for each
   * object is set as `true`.
   *
   * @returns Archive multiple items response
   *
   * @throws {@link ClassificationsApi.BulkArchiveClassificationItemError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveClassificationItem(
    request: ClassificationsApi.BulkArchiveClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkArchiveClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/items/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationItemBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkArchiveClassificationItemError,
      },
      options,
    );
  }

  /**
   * Archive multiple jobs
   *
   * @remarks
   * Archive multiple jobs with one API request. In the response, the `archived` field for each
   * object is set as `true`.
   *
   * @returns Archive multiple jobs response
   *
   * @throws {@link ClassificationsApi.BulkArchiveClassificationJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveClassificationJob(
    request: ClassificationsApi.BulkArchiveClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkArchiveClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationJobBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkArchiveClassificationJobError,
      },
      options,
    );
  }

  /**
   * Archive multiple locations
   *
   * @remarks
   * Archive multiple locations with one API request. In the response, the `archived` field for each
   * object is set as `true`.
   *
   * @returns Archive multiple locations response
   *
   * @throws {@link ClassificationsApi.BulkArchiveClassificationLocationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkArchiveClassificationLocation(
    request: ClassificationsApi.BulkArchiveClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationLocationBulkResponseDto,
    ClassificationsApi.BulkArchiveClassificationLocationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/locations/bulk/archive"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationLocationBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkArchiveClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Create multiple accounting classes
   *
   * @remarks
   * Create multiple accounting classes with one API request. You can create up to 50 accounting
   * classes with one `POST /v3/classifications/accounting-classes/bulk` request.
   *
   * @returns Create multiple accounting classes response
   *
   * @throws {@link ClassificationsApi.BulkCreateClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateClassificationAccountingClass(
    request: ClassificationsApi.BulkCreateClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassBulkResponseDto,
    ClassificationsApi.BulkCreateClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createClassificationAccountingClassRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkCreateClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Create multiple chart of accounts
   *
   * @remarks
   * Create multiple chart of accounts with one API request. You can create up to 50 chart of
   * accounts with one `POST /v3/classifications/chart-of-accounts/bulk` request.
   *
   * @returns Create multiple chart of accounts response
   *
   * @throws {@link ClassificationsApi.BulkCreateClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateClassificationChartOfAccounts(
    request: ClassificationsApi.BulkCreateClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsBulkResponseDto,
    ClassificationsApi.BulkCreateClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createClassificationChartOfAccountsRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkCreateClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Create multiple departments
   *
   * @remarks
   * Create multiple departments with one API request. You can create up to 50 departments with one
   * `POST /v3/classifications/departments/bulk` request.
   *
   * @returns Create multiple departments response
   *
   * @throws {@link ClassificationsApi.BulkCreateClassificationDepartmentError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateClassificationDepartment(
    request: ClassificationsApi.BulkCreateClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationDepartmentBulkResponseDto,
    ClassificationsApi.BulkCreateClassificationDepartmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/departments/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createClassificationDepartmentRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationDepartmentBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkCreateClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Create multiple employees
   *
   * @remarks
   * Create multiple employees with one API request. You can create up to 50 employees with one
   * `POST /v3/classifications/employees/bulk` request.
   *
   * @returns Create multiple employees response
   *
   * @throws {@link ClassificationsApi.BulkCreateClassificationEmployeeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateClassificationEmployee(
    request: ClassificationsApi.BulkCreateClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationEmployeeBulkResponseDto,
    ClassificationsApi.BulkCreateClassificationEmployeeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/employees/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createClassificationEmployeeRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationEmployeeBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkCreateClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Create multiple items
   *
   * @remarks
   * Create multiple items with one API request. You can create up to 50 items with one `POST
   * /v3/classifications/items/bulk` request.
   *
   * @returns Create multiple items response
   *
   * @throws {@link ClassificationsApi.BulkCreateClassificationItemError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateClassificationItem(
    request: ClassificationsApi.BulkCreateClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkCreateClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/items/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createClassificationItemRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationItemBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkCreateClassificationItemError,
      },
      options,
    );
  }

  /**
   * Create multiple jobs
   *
   * @remarks
   * Create multiple jobs with one API request. You can create up to 50 jobs with one `POST
   * /v3/classifications/jobs/bulk` request.
   *
   * @returns Create multiple jobs response
   *
   * @throws {@link ClassificationsApi.BulkCreateClassificationJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateClassificationJob(
    request: ClassificationsApi.BulkCreateClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkCreateClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createClassificationJobRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationJobBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkCreateClassificationJobError,
      },
      options,
    );
  }

  /**
   * Create multiple locations
   *
   * @remarks
   * Create multiple locations with one API request. You can create up to 50 locations with one
   * `POST /v3/classifications/locations/bulk` request.
   *
   * @returns Create multiple locations response
   *
   * @throws {@link ClassificationsApi.BulkCreateClassificationLocationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateClassificationLocation(
    request: ClassificationsApi.BulkCreateClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationLocationBulkResponseDto,
    ClassificationsApi.BulkCreateClassificationLocationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/locations/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createClassificationLocationRequestDtoInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationLocationBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkCreateClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Restore multiple accounting classes
   *
   * @remarks
   * Restore multiple accounting classes with one API request. In the response, the `archived` field
   * for each object is set as `false`.
   *
   * @returns Restore multiple accounting classes response
   *
   * @throws {@link ClassificationsApi.BulkRestoreClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreClassificationAccountingClass(
    request: ClassificationsApi.BulkRestoreClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassBulkResponseDto,
    ClassificationsApi.BulkRestoreClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkRestoreClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Restore multiple chart of accounts
   *
   * @remarks
   * Restore multiple chart of accounts with one API request. In the response, the `archived` field
   * for each object is set as `false`.
   *
   * @returns Restore multiple chart of accounts response
   *
   * @throws {@link ClassificationsApi.BulkRestoreClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreClassificationChartOfAccounts(
    request: ClassificationsApi.BulkRestoreClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsBulkResponseDto,
    ClassificationsApi.BulkRestoreClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkRestoreClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Restore multiple departments
   *
   * @remarks
   * Restore multiple departments with one API request. In the response, the `archived` field is set
   * as `false`.
   *
   * @returns Restore multiple departments response
   *
   * @throws {@link ClassificationsApi.BulkRestoreClassificationDepartmentError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreClassificationDepartment(
    request: ClassificationsApi.BulkRestoreClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationDepartmentBulkResponseDto,
    ClassificationsApi.BulkRestoreClassificationDepartmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/departments/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationDepartmentBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkRestoreClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Restore multiple employees
   *
   * @remarks
   * Restore multiple employees with one API request. In the response, the `archived` field for each
   * object is set as `false`.
   *
   * @returns Restore multiple employees response
   *
   * @throws {@link ClassificationsApi.BulkRestoreClassificationEmployeeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreClassificationEmployee(
    request: ClassificationsApi.BulkRestoreClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationEmployeeBulkResponseDto,
    ClassificationsApi.BulkRestoreClassificationEmployeeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/employees/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationEmployeeBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkRestoreClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Restore multiple items
   *
   * @remarks
   * Restore multiple items with one API request. In the response, the `archived` field for each
   * object is set as `false`.
   *
   * @returns Restore multiple items response
   *
   * @throws {@link ClassificationsApi.BulkRestoreClassificationItemError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreClassificationItem(
    request: ClassificationsApi.BulkRestoreClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkRestoreClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/items/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationItemBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkRestoreClassificationItemError,
      },
      options,
    );
  }

  /**
   * Restore multiple jobs
   *
   * @remarks
   * Restore multiple jobs with one API request. In the response, the `archived` field for each
   * object is set as `false`.
   *
   * @returns Restore multiple jobs response
   *
   * @throws {@link ClassificationsApi.BulkRestoreClassificationJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreClassificationJob(
    request: ClassificationsApi.BulkRestoreClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkRestoreClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationJobBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkRestoreClassificationJobError,
      },
      options,
    );
  }

  /**
   * Restore multiple locations
   *
   * @remarks
   * Restore multiple locations with one API request. In the response, the `archived` field for each
   * object is set as `false`.
   *
   * @returns Restore multiple locations response
   *
   * @throws {@link ClassificationsApi.BulkRestoreClassificationLocationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkRestoreClassificationLocation(
    request: ClassificationsApi.BulkRestoreClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationLocationBulkResponseDto,
    ClassificationsApi.BulkRestoreClassificationLocationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/locations/bulk/restore"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.string() }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationLocationBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkRestoreClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Update multiple accounting classes
   *
   * @remarks
   * Update details about multiple accounting classes with one API request.
   *
   * @returns Update multiple accounting classes response
   *
   * @throws {@link ClassificationsApi.BulkUpdateClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateClassificationAccountingClass(
    request: ClassificationsApi.BulkUpdateClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassBulkResponseDto,
    ClassificationsApi.BulkUpdateClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateClassificationAccountingClassWithIdRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkUpdateClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Update multiple chart of accounts
   *
   * @remarks
   * Update details about multiple chart of accounts with one API request.
   *
   * @returns Update multiple chart of accounts response
   *
   * @throws {@link ClassificationsApi.BulkUpdateClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateClassificationChartOfAccounts(
    request: ClassificationsApi.BulkUpdateClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsBulkResponseDto,
    ClassificationsApi.BulkUpdateClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateClassificationChartOfAccountsWithIdRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkUpdateClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Update multiple departments
   *
   * @remarks
   * Update multiple departments with one API request.
   *
   * @returns Update multiple departments response
   *
   * @throws {@link ClassificationsApi.BulkUpdateClassificationDepartmentError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateClassificationDepartment(
    request: ClassificationsApi.BulkUpdateClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationDepartmentBulkResponseDto,
    ClassificationsApi.BulkUpdateClassificationDepartmentError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/departments/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateClassificationDepartmentWithIdRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationDepartmentBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkUpdateClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Update multiple employees
   *
   * @remarks
   * Update details about multiple employees with one API request.
   *
   * @returns Update multiple employees response
   *
   * @throws {@link ClassificationsApi.BulkUpdateClassificationEmployeeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateClassificationEmployee(
    request: ClassificationsApi.BulkUpdateClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationEmployeeBulkResponseDto,
    ClassificationsApi.BulkUpdateClassificationEmployeeError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/employees/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateClassificationEmployeeWithIdRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationEmployeeBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkUpdateClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Update multiple items
   *
   * @remarks
   * Update details about multiple items with one API request.
   *
   * @returns Update multiple items response
   *
   * @throws {@link ClassificationsApi.BulkUpdateClassificationItemError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateClassificationItem(
    request: ClassificationsApi.BulkUpdateClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemBulkResponseDto, ClassificationsApi.BulkUpdateClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/items/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateClassificationItemWithIdRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationItemBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkUpdateClassificationItemError,
      },
      options,
    );
  }

  /**
   * Update multiple jobs
   *
   * @remarks
   * Update details about multiple jobs with one API request.
   *
   * @returns Update multiple jobs response
   *
   * @throws {@link ClassificationsApi.BulkUpdateClassificationJobError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateClassificationJob(
    request: ClassificationsApi.BulkUpdateClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobBulkResponseDto, ClassificationsApi.BulkUpdateClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateClassificationJobWithIdRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationJobBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkUpdateClassificationJobError,
      },
      options,
    );
  }

  /**
   * Update multiple locations
   *
   * @remarks
   * Update details about multiple locations with one API request.
   *
   * @returns Update multiple locations response
   *
   * @throws {@link ClassificationsApi.BulkUpdateClassificationLocationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateClassificationLocation(
    request: ClassificationsApi.BulkUpdateClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationLocationBulkResponseDto,
    ClassificationsApi.BulkUpdateClassificationLocationError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/locations/bulk"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateClassificationLocationWithIdRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: classificationLocationBulkResponseDtoSchema },
        errorFactory: ClassificationsApi.BulkUpdateClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Create an accounting class
   *
   * @remarks
   * Create a new accounting class.
   *
   * @returns Create an accounting class response
   *
   * @throws {@link ClassificationsApi.CreateClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClassificationAccountingClass(
    request: ClassificationsApi.CreateClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassResponseDto,
    ClassificationsApi.CreateClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: createClassificationAccountingClassRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassResponseDtoSchema },
        errorFactory: ClassificationsApi.CreateClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Create a chart of accounts
   *
   * @remarks
   * Create a new chart of accounts.
   *
   * @returns Create a chart of accounts response
   *
   * @throws {@link ClassificationsApi.CreateClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClassificationChartOfAccounts(
    request: ClassificationsApi.CreateClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsResponseDto,
    ClassificationsApi.CreateClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: createClassificationChartOfAccountsRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsResponseDtoSchema },
        errorFactory: ClassificationsApi.CreateClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Create a department
   *
   * @remarks
   * Create a new department.
   *
   * @returns Create a department response
   *
   * @throws {@link ClassificationsApi.CreateClassificationDepartmentError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClassificationDepartment(
    request: ClassificationsApi.CreateClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.CreateClassificationDepartmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/departments"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: createClassificationDepartmentRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: classificationDepartmentResponseDtoSchema },
        errorFactory: ClassificationsApi.CreateClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Create an employee
   *
   * @remarks
   * Create a new employee.
   *
   * @returns Create an employee response
   *
   * @throws {@link ClassificationsApi.CreateClassificationEmployeeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClassificationEmployee(
    request: ClassificationsApi.CreateClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.CreateClassificationEmployeeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/employees"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: createClassificationEmployeeRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: classificationEmployeeResponseDtoSchema },
        errorFactory: ClassificationsApi.CreateClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Create an item
   *
   * @remarks
   * Create a new item.
   *
   * @returns Create an item response
   *
   * @throws {@link ClassificationsApi.CreateClassificationItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClassificationItem(
    request: ClassificationsApi.CreateClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.CreateClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/items"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createClassificationItemRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: classificationItemResponseDtoSchema },
        errorFactory: ClassificationsApi.CreateClassificationItemError,
      },
      options,
    );
  }

  /**
   * Create a job
   *
   * @remarks
   * Create a new job.
   *
   * @returns Create a job response
   *
   * @throws {@link ClassificationsApi.CreateClassificationJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClassificationJob(
    request: ClassificationsApi.CreateClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.CreateClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/jobs"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createClassificationJobRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: classificationJobResponseDtoSchema },
        errorFactory: ClassificationsApi.CreateClassificationJobError,
      },
      options,
    );
  }

  /**
   * Create a location
   *
   * @remarks
   * Create a new location.
   *
   * @returns Create a location response
   *
   * @throws {@link ClassificationsApi.CreateClassificationLocationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClassificationLocation(
    request: ClassificationsApi.CreateClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.CreateClassificationLocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/locations"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: createClassificationLocationRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: classificationLocationResponseDtoSchema },
        errorFactory: ClassificationsApi.CreateClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Get accounting class details
   *
   * @remarks
   * Get details about an existing accounting class.
   *
   * @returns Get accounting class details response
   *
   * @throws {@link ClassificationsApi.GetClassificationAccountingClassError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationAccountingClass(
    request: ClassificationsApi.GetClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassResponseDto,
    ClassificationsApi.GetClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassResponseDtoSchema },
        errorFactory: ClassificationsApi.GetClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Get chart of accounts details
   *
   * @remarks
   * Get details about an existing chart of accounts.
   *
   * @returns Get chart of accounts details response
   *
   * @throws {@link ClassificationsApi.GetClassificationChartOfAccountsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationChartOfAccounts(
    request: ClassificationsApi.GetClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsResponseDto,
    ClassificationsApi.GetClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsResponseDtoSchema },
        errorFactory: ClassificationsApi.GetClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Get department details
   *
   * @remarks
   * Get details about an existing department.
   *
   * @returns Get department details response
   *
   * @throws {@link ClassificationsApi.GetClassificationDepartmentError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationDepartment(
    request: ClassificationsApi.GetClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.GetClassificationDepartmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/departments/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationDepartmentResponseDtoSchema },
        errorFactory: ClassificationsApi.GetClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Get employee details
   *
   * @remarks
   * Get details about an existing employee.
   *
   * @returns Get employee details response
   *
   * @throws {@link ClassificationsApi.GetClassificationEmployeeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationEmployee(
    request: ClassificationsApi.GetClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.GetClassificationEmployeeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/employees/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationEmployeeResponseDtoSchema },
        errorFactory: ClassificationsApi.GetClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Get item details
   *
   * @remarks
   * Get details about an existing item.
   *
   * @returns Get item details response
   *
   * @throws {@link ClassificationsApi.GetClassificationItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationItem(
    request: ClassificationsApi.GetClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.GetClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/items/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationItemResponseDtoSchema },
        errorFactory: ClassificationsApi.GetClassificationItemError,
      },
      options,
    );
  }

  /**
   * Get job details
   *
   * @remarks
   * Get details about an existing job.
   *
   * @returns Get job details response
   *
   * @throws {@link ClassificationsApi.GetClassificationJobError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationJob(
    request: ClassificationsApi.GetClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.GetClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationJobResponseDtoSchema },
        errorFactory: ClassificationsApi.GetClassificationJobError,
      },
      options,
    );
  }

  /**
   * Get location details
   *
   * @remarks
   * Get details about an existing location.
   *
   * @returns Get location details response
   *
   * @throws {@link ClassificationsApi.GetClassificationLocationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getClassificationLocation(
    request: ClassificationsApi.GetClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.GetClassificationLocationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/locations/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationLocationResponseDtoSchema },
        errorFactory: ClassificationsApi.GetClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Get list of accounting classes
   *
   * @remarks
   * Get a list of accounting class objects. By default, you get 20 results on one page of results.
   * Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of accounting classes response
   *
   * @throws {@link ClassificationsApi.ListClassificationAccountingClassesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassificationAccountingClasses(
    request: ClassificationsApi.ListClassificationAccountingClassesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoClassificationAccountingClassResponseDto,
    ClassificationsApi.ListClassificationAccountingClassesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoClassificationAccountingClassResponseDtoSchema },
        errorFactory: ClassificationsApi.ListClassificationAccountingClassesError,
      },
      options,
    );
  }

  /**
   * Get list of chart of accounts
   *
   * @remarks
   * Get a list of chart of accounts objects. By default, you get 20 results on one page of results.
   * Set `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of chart of accounts response
   *
   * @throws {@link ClassificationsApi.ListClassificationChartOfAccountsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassificationChartOfAccounts(
    request: ClassificationsApi.ListClassificationChartOfAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoClassificationChartOfAccountsResponseDto,
    ClassificationsApi.ListClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoClassificationChartOfAccountsResponseDtoSchema },
        errorFactory: ClassificationsApi.ListClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Get list of departments
   *
   * @remarks
   * Get a list of department objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of classification departments response
   *
   * @throws {@link ClassificationsApi.ListClassificationDepartmentsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassificationDepartments(
    request: ClassificationsApi.ListClassificationDepartmentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoClassificationDepartmentResponseDto,
    ClassificationsApi.ListClassificationDepartmentsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/departments"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoClassificationDepartmentResponseDtoSchema },
        errorFactory: ClassificationsApi.ListClassificationDepartmentsError,
      },
      options,
    );
  }

  /**
   * Get list of employees
   *
   * @remarks
   * Get a list of employee objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of employees response
   *
   * @throws {@link ClassificationsApi.ListClassificationEmployeesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassificationEmployees(
    request: ClassificationsApi.ListClassificationEmployeesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoClassificationEmployeeResponseDto,
    ClassificationsApi.ListClassificationEmployeesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/employees"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoClassificationEmployeeResponseDtoSchema },
        errorFactory: ClassificationsApi.ListClassificationEmployeesError,
      },
      options,
    );
  }

  /**
   * Get list of items
   *
   * @remarks
   * Get a list of item objects. By default, you get 20 results on one page of results. Set `max` in
   * your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of items response
   *
   * @throws {@link ClassificationsApi.ListClassificationItemsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassificationItems(
    request: ClassificationsApi.ListClassificationItemsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoClassificationItemResponseDto,
    ClassificationsApi.ListClassificationItemsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/items"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoClassificationItemResponseDtoSchema },
        errorFactory: ClassificationsApi.ListClassificationItemsError,
      },
      options,
    );
  }

  /**
   * Get list of jobs
   *
   * @remarks
   * Get a list of job objects. By default, you get 20 results on one page of results. Set `max` in
   * your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of jobs response
   *
   * @throws {@link ClassificationsApi.ListClassificationJobsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassificationJobs(
    request: ClassificationsApi.ListClassificationJobsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponseDtoClassificationJobResponseDto, ClassificationsApi.ListClassificationJobsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/jobs"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoClassificationJobResponseDtoSchema },
        errorFactory: ClassificationsApi.ListClassificationJobsError,
      },
      options,
    );
  }

  /**
   * Get list of locations
   *
   * @remarks
   * Get a list of location objects. By default, you get 20 results on one page of results. Set
   * `max` in your request to get up to 100 results on one page.
   *
   * See Search operations with lists in the Guides section for filtering, sorting, and pagination
   * examples.
   *
   * @returns Get list of locations response
   *
   * @throws {@link ClassificationsApi.ListClassificationLocationsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listClassificationLocations(
    request: ClassificationsApi.ListClassificationLocationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResponseDtoClassificationLocationResponseDto,
    ClassificationsApi.ListClassificationLocationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/classifications/locations"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
          { name: "page", value: request.page, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDtoClassificationLocationResponseDtoSchema },
        errorFactory: ClassificationsApi.ListClassificationLocationsError,
      },
      options,
    );
  }

  /**
   * Restore an archived accounting class
   *
   * @remarks
   * Restore an archived accounting class. In the response, the `archived` field is set as `false`.
   *
   * @returns Restore an accounting class response
   *
   * @throws {@link ClassificationsApi.RestoreClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreClassificationAccountingClass(
    request: ClassificationsApi.RestoreClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassResponseDto,
    ClassificationsApi.RestoreClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/{id}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassResponseDtoSchema },
        errorFactory: ClassificationsApi.RestoreClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Restore an archived chart of accounts
   *
   * @remarks
   * Restore an archived chart of accounts. In the response, the `archived` field is set as `false`.
   *
   * @returns Restore a chart of accounts response
   *
   * @throws {@link ClassificationsApi.RestoreClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreClassificationChartOfAccounts(
    request: ClassificationsApi.RestoreClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsResponseDto,
    ClassificationsApi.RestoreClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/{id}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsResponseDtoSchema },
        errorFactory: ClassificationsApi.RestoreClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Restore an archived department
   *
   * @remarks
   * Restore an archived department. In the response, the `archived` field is set as `false`.
   *
   * @returns Restore a department response
   *
   * @throws {@link ClassificationsApi.RestoreClassificationDepartmentError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreClassificationDepartment(
    request: ClassificationsApi.RestoreClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationDepartmentResponseDto,
    ClassificationsApi.RestoreClassificationDepartmentError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/departments/{id}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationDepartmentResponseDtoSchema },
        errorFactory: ClassificationsApi.RestoreClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Restore an archived employee
   *
   * @remarks
   * Restore an archived employee. In the response, the `archived` field is set as `false`.
   *
   * @returns Restore an archived employee response
   *
   * @throws {@link ClassificationsApi.RestoreClassificationEmployeeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreClassificationEmployee(
    request: ClassificationsApi.RestoreClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.RestoreClassificationEmployeeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/employees/{id}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationEmployeeResponseDtoSchema },
        errorFactory: ClassificationsApi.RestoreClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Restore an archived item
   *
   * @remarks
   * Restore an archived item. In the response, the `archived` field is set as `false`.
   *
   * @returns Restore classification item response
   *
   * @throws {@link ClassificationsApi.RestoreClassificationItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreClassificationItem(
    request: ClassificationsApi.RestoreClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.RestoreClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/items/{id}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationItemResponseDtoSchema },
        errorFactory: ClassificationsApi.RestoreClassificationItemError,
      },
      options,
    );
  }

  /**
   * Restore an archived job
   *
   * @remarks
   * Restore an archived job. In the response, the `archived` field is set as `false`.
   *
   * @returns Restore an archived job response
   *
   * @throws {@link ClassificationsApi.RestoreClassificationJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreClassificationJob(
    request: ClassificationsApi.RestoreClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.RestoreClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/{id}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationJobResponseDtoSchema },
        errorFactory: ClassificationsApi.RestoreClassificationJobError,
      },
      options,
    );
  }

  /**
   * Restore an archived location
   *
   * @remarks
   * Restore an archived location. In the response, the `archived` field is set as `false`.
   *
   * @returns Restore an archived location response
   *
   * @throws {@link ClassificationsApi.RestoreClassificationLocationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreClassificationLocation(
    request: ClassificationsApi.RestoreClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.RestoreClassificationLocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/classifications/locations/{id}/restore"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: classificationLocationResponseDtoSchema },
        errorFactory: ClassificationsApi.RestoreClassificationLocationError,
      },
      options,
    );
  }

  /**
   * Update an accounting class
   *
   * @remarks
   * Update details about an existing accounting class.
   *
   * @returns Update an accounting class response
   *
   * @throws {@link ClassificationsApi.UpdateClassificationAccountingClassError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClassificationAccountingClass(
    request: ClassificationsApi.UpdateClassificationAccountingClassRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationAccountingClassResponseDto,
    ClassificationsApi.UpdateClassificationAccountingClassError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/accounting-classes/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: updateClassificationAccountingClassRequestDtoSchema,
        },
      },
      {
        success: { kind: "json", schema: classificationAccountingClassResponseDtoSchema },
        errorFactory: ClassificationsApi.UpdateClassificationAccountingClassError,
      },
      options,
    );
  }

  /**
   * Update a chart of accounts
   *
   * @remarks
   * Update details about an existing chart of accounts.
   *
   * @returns Update a chart of accounts response
   *
   * @throws {@link ClassificationsApi.UpdateClassificationChartOfAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClassificationChartOfAccounts(
    request: ClassificationsApi.UpdateClassificationChartOfAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ClassificationChartOfAccountsResponseDto,
    ClassificationsApi.UpdateClassificationChartOfAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/chart-of-accounts/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: updateClassificationChartOfAccountsRequestDtoSchema,
        },
      },
      {
        success: { kind: "json", schema: classificationChartOfAccountsResponseDtoSchema },
        errorFactory: ClassificationsApi.UpdateClassificationChartOfAccountsError,
      },
      options,
    );
  }

  /**
   * Update a department
   *
   * @remarks
   * Update details about an existing department.
   *
   * @returns Update a department response
   *
   * @throws {@link ClassificationsApi.UpdateClassificationDepartmentError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClassificationDepartment(
    request: ClassificationsApi.UpdateClassificationDepartmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationDepartmentResponseDto, ClassificationsApi.UpdateClassificationDepartmentError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/departments/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateClassificationDepartmentRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: classificationDepartmentResponseDtoSchema },
        errorFactory: ClassificationsApi.UpdateClassificationDepartmentError,
      },
      options,
    );
  }

  /**
   * Update an employee
   *
   * @remarks
   * Update details about an existing employee.
   *
   * @returns Update an employee response
   *
   * @throws {@link ClassificationsApi.UpdateClassificationEmployeeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClassificationEmployee(
    request: ClassificationsApi.UpdateClassificationEmployeeRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationEmployeeResponseDto, ClassificationsApi.UpdateClassificationEmployeeError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/employees/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateClassificationEmployeeRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: classificationEmployeeResponseDtoSchema },
        errorFactory: ClassificationsApi.UpdateClassificationEmployeeError,
      },
      options,
    );
  }

  /**
   * Update an item
   *
   * @remarks
   * Update details about an existing item.
   *
   * @returns Update an item response
   *
   * @throws {@link ClassificationsApi.UpdateClassificationItemError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClassificationItem(
    request: ClassificationsApi.UpdateClassificationItemRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationItemResponseDto, ClassificationsApi.UpdateClassificationItemError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/items/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateClassificationItemRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: classificationItemResponseDtoSchema },
        errorFactory: ClassificationsApi.UpdateClassificationItemError,
      },
      options,
    );
  }

  /**
   * Update a job
   *
   * @remarks
   * Update details about an existing job.
   *
   * @returns Update a job response
   *
   * @throws {@link ClassificationsApi.UpdateClassificationJobError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClassificationJob(
    request: ClassificationsApi.UpdateClassificationJobRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationJobResponseDto, ClassificationsApi.UpdateClassificationJobError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/jobs/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateClassificationJobRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: classificationJobResponseDtoSchema },
        errorFactory: ClassificationsApi.UpdateClassificationJobError,
      },
      options,
    );
  }

  /**
   * Update a location
   *
   * @remarks
   * Update details about an existing location.
   *
   * @returns Update a location response
   *
   * @throws {@link ClassificationsApi.UpdateClassificationLocationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateClassificationLocation(
    request: ClassificationsApi.UpdateClassificationLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<ClassificationLocationResponseDto, ClassificationsApi.UpdateClassificationLocationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/classifications/locations/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateClassificationLocationRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: classificationLocationResponseDtoSchema },
        errorFactory: ClassificationsApi.UpdateClassificationLocationError,
      },
      options,
    );
  }
}

export namespace ClassificationsApi {
  export type ArchiveClassificationAccountingClassRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveClassificationAccountingClassRequestSchema: Schema<ArchiveClassificationAccountingClassRequest> =
    s.lazySchema(() =>
      s.object<ArchiveClassificationAccountingClassRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ArchiveClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveClassificationChartOfAccountsRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveClassificationChartOfAccountsRequestSchema: Schema<ArchiveClassificationChartOfAccountsRequest> =
    s.lazySchema(() =>
      s.object<ArchiveClassificationChartOfAccountsRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ArchiveClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveClassificationDepartmentRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveClassificationDepartmentRequestSchema: Schema<ArchiveClassificationDepartmentRequest> =
    s.lazySchema(() =>
      s.object<ArchiveClassificationDepartmentRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ArchiveClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveClassificationEmployeeRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveClassificationEmployeeRequestSchema: Schema<ArchiveClassificationEmployeeRequest> =
    s.lazySchema(() =>
      s.object<ArchiveClassificationEmployeeRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ArchiveClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveClassificationItemRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveClassificationItemRequestSchema: Schema<ArchiveClassificationItemRequest> =
    s.lazySchema(() =>
      s.object<ArchiveClassificationItemRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ArchiveClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveClassificationJobRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveClassificationJobRequestSchema: Schema<ArchiveClassificationJobRequest> = s.lazySchema(
    () =>
      s.object<ArchiveClassificationJobRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class ArchiveClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ArchiveClassificationLocationRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const archiveClassificationLocationRequestSchema: Schema<ArchiveClassificationLocationRequest> =
    s.lazySchema(() =>
      s.object<ArchiveClassificationLocationRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ArchiveClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkArchiveClassificationAccountingClassRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkArchiveClassificationChartOfAccountsRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkArchiveClassificationDepartmentRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkArchiveClassificationEmployeeRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkArchiveClassificationItemRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkArchiveClassificationJobRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkArchiveClassificationLocationRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkArchiveClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkArchiveClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkCreateClassificationAccountingClassRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationAccountingClassRequestDto[];
  };

  export const bulkCreateClassificationAccountingClassRequestSchema: Schema<BulkCreateClassificationAccountingClassRequest> =
    s.lazySchema(() =>
      s.object<BulkCreateClassificationAccountingClassRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => createClassificationAccountingClassRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkCreateClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkCreateClassificationChartOfAccountsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationChartOfAccountsRequestDto[];
  };

  export const bulkCreateClassificationChartOfAccountsRequestSchema: Schema<BulkCreateClassificationChartOfAccountsRequest> =
    s.lazySchema(() =>
      s.object<BulkCreateClassificationChartOfAccountsRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => createClassificationChartOfAccountsRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkCreateClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkCreateClassificationDepartmentRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationDepartmentRequestDto[];
  };

  export const bulkCreateClassificationDepartmentRequestSchema: Schema<BulkCreateClassificationDepartmentRequest> =
    s.lazySchema(() =>
      s.object<BulkCreateClassificationDepartmentRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => createClassificationDepartmentRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkCreateClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkCreateClassificationEmployeeRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationEmployeeRequestDto[];
  };

  export const bulkCreateClassificationEmployeeRequestSchema: Schema<BulkCreateClassificationEmployeeRequest> =
    s.lazySchema(() =>
      s.object<BulkCreateClassificationEmployeeRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => createClassificationEmployeeRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkCreateClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkCreateClassificationItemRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationItemRequestDto[];
  };

  export const bulkCreateClassificationItemRequestSchema: Schema<BulkCreateClassificationItemRequest> =
    s.lazySchema(() =>
      s.object<BulkCreateClassificationItemRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => createClassificationItemRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkCreateClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkCreateClassificationJobRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationJobRequestDto[];
  };

  export const bulkCreateClassificationJobRequestSchema: Schema<BulkCreateClassificationJobRequest> =
    s.lazySchema(() =>
      s.object<BulkCreateClassificationJobRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => createClassificationJobRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkCreateClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkCreateClassificationLocationRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationLocationRequestDto[];
  };

  export const bulkCreateClassificationLocationRequestSchema: Schema<BulkCreateClassificationLocationRequest> =
    s.lazySchema(() =>
      s.object<BulkCreateClassificationLocationRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => createClassificationLocationRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkCreateClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkCreateClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkRestoreClassificationAccountingClassRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkRestoreClassificationChartOfAccountsRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkRestoreClassificationDepartmentRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkRestoreClassificationEmployeeRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkRestoreClassificationItemRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkRestoreClassificationJobRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkRestoreClassificationLocationRequest = {
    ids: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class BulkRestoreClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkRestoreClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkUpdateClassificationAccountingClassRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationAccountingClassWithIdRequestDto[];
  };

  export const bulkUpdateClassificationAccountingClassRequestSchema: Schema<BulkUpdateClassificationAccountingClassRequest> =
    s.lazySchema(() =>
      s.object<BulkUpdateClassificationAccountingClassRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => updateClassificationAccountingClassWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkUpdateClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkUpdateClassificationChartOfAccountsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationChartOfAccountsWithIdRequestDto[];
  };

  export const bulkUpdateClassificationChartOfAccountsRequestSchema: Schema<BulkUpdateClassificationChartOfAccountsRequest> =
    s.lazySchema(() =>
      s.object<BulkUpdateClassificationChartOfAccountsRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => updateClassificationChartOfAccountsWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkUpdateClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkUpdateClassificationDepartmentRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationDepartmentWithIdRequestDto[];
  };

  export const bulkUpdateClassificationDepartmentRequestSchema: Schema<BulkUpdateClassificationDepartmentRequest> =
    s.lazySchema(() =>
      s.object<BulkUpdateClassificationDepartmentRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => updateClassificationDepartmentWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkUpdateClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkUpdateClassificationEmployeeRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationEmployeeWithIdRequestDto[];
  };

  export const bulkUpdateClassificationEmployeeRequestSchema: Schema<BulkUpdateClassificationEmployeeRequest> =
    s.lazySchema(() =>
      s.object<BulkUpdateClassificationEmployeeRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => updateClassificationEmployeeWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkUpdateClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkUpdateClassificationItemRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationItemWithIdRequestDto[];
  };

  export const bulkUpdateClassificationItemRequestSchema: Schema<BulkUpdateClassificationItemRequest> =
    s.lazySchema(() =>
      s.object<BulkUpdateClassificationItemRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => updateClassificationItemWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkUpdateClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkUpdateClassificationJobRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationJobWithIdRequestDto[];
  };

  export const bulkUpdateClassificationJobRequestSchema: Schema<BulkUpdateClassificationJobRequest> =
    s.lazySchema(() =>
      s.object<BulkUpdateClassificationJobRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => updateClassificationJobWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkUpdateClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type BulkUpdateClassificationLocationRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationLocationWithIdRequestDto[];
  };

  export const bulkUpdateClassificationLocationRequestSchema: Schema<BulkUpdateClassificationLocationRequest> =
    s.lazySchema(() =>
      s.object<BulkUpdateClassificationLocationRequest>({
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: s
          .array(s.lazy(() => updateClassificationLocationWithIdRequestDtoSchema))
          .check(s.minLength(1), s.maxLength(50)),
      }),
    );

  export class BulkUpdateClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkUpdateClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateClassificationAccountingClassRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationAccountingClassRequestDto;
  };

  export class CreateClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateClassificationChartOfAccountsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationChartOfAccountsRequestDto;
  };

  export class CreateClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateClassificationDepartmentRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationDepartmentRequestDto;
  };

  export class CreateClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateClassificationEmployeeRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationEmployeeRequestDto;
  };

  export class CreateClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateClassificationItemRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationItemRequestDto;
  };

  export class CreateClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateClassificationJobRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationJobRequestDto;
  };

  export class CreateClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateClassificationLocationRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateClassificationLocationRequestDto;
  };

  export class CreateClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetClassificationAccountingClassRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getClassificationAccountingClassRequestSchema: Schema<GetClassificationAccountingClassRequest> =
    s.lazySchema(() =>
      s.object<GetClassificationAccountingClassRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetClassificationChartOfAccountsRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getClassificationChartOfAccountsRequestSchema: Schema<GetClassificationChartOfAccountsRequest> =
    s.lazySchema(() =>
      s.object<GetClassificationChartOfAccountsRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetClassificationDepartmentRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getClassificationDepartmentRequestSchema: Schema<GetClassificationDepartmentRequest> =
    s.lazySchema(() =>
      s.object<GetClassificationDepartmentRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetClassificationEmployeeRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getClassificationEmployeeRequestSchema: Schema<GetClassificationEmployeeRequest> =
    s.lazySchema(() =>
      s.object<GetClassificationEmployeeRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetClassificationItemRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getClassificationItemRequestSchema: Schema<GetClassificationItemRequest> = s.lazySchema(() =>
    s.object<GetClassificationItemRequest>({
      id: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetClassificationJobRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getClassificationJobRequestSchema: Schema<GetClassificationJobRequest> = s.lazySchema(() =>
    s.object<GetClassificationJobRequest>({
      id: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetClassificationLocationRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getClassificationLocationRequestSchema: Schema<GetClassificationLocationRequest> =
    s.lazySchema(() =>
      s.object<GetClassificationLocationRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class GetClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListClassificationAccountingClassesRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listClassificationAccountingClassesRequestSchema: Schema<ListClassificationAccountingClassesRequest> =
    s.lazySchema(() =>
      s.object<ListClassificationAccountingClassesRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ListClassificationAccountingClassesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassificationAccountingClassesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListClassificationChartOfAccountsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listClassificationChartOfAccountsRequestSchema: Schema<ListClassificationChartOfAccountsRequest> =
    s.lazySchema(() =>
      s.object<ListClassificationChartOfAccountsRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ListClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListClassificationDepartmentsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listClassificationDepartmentsRequestSchema: Schema<ListClassificationDepartmentsRequest> =
    s.lazySchema(() =>
      s.object<ListClassificationDepartmentsRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ListClassificationDepartmentsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassificationDepartmentsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListClassificationEmployeesRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listClassificationEmployeesRequestSchema: Schema<ListClassificationEmployeesRequest> =
    s.lazySchema(() =>
      s.object<ListClassificationEmployeesRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ListClassificationEmployeesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassificationEmployeesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListClassificationItemsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listClassificationItemsRequestSchema: Schema<ListClassificationItemsRequest> = s.lazySchema(
    () =>
      s.object<ListClassificationItemsRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class ListClassificationItemsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassificationItemsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListClassificationJobsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listClassificationJobsRequestSchema: Schema<ListClassificationJobsRequest> = s.lazySchema(() =>
    s.object<ListClassificationJobsRequest>({
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      page: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class ListClassificationJobsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassificationJobsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListClassificationLocationsRequest = {
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const listClassificationLocationsRequestSchema: Schema<ListClassificationLocationsRequest> =
    s.lazySchema(() =>
      s.object<ListClassificationLocationsRequest>({
        max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
        sort: s.optionalNullable(s.string()),
        filters: s.optionalNullable(s.string()),
        page: s.optionalNullable(s.string()),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class ListClassificationLocationsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListClassificationLocationsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreClassificationAccountingClassRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreClassificationAccountingClassRequestSchema: Schema<RestoreClassificationAccountingClassRequest> =
    s.lazySchema(() =>
      s.object<RestoreClassificationAccountingClassRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class RestoreClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreClassificationChartOfAccountsRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreClassificationChartOfAccountsRequestSchema: Schema<RestoreClassificationChartOfAccountsRequest> =
    s.lazySchema(() =>
      s.object<RestoreClassificationChartOfAccountsRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class RestoreClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreClassificationDepartmentRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreClassificationDepartmentRequestSchema: Schema<RestoreClassificationDepartmentRequest> =
    s.lazySchema(() =>
      s.object<RestoreClassificationDepartmentRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class RestoreClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreClassificationEmployeeRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreClassificationEmployeeRequestSchema: Schema<RestoreClassificationEmployeeRequest> =
    s.lazySchema(() =>
      s.object<RestoreClassificationEmployeeRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class RestoreClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreClassificationItemRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreClassificationItemRequestSchema: Schema<RestoreClassificationItemRequest> =
    s.lazySchema(() =>
      s.object<RestoreClassificationItemRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class RestoreClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreClassificationJobRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreClassificationJobRequestSchema: Schema<RestoreClassificationJobRequest> = s.lazySchema(
    () =>
      s.object<RestoreClassificationJobRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class RestoreClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type RestoreClassificationLocationRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const restoreClassificationLocationRequestSchema: Schema<RestoreClassificationLocationRequest> =
    s.lazySchema(() =>
      s.object<RestoreClassificationLocationRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
    );

  export class RestoreClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<RestoreClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateClassificationAccountingClassRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationAccountingClassRequestDto;
  };

  export const updateClassificationAccountingClassRequestSchema: Schema<UpdateClassificationAccountingClassRequest> =
    s.lazySchema(() =>
      s.object<UpdateClassificationAccountingClassRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateClassificationAccountingClassRequestDtoSchema,
      }),
    );

  export class UpdateClassificationAccountingClassError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassificationAccountingClassError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateClassificationChartOfAccountsRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationChartOfAccountsRequestDto;
  };

  export const updateClassificationChartOfAccountsRequestSchema: Schema<UpdateClassificationChartOfAccountsRequest> =
    s.lazySchema(() =>
      s.object<UpdateClassificationChartOfAccountsRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateClassificationChartOfAccountsRequestDtoSchema,
      }),
    );

  export class UpdateClassificationChartOfAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassificationChartOfAccountsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateClassificationDepartmentRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationDepartmentRequestDto;
  };

  export const updateClassificationDepartmentRequestSchema: Schema<UpdateClassificationDepartmentRequest> =
    s.lazySchema(() =>
      s.object<UpdateClassificationDepartmentRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateClassificationDepartmentRequestDtoSchema,
      }),
    );

  export class UpdateClassificationDepartmentError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassificationDepartmentError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateClassificationEmployeeRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationEmployeeRequestDto;
  };

  export const updateClassificationEmployeeRequestSchema: Schema<UpdateClassificationEmployeeRequest> =
    s.lazySchema(() =>
      s.object<UpdateClassificationEmployeeRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateClassificationEmployeeRequestDtoSchema,
      }),
    );

  export class UpdateClassificationEmployeeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassificationEmployeeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateClassificationItemRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationItemRequestDto;
  };

  export const updateClassificationItemRequestSchema: Schema<UpdateClassificationItemRequest> = s.lazySchema(
    () =>
      s.object<UpdateClassificationItemRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateClassificationItemRequestDtoSchema,
      }),
  );

  export class UpdateClassificationItemError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassificationItemError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateClassificationJobRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationJobRequestDto;
  };

  export const updateClassificationJobRequestSchema: Schema<UpdateClassificationJobRequest> = s.lazySchema(
    () =>
      s.object<UpdateClassificationJobRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateClassificationJobRequestDtoSchema,
      }),
  );

  export class UpdateClassificationJobError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassificationJobError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateClassificationLocationRequest = {
    id: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: UpdateClassificationLocationRequestDto;
  };

  export const updateClassificationLocationRequestSchema: Schema<UpdateClassificationLocationRequest> =
    s.lazySchema(() =>
      s.object<UpdateClassificationLocationRequest>({
        id: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: updateClassificationLocationRequestDtoSchema,
      }),
    );

  export class UpdateClassificationLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateClassificationLocationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}

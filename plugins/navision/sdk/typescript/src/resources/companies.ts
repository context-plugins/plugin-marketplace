import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  automationCompanyCreateSchema,
  type AutomationCompanyCreate,
} from "../models/automation-company-create.js";
import {
  automationCompanyUpdateSchema,
  type AutomationCompanyUpdate,
} from "../models/automation-company-update.js";
import { automationCompanySchema, type AutomationCompany } from "../models/automation-company.js";
import {
  companiesApiAutomationCompaniesResponseSchema,
  type CompaniesApiAutomationCompaniesResponse,
} from "../models/companies-api-automation-companies-response.js";
import { companiesResponseSchema, type CompaniesResponse } from "../models/companies-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage automation companies
 */
export class Companies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Company
   *
   * @remarks
   * Creates a new company in the Business Central tenant.
   *
   * @returns Company created successfully
   *
   * @throws {@link Companies.CreateAutomationCompanyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAutomationCompany(
    request: Companies.CreateAutomationCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<AutomationCompany, Companies.CreateAutomationCompanyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/automationCompanies",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: automationCompanyCreateSchema },
      },
      {
        success: { kind: "json", schema: automationCompanySchema },
        errorFactory: Companies.CreateAutomationCompanyError,
      },
      options,
    );
  }

  /**
   * Delete an Automation Company
   *
   * @remarks
   * Deletes a company from the tenant.
   *
   * @returns Company deleted successfully
   *
   * @throws {@link Companies.DeleteAutomationCompanyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAutomationCompany(
    request: Companies.DeleteAutomationCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Companies.DeleteAutomationCompanyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/automationCompanies({automationCompany_id})",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "automationCompany_id", value: request.automationCompanyId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Companies.DeleteAutomationCompanyError,
      },
      options,
    );
  }

  /**
   * Get an Automation Company
   *
   * @remarks
   * Retrieves a specific automation company by ID.
   *
   * @returns Successfully retrieved automation company
   *
   * @throws {@link Companies.GetAutomationCompanyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAutomationCompany(
    request: Companies.GetAutomationCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<AutomationCompany, Companies.GetAutomationCompanyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/automationCompanies({automationCompany_id})",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "automationCompany_id", value: request.automationCompanyId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationCompanySchema },
        errorFactory: Companies.GetAutomationCompanyError,
      },
      options,
    );
  }

  /**
   * List Automation Companies
   *
   * @remarks
   * Returns a list of automation company objects.
   *
   * @returns Successfully retrieved automation companies
   *
   * @throws {@link Companies.ListAutomationCompaniesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAutomationCompanies(
    request: Companies.ListAutomationCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiAutomationCompaniesResponse, Companies.ListAutomationCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/automationCompanies",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiAutomationCompaniesResponseSchema },
        errorFactory: Companies.ListAutomationCompaniesError,
      },
      options,
    );
  }

  /**
   * List Companies
   *
   * @remarks
   * Returns a list of companies available for automation.
   *
   * @returns Successfully retrieved companies
   *
   * @throws {@link Companies.ListCompaniesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listCompanies(
    request: Companies.ListCompaniesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CompaniesResponse, Companies.ListCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi("/companies"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [],
        query: [{ name: "$filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesResponseSchema },
        errorFactory: Companies.ListCompaniesError,
      },
      options,
    );
  }

  /**
   * Update an Automation Company
   *
   * @remarks
   * Updates properties of an automation company (e.g., rename).
   *
   * @returns Company updated successfully
   *
   * @throws {@link Companies.UpdateAutomationCompanyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateAutomationCompany(
    request: Companies.UpdateAutomationCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<AutomationCompany, Companies.UpdateAutomationCompanyError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/automationCompanies({automationCompany_id})",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "automationCompany_id", value: request.automationCompanyId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: automationCompanyUpdateSchema },
      },
      {
        success: { kind: "json", schema: automationCompanySchema },
        errorFactory: Companies.UpdateAutomationCompanyError,
      },
      options,
    );
  }
}

export namespace Companies {
  export type CreateAutomationCompanyRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: AutomationCompanyCreate;
  };

  export class CreateAutomationCompanyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAutomationCompanyError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteAutomationCompanyRequest = {
    /** The unique identifier of the company */
    companyId: string;
    automationCompanyId: string;
  };

  export class DeleteAutomationCompanyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAutomationCompanyError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAutomationCompanyRequest = {
    /** The unique identifier of the company */
    companyId: string;
    automationCompanyId: string;
  };

  export class GetAutomationCompanyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAutomationCompanyError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListAutomationCompaniesRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListAutomationCompaniesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListAutomationCompaniesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListCompaniesRequest = {
    /**
     * OData filter expression to return targeted results (Business Central API/OData filtering).
     */
    filter?: string;
  };

  export class ListCompaniesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListCompaniesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateAutomationCompanyRequest = {
    /** The unique identifier of the company */
    companyId: string;
    automationCompanyId: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: AutomationCompanyUpdate;
  };

  export class UpdateAutomationCompanyError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAutomationCompanyError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  assignContractTemplateInputInternalSchema,
  type AssignContractTemplateInput,
} from "../models/assign-contract-template-input.js";
import {
  assignContractTemplateResponseSchema,
  type AssignContractTemplateResponse,
} from "../models/assign-contract-template-response.js";
import {
  contractTemplateInputSchema,
  type ContractTemplateInput,
} from "../models/contract-template-input.js";
import {
  contractTemplateResponseSchema,
  type ContractTemplateResponse,
} from "../models/contract-template-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Manage contract templates for PartnerOps resellers (T1/T2).
 */
export class ContractTemplates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Archive contract template
   *
   * @remarks
   * Soft-deletes (archives) a contract template owned by the authenticated tenant (from the bearer
   * token). Instantiated contracts are unaffected. Requires ContractTemplatesAdmin, DoiT API access
   * (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.
   *
   * @returns OK - Contract template archived.
   *
   * @throws {@link ContractTemplates.ArchiveContractTemplateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveContractTemplate(
    request: ContractTemplates.ArchiveContractTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContractTemplateResponse, ContractTemplates.ArchiveContractTemplateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/billing/v1/contract-templates/{templateID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "templateID", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contractTemplateResponseSchema },
        errorFactory: ContractTemplates.ArchiveContractTemplateError,
      },
      options,
    );
  }

  /**
   * Assign contract template
   *
   * @remarks
   * Applies a contract template owned by the authenticated tenant (from the bearer token) to child
   * customers, creating a draft contract for each. Drafts have no billing effect until each one is
   * completed and activated. The template must not be archived, and the current date must fall
   * within its eligibility window. Requires ContractTemplatesAdmin, DoiT API access
   * (`platform:externalApi`), and the `channelops:contracts:templates` entitlement.
   *
   * @returns Created - Draft contracts created for the specified customers.
   *
   * @throws {@link ContractTemplates.AssignContractTemplateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assignContractTemplate(
    request: ContractTemplates.AssignContractTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<AssignContractTemplateResponse, ContractTemplates.AssignContractTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/billing/v1/contract-templates/{templateID}/actions/assign"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "templateID", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assignContractTemplateInputInternalSchema },
      },
      {
        success: { kind: "json", schema: assignContractTemplateResponseSchema },
        errorFactory: ContractTemplates.AssignContractTemplateError,
      },
      options,
    );
  }

  /**
   * Create contract template
   *
   * @remarks
   * Creates a contract template for the authenticated tenant (from the bearer token). Requires
   * ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the
   * `channelops:contracts:templates` entitlement.
   *
   * @returns Created - Contract template created.
   *
   * @throws {@link ContractTemplates.CreateContractTemplateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContractTemplate(
    request: ContractTemplates.CreateContractTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContractTemplateResponse, ContractTemplates.CreateContractTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/billing/v1/contract-templates"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contractTemplateInputSchema },
      },
      {
        success: { kind: "json", schema: contractTemplateResponseSchema },
        errorFactory: ContractTemplates.CreateContractTemplateError,
      },
      options,
    );
  }

  /**
   * Get contract template
   *
   * @remarks
   * Returns a single contract template owned by the authenticated tenant (from the bearer token).
   * Requires ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the
   * `channelops:contracts:templates` entitlement.
   *
   * @returns OK - Contract template returned.
   *
   * @throws {@link ContractTemplates.GetContractTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContractTemplate(
    request: ContractTemplates.GetContractTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContractTemplateResponse, ContractTemplates.GetContractTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/v1/contract-templates/{templateID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "templateID", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contractTemplateResponseSchema },
        errorFactory: ContractTemplates.GetContractTemplateError,
      },
      options,
    );
  }

  /**
   * List contract templates
   *
   * @remarks
   * Lists contract templates owned by the authenticated tenant (from the bearer token). Requires
   * ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the
   * `channelops:contracts:templates` entitlement.
   *
   * @returns OK - Contract templates returned.
   *
   * @throws {@link ContractTemplates.ListContractTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContractTemplates(
    options?: RequestOptions,
  ): ApiPromise<ContractTemplateResponse[], ContractTemplates.ListContractTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/v1/contract-templates"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => contractTemplateResponseSchema)) },
        errorFactory: ContractTemplates.ListContractTemplatesError,
      },
      options,
    );
  }

  /**
   * Update contract template
   *
   * @remarks
   * Updates a contract template owned by the authenticated tenant (from the bearer token). Requires
   * ContractTemplatesAdmin, DoiT API access (`platform:externalApi`), and the
   * `channelops:contracts:templates` entitlement.
   *
   * @returns OK - Contract template updated.
   *
   * @throws {@link ContractTemplates.UpdateContractTemplateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContractTemplate(
    request: ContractTemplates.UpdateContractTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<ContractTemplateResponse, ContractTemplates.UpdateContractTemplateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/billing/v1/contract-templates/{templateID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "templateID", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contractTemplateInputSchema },
      },
      {
        success: { kind: "json", schema: contractTemplateResponseSchema },
        errorFactory: ContractTemplates.UpdateContractTemplateError,
      },
      options,
    );
  }
}

export namespace ContractTemplates {
  export type ArchiveContractTemplateRequest = {
    templateId: string;
  };

  export class ArchiveContractTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveContractTemplateError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AssignContractTemplateRequest = {
    /** Identifier of the contract template to apply. */
    templateId: string;
    body: AssignContractTemplateInput;
  };

  export class AssignContractTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssignContractTemplateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateContractTemplateRequest = {
    body: ContractTemplateInput;
  };

  export class CreateContractTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContractTemplateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetContractTemplateRequest = {
    templateId: string;
  };

  export class GetContractTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContractTemplateError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListContractTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListContractTemplatesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateContractTemplateRequest = {
    templateId: string;
    body: ContractTemplateInput;
  };

  export class UpdateContractTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContractTemplateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

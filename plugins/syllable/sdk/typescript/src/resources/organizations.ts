import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { organizationResponseSchema, type OrganizationResponse } from "../models/organization-response.js";
import { deleteCommentsSchema, type DeleteComments } from "../models/unions/delete-comments.js";
import { description9Schema, type Description9 } from "../models/unions/description9.js";
import { domainsSchema, type Domains } from "../models/unions/domains.js";
import { logoSchema, type Logo } from "../models/unions/logo.js";
import { samlProviderIdSchema, type SamlProviderId } from "../models/unions/saml-provider-id.js";
import { updateCommentsSchema, type UpdateComments } from "../models/unions/update-comments.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to organizations.
 */
export class Organizations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Organization
   *
   * @remarks
   * Create a new organization.
   *
   * @returns Successful Response
   *
   * @throws {@link Organizations.OrganizationsCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationsCreate(
    request: Organizations.OrganizationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationResponse, Organizations.OrganizationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/organizations/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "logo", value: request.logo },
            { kind: "text", name: "display_name", value: request.displayName, schema: s.string() },
            {
              kind: "text",
              name: "description",
              value: request.description,
              schema: s.optional(s.lazy(() => description9Schema)),
            },
            {
              kind: "text",
              name: "domains",
              value: request.domains,
              schema: s.optional(s.lazy(() => domainsSchema)),
            },
            {
              kind: "text",
              name: "saml_provider_id",
              value: request.samlProviderId,
              schema: s.optional(s.lazy(() => samlProviderIdSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: organizationResponseSchema },
        errorFactory: Organizations.OrganizationsCreateError,
      },
      options,
    );
  }

  /**
   * Delete Current Organization
   *
   * @remarks
   * Delete the current organization and all its users.
   *
   * @returns Successful Response
   *
   * @throws {@link Organizations.OrganizationsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationsDelete(
    request: Organizations.OrganizationsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Organizations.OrganizationsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/organizations/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "delete_comments",
              value: request.deleteComments,
              schema: s.optional(s.lazy(() => deleteCommentsSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Organizations.OrganizationsDeleteError,
      },
      options,
    );
  }

  /**
   * Get Current Organization
   *
   * @remarks
   * Fetch the current organization.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationsGet(options?: RequestOptions): ApiPromise<OrganizationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/organizations/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Current Organization
   *
   * @remarks
   * Update the current organization.
   *
   * @returns Successful Response
   *
   * @throws {@link Organizations.OrganizationsUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  organizationsUpdate(
    request: Organizations.OrganizationsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<OrganizationResponse, Organizations.OrganizationsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/organizations/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "display_name", value: request.displayName, schema: s.string() },
            { kind: "text", name: "logo", value: request.logo, schema: s.optional(s.lazy(() => logoSchema)) },
            {
              kind: "text",
              name: "description",
              value: request.description,
              schema: s.optional(s.lazy(() => description9Schema)),
            },
            {
              kind: "text",
              name: "domains",
              value: request.domains,
              schema: s.optional(s.lazy(() => domainsSchema)),
            },
            {
              kind: "text",
              name: "saml_provider_id",
              value: request.samlProviderId,
              schema: s.optional(s.lazy(() => samlProviderIdSchema)),
            },
            {
              kind: "text",
              name: "update_comments",
              value: request.updateComments,
              schema: s.optional(s.lazy(() => updateCommentsSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: organizationResponseSchema },
        errorFactory: Organizations.OrganizationsUpdateError,
      },
      options,
    );
  }
}

export namespace Organizations {
  export type OrganizationsCreateRequest = {
    /** The organization logo image file to upload. Must be a PNG file and 120x120 pixels. */
    logo: FileInput;
    /** The human-readable display name of the organization */
    displayName: string;
    /** Description of the organization */
    description?: Description9;
    /**
     * Comma-delimited list of domains that users at the organization may have in their email
     * addresses
     */
    domains?: Domains;
    /** SAML provider ID for user authentication */
    samlProviderId?: SamlProviderId;
  };

  export class OrganizationsCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationsCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OrganizationsDeleteRequest = {
    /** Comments explaining the deletion */
    deleteComments?: DeleteComments;
  };

  export class OrganizationsDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationsDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OrganizationsUpdateRequest = {
    /** The human-readable display name of the organization */
    displayName: string;
    /**
     * The organization logo image file to upload. Must be a PNG file and 120x120 pixels. If not
     * provided, the logo will not be updated.
     */
    logo?: Logo;
    /** Description of the organization */
    description?: Description9;
    /**
     * Comma-delimited list of domains that users at the organization may have in their email
     * addresses
     */
    domains?: Domains;
    /** SAML provider ID for user authentication */
    samlProviderId?: SamlProviderId;
    /** Comments about the update */
    updateComments?: UpdateComments;
  };

  export class OrganizationsUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OrganizationsUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}

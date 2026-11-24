import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import { organizationListSchema, type OrganizationList } from "../models/organization-list.js";
import { organizationSchema, type Organization } from "../models/organization.js";
import { stackListSchema, type StackList } from "../models/stack-list.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing Contentstack organizations, including user invitations, roles, stacks, and
 * audit logs at the organization level.
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
   * Get all organizations
   *
   * @remarks
   * Returns a list of all Contentstack organizations that the authenticated user is a member of,
   * along with their roles and permissions.
   *
   * @returns A list of organizations the user belongs to.
   *
   * @throws {@link Organizations.GetAllOrganizationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllOrganizations(
    options?: RequestOptions,
  ): ApiPromise<OrganizationList, Organizations.GetAllOrganizationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/organizations"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationListSchema },
        errorFactory: Organizations.GetAllOrganizationsError,
      },
      options,
    );
  }

  /**
   * Get an organization
   *
   * @remarks
   * Retrieves details for a specific organization identified by its UID, including plan information
   * and configuration settings.
   *
   * @returns The requested organization details.
   *
   * @throws {@link Organizations.GetOrganizationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganization(
    request: Organizations.GetOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<Organization, Organizations.GetOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/organizations/{organization_uid}"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationSchema },
        errorFactory: Organizations.GetOrganizationError,
      },
      options,
    );
  }

  /**
   * Get organization stacks
   *
   * @remarks
   * Returns a list of all stacks within a given organization that the authenticated user has access
   * to.
   *
   * @returns A list of stacks in the organization.
   *
   * @throws {@link Organizations.GetOrganizationStacksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganizationStacks(
    request: Organizations.GetOrganizationStacksRequest,
    options?: RequestOptions,
  ): ApiPromise<StackList, Organizations.GetOrganizationStacksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi(
          "/organizations/{organization_uid}/stacks",
        ),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stackListSchema },
        errorFactory: Organizations.GetOrganizationStacksError,
      },
      options,
    );
  }
}

export namespace Organizations {
  export class GetAllOrganizationsError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllOrganizationsError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type GetOrganizationRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class GetOrganizationError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Declared<"error22", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 404, kind: "error22", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type GetOrganizationStacksRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class GetOrganizationStacksError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationStacksError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }
}

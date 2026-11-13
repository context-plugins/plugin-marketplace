import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { gristErrorSchema, type GristError } from "../models/grist-error.js";
import { orgAccessReadSchema, type OrgAccessRead } from "../models/org-access-read.js";
import { orgParametersSchema, type OrgParameters } from "../models/org-parameters.js";
import { orgSchema, type Org } from "../models/org.js";
import { orgsAccessRequestSchema, type OrgsAccessRequest } from "../models/orgs-access-request.js";
import { orgsUsageResponseSchema, type OrgsUsageResponse } from "../models/orgs-usage-response.js";
import { orgIdSchema, type OrgId } from "../models/unions/org-id.js";
import { orgsAccessResponseSchema, type OrgsAccessResponse } from "../models/unions/orgs-access-response.js";
import { orgsResponseSchema, type OrgsResponse } from "../models/unions/orgs-response.js";
import type { Servers } from "../servers.js";

/**
 * Team sites and personal spaces are called 'orgs' in the API.
 */
export class Orgs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete an org
   *
   * @returns Success
   *
   * @throws {@link Orgs.DeleteOrgError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOrg(
    request: Orgs.DeleteOrgRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgsResponse, Orgs.DeleteOrgError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/orgs/{orgId}/{name}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "orgId", value: request.orgId, schema: orgIdSchema },
          { name: "name", value: request.name, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orgsResponseSchema },
        errorFactory: Orgs.DeleteOrgError,
      },
      options,
    );
  }

  /**
   * Describe an org
   *
   * @returns An organization
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeOrg(request: Orgs.DescribeOrgRequest, options?: RequestOptions): ApiPromise<Org, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orgs/{orgId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "orgId", value: request.orgId, schema: orgIdSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orgSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get organization usage summary
   *
   * @remarks
   * Get usage statistics for all non-deleted documents in the organization. Only accessible to
   * organization owners.
   *
   * @returns Usage summary
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrgUsage(
    request: Orgs.GetOrgUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgsUsageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orgs/{orgId}/usage"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "orgId", value: request.orgId, schema: orgIdSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orgsUsageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List users with access to org
   *
   * @returns Users with access to org
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOrgAccess(
    request: Orgs.ListOrgAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgAccessRead, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orgs/{orgId}/access"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "orgId", value: request.orgId, schema: orgIdSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orgAccessReadSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List the orgs you have access to
   *
   * @remarks
   * This enumerates all the team sites or personal areas available.
   *
   * @returns An array of organizations
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOrgs(options?: RequestOptions): ApiPromise<Org[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orgs"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => orgSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Modify an org
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyOrg(request: Orgs.ModifyOrgRequest, options?: RequestOptions): ApiPromise<OrgsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/orgs/{orgId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "orgId", value: request.orgId, schema: orgIdSchema }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: orgParametersSchema },
      },
      {
        success: { kind: "json", schema: orgsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Change who has access to org
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyOrgAccess(
    request: Orgs.ModifyOrgAccessRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgsAccessResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/orgs/{orgId}/access"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "orgId", value: request.orgId, schema: orgIdSchema }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: orgsAccessRequestSchema },
      },
      {
        success: { kind: "json", schema: orgsAccessResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Orgs {
  export type DeleteOrgRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
    /** The organization name */
    name: string;
  };

  export class DeleteOrgError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOrgError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type DescribeOrgRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
  };

  export type GetOrgUsageRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
  };

  export type ListOrgAccessRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
  };

  export type ModifyOrgRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
    /** the changes to make */
    body: OrgParameters;
  };

  export type ModifyOrgAccessRequest = {
    /**
     * This can be an integer id, or a string subdomain (e.g. `gristlabs`), or `current` if the org
     * is implied by the domain in the url
     */
    orgId: OrgId;
    /** the changes to make */
    body: OrgsAccessRequest;
  };
}

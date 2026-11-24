import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commitmentPolicyDetailInternalSchema,
  type CommitmentPolicyDetail,
} from "../models/commitment-policy-detail.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import {
  ps4CommitmentsV1GeneralPoliciesResponseInternalSchema,
  type Ps4CommitmentsV1GeneralPoliciesResponse,
} from "../models/ps4-commitments-v1-general-policies-response.js";
import type { Servers } from "../servers.js";

/**
 * Cloud-agnostic PerfectScale for Commitments resources — commitment policies shared by AWS and
 * GCP.
 */
export class PerfectScaleForCommitmentsGeneral {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a commitment policy
   *
   * @remarks
   * Returns one commitment policy by id, with its creation and last-update times and the list of
   * account × product-line scopes it is explicitly assigned to across AWS and GCP.
   *
   * `assignments` lists explicit assignments only. An account whose settings have not yet been
   * materialized falls back to `balanced` implicitly and does not appear here, even though the
   * settings endpoints report it as `balanced`. On AWS the assignment is currently recorded per
   * tenant and applied to every onboarded organization, so each organization appears once per
   * product line. The list is not paginated.
   *
   * Resolving assignments reads every onboarded account on both clouds. If either cloud cannot be
   * queried the request fails rather than returning a partial list.
   *
   * @returns The commitment policy with its assignments.
   *
   * @throws {@link PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCommitmentPolicy(
    request: PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<CommitmentPolicyDetail, PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/general/policies/{policyId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "policyId", value: request.policyId, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commitmentPolicyDetailInternalSchema },
        errorFactory: PerfectScaleForCommitmentsGeneral.GetCommitmentPolicyError,
      },
      options,
    );
  }

  /**
   * List commitment policies
   *
   * @remarks
   * Returns every commitment policy available to the tenant: the three built-in policies
   * (`conservative`, `balanced`, `max_savings`) followed by the tenant's own custom policies.
   *
   * Commitment policies are cloud-agnostic. A single catalog is shared by AWS and GCP, and the same
   * policy may be assigned to AWS and GCP product lines alike.
   *
   * Built-in policies are listed first, ordered from least to most aggressive target coverage;
   * custom policies follow in creation order. Percentage parameters are expressed as `1`–`100`, as
   * entered in the DoiT Console. This differs from the coverage and utilization fields on
   * recommendations and inventory, which are fractions from 0 to 1.
   *
   * This endpoint is read-only. Custom policies are created, edited and deleted in the DoiT Console
   * on the Commitment Policies page.
   *
   * @returns One page of the tenant's commitment policies.
   *
   * @throws {@link PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCommitmentPolicies(
    request: PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    Ps4CommitmentsV1GeneralPoliciesResponse,
    PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ps4commitments/v1/general/policies"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ps4CommitmentsV1GeneralPoliciesResponseInternalSchema },
        errorFactory: PerfectScaleForCommitmentsGeneral.ListCommitmentPoliciesError,
      },
      options,
    );
  }
}

export namespace PerfectScaleForCommitmentsGeneral {
  export type GetCommitmentPolicyRequest = {
    /**
     * Commitment policy id. Built-in policies use `conservative`, `balanced` or `max_savings`;
     * custom policies have an opaque id returned by the list endpoint.
     */
    policyId: string;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const getCommitmentPolicyRequestSchema: Schema<GetCommitmentPolicyRequest> = s.lazySchema(() =>
    s.object<GetCommitmentPolicyRequest>({
      policyId: s.string().check(s.pattern("^[A-Za-z0-9_-]{1,64}$")),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class GetCommitmentPolicyError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCommitmentPolicyError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListCommitmentPoliciesRequest = {
    /**
     * Opaque cursor token returned by a previous list response. Omit to start from the beginning;
     * an empty or absent token in a response means there are no more results. Do not parse it. A
     * structurally invalid cursor returns `400` with code `pagination_token_invalid`; an expired
     * cursor returns `400` with code `pagination_token_expired` — restart pagination from the
     * beginning.
     */
    pageToken?: string;
    /**
     * Maximum number of items to return. Server may return fewer. Defaults to 50; maximum 500.
     *
     * @default 50
     */
    maxResults?: number;
    /**
     * Customer (tenant) ID for the request. This is separate from authentication: you still pass
     * your personal or service account API token in the `Authorization` header (`Bearer <token>`).
     * See [Get Started](https://developer.doit.com/docs/start).
     *
     * **When to omit (most callers):** If your personal or service account token belongs to a
     * single customer, omit this header. The API resolves that customer from the token.
     *
     * **When to send:** If your credential can access more than one customer, set `X-Tenant-Id` to
     * the customer ID you want to act on. A service account can select an active direct or nested
     * descendant of its home customer; the endpoint's normal permissions, entitlements, and
     * resource-ownership checks still apply. A service-account target outside that customer subtree
     * returns `403 Forbidden`. Prefer this header over the legacy `customerContext` query
     * parameter, which only applies to legacy API keys and is ignored by personal and service
     * account tokens.
     */
    xTenantId?: string;
  };

  export const listCommitmentPoliciesRequestSchema: Schema<ListCommitmentPoliciesRequest> = s.lazySchema(() =>
    s.object<ListCommitmentPoliciesRequest>({
      pageToken: s.optional(s.string()),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      xTenantId: s.optional(s.string()),
    }),
  );

  export class ListCommitmentPoliciesError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCommitmentPoliciesError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 503, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}

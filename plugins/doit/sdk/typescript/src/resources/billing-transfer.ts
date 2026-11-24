import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  billingTransferProblemDetailsInternalSchema,
  type BillingTransferProblemDetails,
} from "../models/billing-transfer-problem-details.js";
import {
  endCustomerMappingBatchCreateInternalSchema,
  type EndCustomerMappingBatchCreate,
} from "../models/end-customer-mapping-batch-create.js";
import {
  endCustomerMappingBatchResultSchema,
  type EndCustomerMappingBatchResult,
} from "../models/end-customer-mapping-batch-result.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  listEndCustomersResponseSchema,
  type ListEndCustomersResponse,
} from "../models/list-end-customers-response.js";
import {
  listResellerAccountsResponseSchema,
  type ListResellerAccountsResponse,
} from "../models/list-reseller-accounts-response.js";
import {
  listResellerAccountsWithTenantsResponseSchema,
  type ListResellerAccountsWithTenantsResponse,
} from "../models/list-reseller-accounts-with-tenants-response.js";
import {
  programManagementAccountListSchema,
  type ProgramManagementAccountList,
} from "../models/program-management-account-list.js";
import {
  programManagementAccountsStatusResponseSchema,
  type ProgramManagementAccountsStatusResponse,
} from "../models/program-management-accounts-status-response.js";
import {
  resellerHandshakeBatchCreateInternalSchema,
  resellerHandshakeBatchCreateSchema,
  type ResellerHandshakeBatchCreate,
} from "../models/reseller-handshake-batch-create.js";
import {
  resellerHandshakeBatchResultSchema,
  type ResellerHandshakeBatchResult,
} from "../models/reseller-handshake-batch-result.js";
import type { Servers } from "../servers.js";

/**
 * Manage AWS billing-transfer mappings between distributors and resellers and between resellers and
 * end customers, and list program management accounts.
 */
export class BillingTransfer {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create end-customer mappings (batch)
   *
   * @remarks
   * Maps end-customer AWS accounts under a reseller's PMA to their DoiT tenant, as part of AWS
   * billing transfer onboarding. Reseller-only; distributors are explicitly denied (`403`).
   *
   * Unlike `POST /billingtransfer/v1/resellerhandshakes`, this endpoint has no `Idempotency-Key`
   * requirement and no `dryRun` support.
   *
   * This path is a deliberate exception to the de-hyphenation convention used by the sibling
   * `resellerhandshakes` and `programmanagementaccounts` paths — it stays hyphenated to match the
   * existing Go route and its console-facing equivalent.
   *
   * Each item in the batch is processed independently; per-item outcomes are returned in
   * `results[]` with HTTP `200`. Malformed items are rejected up front and reported in
   * `invalidItems` without processing any of the batch.
   *
   * @returns OK - Batch processed; see `results` for per-item outcomes and `invalidItems` for any
   * items rejected before processing.
   *
   * @throws {@link BillingTransfer.CreateBillingTransferEndCustomerMappingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBillingTransferEndCustomerMappings(
    request: BillingTransfer.CreateBillingTransferEndCustomerMappingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EndCustomerMappingBatchResult,
    BillingTransfer.CreateBillingTransferEndCustomerMappingsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/billingtransfer/v1/end-customer-mappings"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: endCustomerMappingBatchCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: endCustomerMappingBatchResultSchema },
        errorFactory: BillingTransfer.CreateBillingTransferEndCustomerMappingsError,
      },
      options,
    );
  }

  /**
   * Create reseller handshakes (batch)
   *
   * @remarks
   * Maps reseller to distributor; also sends the handshake if required, as part of AWS billing
   * transfer onboarding. Distributor-only; callers without the ChannelOps distributor tier
   * entitlement receive `403`.
   *
   * Each item in the batch is processed independently; per-item outcomes are returned in
   * `results[]` with HTTP `200` even when some items fail. Malformed items (missing fields,
   * duplicate `resellerPmaAccountId` within the batch) are rejected up front with `422` and
   * reported in `invalidItems`, and none of the batch is processed in that case.
   *
   * @returns OK - Batch processed; see `results` and `summary` for per-item outcomes.
   *
   * @throws {@link BillingTransfer.CreateBillingTransferResellerHandshakesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBillingTransferResellerHandshakes(
    request: BillingTransfer.CreateBillingTransferResellerHandshakesRequest,
    options?: RequestOptions,
  ): ApiPromise<ResellerHandshakeBatchResult, BillingTransfer.CreateBillingTransferResellerHandshakesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/billingtransfer/v1/resellerhandshakes"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() },
          { name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) },
        ],
        body: { kind: "json", value: request.body, schema: resellerHandshakeBatchCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: resellerHandshakeBatchResultSchema },
        errorFactory: BillingTransfer.CreateBillingTransferResellerHandshakesError,
      },
      options,
    );
  }

  /**
   * Get program management account status
   *
   * @remarks
   * Lightweight polling surface for the onboarding wizard: returns each of the caller's PMAs with
   * only its IAM status/diff and timestamps — no tenant fan-out, no handshake aggregation, no
   * pagination. Distributor-only.
   *
   * @returns OK
   *
   * @throws {@link BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBillingTransferProgramManagementAccountsStatus(
    request: BillingTransfer.GetBillingTransferProgramManagementAccountsStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ProgramManagementAccountsStatusResponse,
    BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billingtransfer/v1/programmanagementaccounts/status"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: programManagementAccountsStatusResponseSchema },
        errorFactory: BillingTransfer.GetBillingTransferProgramManagementAccountsStatusError,
      },
      options,
    );
  }

  /**
   * List end-customers under a reseller PMA
   *
   * @remarks
   * Lists the end-customer AWS account mappings under a reseller's program management account,
   * identified by `dpmaId` and `resellerPmaAccountId`. Callable by the reseller who owns the PMA or
   * the distributor who owns the DPMA.
   *
   * @returns OK
   *
   * @throws {@link BillingTransfer.ListBillingTransferEndCustomersError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillingTransferEndCustomers(
    request: BillingTransfer.ListBillingTransferEndCustomersRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billingtransfer/v1/end-customers"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "dpmaId", value: request.dpmaId, schema: s.string() },
          { name: "resellerPmaAccountId", value: request.resellerPmaAccountId, schema: s.string() },
          { name: "includeRevoked", value: request.includeRevoked, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEndCustomersResponseSchema },
        errorFactory: BillingTransfer.ListBillingTransferEndCustomersError,
      },
      options,
    );
  }

  /**
   * List end-customers under a reseller PMA, by reseller PMA alone
   *
   * @remarks
   * Same result as `GET /billingtransfer/v1/end-customers`, identified by `resellerPmaAccountId`
   * alone (no `dpmaId` needed). Callable by the reseller who owns the PMA or the distributor who
   * owns its DPMA.
   *
   * @returns OK
   *
   * @throws {@link BillingTransfer.ListBillingTransferEndCustomersByResellerError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillingTransferEndCustomersByReseller(
    request: BillingTransfer.ListBillingTransferEndCustomersByResellerRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEndCustomersResponse, BillingTransfer.ListBillingTransferEndCustomersByResellerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/billingtransfer/v1/resellers/{resellerPmaAccountId}/end-customers",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "resellerPmaAccountId", value: request.resellerPmaAccountId, schema: s.string() },
        ],
        query: [
          { name: "includeRevoked", value: request.includeRevoked, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEndCustomersResponseSchema },
        errorFactory: BillingTransfer.ListBillingTransferEndCustomersByResellerError,
      },
      options,
    );
  }

  /**
   * List program management accounts
   *
   * @remarks
   * Lists the caller's program management accounts (PMAs) and the reseller tenants mapped to each
   * one, including AWS Organizations handshake status per account. Distributor-only.
   *
   * @returns OK
   *
   * @throws {@link BillingTransfer.ListBillingTransferProgramManagementAccountsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillingTransferProgramManagementAccounts(
    request: BillingTransfer.ListBillingTransferProgramManagementAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ProgramManagementAccountList,
    BillingTransfer.ListBillingTransferProgramManagementAccountsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billingtransfer/v1/programmanagementaccounts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: programManagementAccountListSchema },
        errorFactory: BillingTransfer.ListBillingTransferProgramManagementAccountsError,
      },
      options,
    );
  }

  /**
   * List the caller's reseller PMA nodes
   *
   * @remarks
   * Lists every reseller program management account (RPMA) node belonging to the calling reseller,
   * with handshake state and status but without end-customer tenants — the reseller-tier analog of
   * `GET /billingtransfer/v1/programmanagementaccounts`.
   *
   * @returns OK
   *
   * @throws {@link BillingTransfer.ListBillingTransferResellerAccountsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillingTransferResellerAccounts(
    request: BillingTransfer.ListBillingTransferResellerAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResellerAccountsResponse, BillingTransfer.ListBillingTransferResellerAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billingtransfer/v1/reseller-accounts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResellerAccountsResponseSchema },
        errorFactory: BillingTransfer.ListBillingTransferResellerAccountsError,
      },
      options,
    );
  }

  /**
   * List the caller's reseller PMA nodes with their end-customer tenants
   *
   * @remarks
   * Lists every reseller PMA node belonging to the calling reseller, each with the end-customer
   * tenants connected under it — the reseller-tier analog of `GET
   * /billingtransfer/v1/programmanagementaccounts`. `region`, `iamStatus` and `lastRefreshTime` are
   * inherited from the parent DPMA root; the reseller node itself carries no IAM/region metadata of
   * its own.
   *
   * @returns OK
   *
   * @throws {@link BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillingTransferResellerAccountsWithTenants(
    request: BillingTransfer.ListBillingTransferResellerAccountsWithTenantsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListResellerAccountsWithTenantsResponse,
    BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billingtransfer/v1/reseller-accounts/end-customers"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "includeRevoked", value: request.includeRevoked, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResellerAccountsWithTenantsResponseSchema },
        errorFactory: BillingTransfer.ListBillingTransferResellerAccountsWithTenantsError,
      },
      options,
    );
  }
}

export namespace BillingTransfer {
  export type CreateBillingTransferEndCustomerMappingsRequest = {
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
    body: EndCustomerMappingBatchCreate;
  };

  export class CreateBillingTransferEndCustomerMappingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"billingTransferProblemDetails", BillingTransferProblemDetails>
      | Declared<"billingTransferProblemDetails2", BillingTransferProblemDetails>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBillingTransferEndCustomerMappingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "billingTransferProblemDetails",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      {
        on: 422,
        kind: "billingTransferProblemDetails2",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateBillingTransferResellerHandshakesRequest = {
    /**
     * If `true`, validates the batch and simulates the outcome without issuing any AWS
     * Organizations handshakes. The response shape is identical to a real execution.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
     * Re-submitting the same key with the same request returns the cached response without
     * re-executing side effects.
     */
    idempotencyKey: string;
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
    body: ResellerHandshakeBatchCreate;
  };

  export const createBillingTransferResellerHandshakesRequestSchema: Schema<CreateBillingTransferResellerHandshakesRequest> =
    s.lazySchema(() =>
      s.object<CreateBillingTransferResellerHandshakesRequest>({
        dryRun: s.defaulted(s.boolean(), false),
        idempotencyKey: s.string().check(s.maxLength(255)),
        xTenantId: s.optional(s.string()),
        body: resellerHandshakeBatchCreateSchema,
      }),
    );

  export class CreateBillingTransferResellerHandshakesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"billingTransferProblemDetails", BillingTransferProblemDetails>
      | Declared<"billingTransferProblemDetails2", BillingTransferProblemDetails>
      | Declared<"error3", Error>
      | Declared<"billingTransferProblemDetails3", BillingTransferProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBillingTransferResellerHandshakesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "billingTransferProblemDetails",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      {
        on: 422,
        kind: "billingTransferProblemDetails2",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      {
        on: 502,
        kind: "billingTransferProblemDetails3",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
    ];
  }

  export type GetBillingTransferProgramManagementAccountsStatusRequest = {
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

  export class GetBillingTransferProgramManagementAccountsStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillingTransferProgramManagementAccountsStatusError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListBillingTransferEndCustomersRequest = {
    /** DPMA ID that owns the reseller PMA referenced by `resellerPmaAccountId`. */
    dpmaId: string;
    /** 12-digit AWS account ID of the reseller's program management account. */
    resellerPmaAccountId: string;
    /**
     * If `true`, includes end-customer mappings that have been revoked. Defaults to `false`
     * (revoked mappings are excluded).
     *
     * @default false
     */
    includeRevoked?: boolean;
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

  export class ListBillingTransferEndCustomersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"billingTransferProblemDetails", BillingTransferProblemDetails>
      | Declared<"billingTransferProblemDetails2", BillingTransferProblemDetails>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillingTransferEndCustomersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "billingTransferProblemDetails",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      {
        on: 404,
        kind: "billingTransferProblemDetails2",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListBillingTransferEndCustomersByResellerRequest = {
    /** 12-digit AWS account ID of the reseller's program management account. */
    resellerPmaAccountId: string;
    /**
     * If `true`, includes end-customer mappings that have been revoked. Defaults to `false`
     * (revoked mappings are excluded).
     *
     * @default false
     */
    includeRevoked?: boolean;
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

  export class ListBillingTransferEndCustomersByResellerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"billingTransferProblemDetails", BillingTransferProblemDetails>
      | Declared<"billingTransferProblemDetails2", BillingTransferProblemDetails>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillingTransferEndCustomersByResellerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "billingTransferProblemDetails",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      {
        on: 404,
        kind: "billingTransferProblemDetails2",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListBillingTransferProgramManagementAccountsRequest = {
    /**
     * The maximum number of results to return in a single page. Use the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
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

  export class ListBillingTransferProgramManagementAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillingTransferProgramManagementAccountsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListBillingTransferResellerAccountsRequest = {
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

  export class ListBillingTransferResellerAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"billingTransferProblemDetails", BillingTransferProblemDetails>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillingTransferResellerAccountsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "billingTransferProblemDetails",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListBillingTransferResellerAccountsWithTenantsRequest = {
    /**
     * If `true`, includes end-customer mappings that have been revoked. Defaults to `false`
     * (revoked mappings are excluded).
     *
     * @default false
     */
    includeRevoked?: boolean;
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

  export class ListBillingTransferResellerAccountsWithTenantsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"billingTransferProblemDetails", BillingTransferProblemDetails>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillingTransferResellerAccountsWithTenantsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      {
        on: 403,
        kind: "billingTransferProblemDetails",
        decode: { kind: "json", schema: billingTransferProblemDetailsInternalSchema },
      },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

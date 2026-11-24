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
  billingExplainerCustomerInternalSchema,
  type BillingExplainerCustomer,
} from "../models/billing-explainer-customer.js";
import {
  entityInvoiceExplainerInternalSchema,
  type EntityInvoiceExplainer,
} from "../models/entity-invoice-explainer.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

/**
 * Explain month-over-month changes in invoiced cloud costs.
 */
export class BillingExplainerApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a per-payer billing explainer
   *
   * @remarks
   * Returns the invoiced cost changes for each payer in the authenticated tenant.
   *
   * @returns Billing explainer returned.
   *
   * @throws {@link BillingExplainerApi.GetBillingExplainerPerPayerError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBillingExplainerPerPayer(
    request: BillingExplainerApi.GetBillingExplainerPerPayerRequest,
    options?: RequestOptions,
  ): ApiPromise<BillingExplainerCustomer, BillingExplainerApi.GetBillingExplainerPerPayerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/v1/billing-explainers/{invoiceMonth}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "invoiceMonth", value: request.invoiceMonth, schema: s.string() }],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingExplainerCustomerInternalSchema },
        errorFactory: BillingExplainerApi.GetBillingExplainerPerPayerError,
      },
      options,
    );
  }

  /**
   * Retrieve an entity invoice explainer
   *
   * @remarks
   * Returns invoiced cost changes for an invoice owned by the specified billing profile in the
   * authenticated tenant.
   *
   * @returns Billing explainer returned.
   *
   * @throws {@link BillingExplainerApi.GetEntityInvoiceExplainerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntityInvoiceExplainer(
    request: BillingExplainerApi.GetEntityInvoiceExplainerRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityInvoiceExplainer, BillingExplainerApi.GetEntityInvoiceExplainerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/billing/v1/billing-profiles/{billingProfileId}/billing-explainers/{invoiceNumber}",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "billingProfileId", value: request.billingProfileId, schema: s.string() },
          { name: "invoiceNumber", value: request.invoiceNumber, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "X-Tenant-Id", value: request.xTenantId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entityInvoiceExplainerInternalSchema },
        errorFactory: BillingExplainerApi.GetEntityInvoiceExplainerError,
      },
      options,
    );
  }
}

export namespace BillingExplainerApi {
  export type GetBillingExplainerPerPayerRequest = {
    /** Invoice month in `YYYY-MM` format. */
    invoiceMonth: string;
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

  export const getBillingExplainerPerPayerRequestSchema: Schema<GetBillingExplainerPerPayerRequest> =
    s.lazySchema(() =>
      s.object<GetBillingExplainerPerPayerRequest>({
        invoiceMonth: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class GetBillingExplainerPerPayerError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillingExplainerPerPayerError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetEntityInvoiceExplainerRequest = {
    /** Billing profile identifier shown on the invoice. */
    billingProfileId: string;
    /** Customer-facing invoice number. */
    invoiceNumber: string;
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

  export const getEntityInvoiceExplainerRequestSchema: Schema<GetEntityInvoiceExplainerRequest> =
    s.lazySchema(() =>
      s.object<GetEntityInvoiceExplainerRequest>({
        billingProfileId: s.string().check(s.pattern("^[A-Za-z0-9_-]{1,128}$")),
        invoiceNumber: s.string().check(s.pattern("^[A-Za-z0-9_-]{1,64}$")),
        xTenantId: s.optional(s.string()),
      }),
    );

  export class GetEntityInvoiceExplainerError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEntityInvoiceExplainerError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }
}

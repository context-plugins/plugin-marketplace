import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cloudProvider1Schema, type CloudProvider1 } from "../models/cloud-provider1.js";
import { errorSchema, type Error } from "../models/error.js";
import { serviceQuotaListSchema, type ServiceQuotaList } from "../models/service-quota-list.js";
import type { Servers } from "../servers.js";

/**
 * Monitor cloud service quota usage across connected accounts and projects.
 */
export class ServiceQuotas {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List service quotas
   *
   * @remarks
   * Returns the latest service quota usage snapshots collected by DoiT for the authenticated
   * customer. Results include only quotas retained by DoiT's monitoring collectors and are not a
   * complete or live inventory from the cloud providers. Results are sorted by utilization
   * percentage in descending order.
   *
   * @returns OK - Service quotas returned.
   *
   * @throws {@link ServiceQuotas.ListServiceQuotasError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceQuotas(
    request: ServiceQuotas.ListServiceQuotasRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ServiceQuotaList, ServiceQuotas.ListServiceQuotasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/core/v1/service-quotas"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          {
            name: "cloudProvider",
            value: request.cloudProvider,
            schema: s.optional(s.lazy(() => cloudProvider1Schema)),
          },
          {
            name: "minUtilizationPercent",
            value: request.minUtilizationPercent,
            schema: s.optional(s.float64()),
          },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceQuotaListSchema },
        errorFactory: ServiceQuotas.ListServiceQuotasError,
      },
      options,
    );
  }
}

export namespace ServiceQuotas {
  export type ListServiceQuotasRequest = {
    /** Filter results to a cloud provider. Omit to return all supported providers. */
    cloudProvider?: CloudProvider1;
    /** Return quotas whose utilization percentage is greater than or equal to this value. */
    minUtilizationPercent?: number;
    /** Maximum number of results to return in one page. @default 50 */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
  };

  export const listServiceQuotasRequestSchema: Schema<ListServiceQuotasRequest> = s.lazySchema(() =>
    s.object<ListServiceQuotasRequest>({
      cloudProvider: s.optional(s.lazy(() => cloudProvider1Schema)),
      minUtilizationPercent: s.optional(s.float64().check(s.gte(0), s.lte(100))),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 50),
      pageToken: s.optional(s.string()),
    }),
  );

  export class ListServiceQuotasError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListServiceQuotasError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

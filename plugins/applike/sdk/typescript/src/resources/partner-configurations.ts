import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseInternalSchema, type ErrorResponse } from "../models/error-response.js";
import {
  listPartnerConfigurationFeaturesRequestInternalSchema,
  type ListPartnerConfigurationFeaturesRequest,
} from "../models/list-partner-configuration-features-request.js";
import {
  listPartnerConfigurationFeaturesResponseInternalSchema,
  type ListPartnerConfigurationFeaturesResponse,
} from "../models/list-partner-configuration-features-response.js";
import {
  listPartnerConfigurationsRequestInternalSchema,
  type ListPartnerConfigurationsRequest,
} from "../models/list-partner-configurations-request.js";
import {
  listPartnerConfigurationsResponseInternalSchema,
  type ListPartnerConfigurationsResponse,
} from "../models/list-partner-configurations-response.js";
import {
  partnerConfigurationFeatureOutputInternalSchema,
  type PartnerConfigurationFeatureOutput,
} from "../models/partner-configuration-feature-output.js";
import {
  upsertPartnerConfigurationFeaturesRequestInternalSchema,
  type UpsertPartnerConfigurationFeaturesRequest,
} from "../models/upsert-partner-configuration-features-request.js";
import type { Servers } from "../servers.js";

/**
 * In justtrack, you integrate your app with the advertising partners that run your campaigns.
 */
export class PartnerConfigurations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List configured features
   *
   * @remarks
   * Get a paginated list of configured features for a given app and partner.
   *
   * @returns OK
   *
   * @throws {@link PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApplikeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1PartnerConfigurationByFeature(
    request: PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ListPartnerConfigurationFeaturesResponse,
    PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi(
          "/management/v1/partner-configuration/{feature}",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "feature", value: request.feature, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listPartnerConfigurationFeaturesRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: listPartnerConfigurationFeaturesResponseInternalSchema },
        errorFactory: PartnerConfigurations.PostManagementV1PartnerConfigurationByFeatureError,
      },
      options,
    );
  }

  /**
   * List configurations
   *
   * @remarks
   * Get a paginated list of keys used to configure features for the partners that are available to
   * your organization. You configure the values for each of these keys with the Update
   * configurations API.
   *
   * :::warning
   *
   * When you configure a partner feature, you must provide values for all keys associated with that
   * feature from this API. Without them, justtrack wouldn't be able to successfully operate or
   * integrate with the partner.
   *
   * :::
   *
   * A configuration key may appear for multiple features. **You must provide a value for each
   * feature.**
   *
   * @returns OK
   *
   * @throws {@link PartnerConfigurations.PostManagementV1PartnerConfigurationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApplikeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1PartnerConfigurations(
    request: PartnerConfigurations.PostManagementV1PartnerConfigurationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ListPartnerConfigurationsResponse,
    PartnerConfigurations.PostManagementV1PartnerConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi(
          "/management/v1/partner-configurations",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listPartnerConfigurationsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: listPartnerConfigurationsResponseInternalSchema },
        errorFactory: PartnerConfigurations.PostManagementV1PartnerConfigurationsError,
      },
      options,
    );
  }

  /**
   * Configure partner
   *
   * @remarks
   * Configure a feature for a given app and partner.
   *
   * :::warning
   *
   * You must provide values for all keys listed by List partner configurations.
   *
   * :::
   *
   * :::info
   *
   * For attribution viewEventTimeFrame and clickEventTimeFrame, use ISO8601 duration-only format,
   * i.e. `P1DT0H0M`
   *
   * :::
   *
   * @returns OK
   *
   * @throws {@link PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApplikeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putManagementV1PartnerConfigurationByFeature(
    request: PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PartnerConfigurationFeatureOutput[],
    PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi(
          "/management/v1/partner-configuration/{feature}",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "feature", value: request.feature, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => upsertPartnerConfigurationFeaturesRequestInternalSchema)),
        },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => partnerConfigurationFeatureOutputInternalSchema)),
        },
        errorFactory: PartnerConfigurations.PutManagementV1PartnerConfigurationByFeatureError,
      },
      options,
    );
  }
}

export namespace PartnerConfigurations {
  export type PostManagementV1PartnerConfigurationByFeatureRequest = {
    feature: string;
    body?: ListPartnerConfigurationFeaturesRequest;
  };

  export class PostManagementV1PartnerConfigurationByFeatureError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1PartnerConfigurationByFeatureError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }

  export type PostManagementV1PartnerConfigurationsRequest = {
    body?: ListPartnerConfigurationsRequest;
  };

  export class PostManagementV1PartnerConfigurationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1PartnerConfigurationsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }

  export type PutManagementV1PartnerConfigurationByFeatureRequest = {
    feature: string;
    body?: UpsertPartnerConfigurationFeaturesRequest;
  };

  export class PutManagementV1PartnerConfigurationByFeatureError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutManagementV1PartnerConfigurationByFeatureError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  merchantAccountThreeDsConfigurationCreateSchema,
  type MerchantAccountThreeDsConfigurationCreate,
} from "../models/merchant-account-three-ds-configuration-create.js";
import {
  merchantAccountThreeDsConfigurationUpdateSchema,
  type MerchantAccountThreeDsConfigurationUpdate,
} from "../models/merchant-account-three-ds-configuration-update.js";
import {
  merchantAccountThreeDsConfigurationSchema,
  type MerchantAccountThreeDsConfiguration,
} from "../models/merchant-account-three-ds-configuration.js";
import {
  merchantAccountThreeDsConfigurationsSchema,
  type MerchantAccountThreeDsConfigurations,
} from "../models/merchant-account-three-ds-configurations.js";
import { currency16Schema, type Currency16 } from "../models/unions/currency16.js";
import type { Servers } from "../servers.js";

/**
 * Manage 3DS profiles for merchant accounts.
 */
export class MerchantAccounts3DsConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create 3DS configuration for merchant
   *
   * @remarks
   * Create a new 3DS configuration for a merchant account.
   *
   * @returns Successful Response
   *
   * @throws {@link MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createThreeDsConfiguration(
    request: MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MerchantAccountThreeDsConfiguration,
    MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/merchant-accounts/{merchant_account_id}/three-ds-configurations",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "merchant_account_id", value: request.merchantAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: merchantAccountThreeDsConfigurationCreateSchema },
      },
      {
        success: { kind: "json", schema: merchantAccountThreeDsConfigurationSchema },
        errorFactory: MerchantAccounts3DsConfiguration.CreateThreeDsConfigurationError,
      },
      options,
    );
  }

  /**
   * Delete 3DS configuration for a merchant
   *
   * @remarks
   * Delete a 3DS configuration for a merchant account.
   *
   * @returns Successful Response
   *
   * @throws {@link MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteThreeDsConfiguration(
    request: MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/merchant-accounts/{merchant_account_id}/three-ds-configurations/{three_ds_configuration_id}",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "merchant_account_id", value: request.merchantAccountId, schema: s.string() },
          { name: "three_ds_configuration_id", value: request.threeDsConfigurationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MerchantAccounts3DsConfiguration.DeleteThreeDsConfigurationError,
      },
      options,
    );
  }

  /**
   * Edit 3DS configuration
   *
   * @remarks
   * Update the 3DS configuration for a merchant account.
   *
   * @returns Successful Response
   *
   * @throws {@link MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  editThreeDsConfiguration(
    request: MerchantAccounts3DsConfiguration.EditThreeDsConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MerchantAccountThreeDsConfiguration,
    MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/merchant-accounts/{merchant_account_id}/three-ds-configurations/{three_ds_configuration_id}",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [
          { name: "merchant_account_id", value: request.merchantAccountId, schema: s.string() },
          { name: "three_ds_configuration_id", value: request.threeDsConfigurationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: merchantAccountThreeDsConfigurationUpdateSchema },
      },
      {
        success: { kind: "json", schema: merchantAccountThreeDsConfigurationSchema },
        errorFactory: MerchantAccounts3DsConfiguration.EditThreeDsConfigurationError,
      },
      options,
    );
  }

  /**
   * List 3DS configurations for merchant
   *
   * @remarks
   * List all 3DS configurations for a merchant account.
   *
   * @returns Successful Response
   *
   * @throws {@link MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listThreeDsConfigurations(
    request: MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MerchantAccountThreeDsConfigurations,
    MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/merchant-accounts/{merchant_account_id}/three-ds-configurations",
        ),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "merchant_account_id", value: request.merchantAccountId, schema: s.string() }],
        query: [
          { name: "currency", value: request.currency, schema: s.optional(s.lazy(() => currency16Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: merchantAccountThreeDsConfigurationsSchema },
        errorFactory: MerchantAccounts3DsConfiguration.ListThreeDsConfigurationsError,
      },
      options,
    );
  }
}

export namespace MerchantAccounts3DsConfiguration {
  export type CreateThreeDsConfigurationRequest = {
    /** The ID of the merchant account. */
    merchantAccountId: string;
    body: MerchantAccountThreeDsConfigurationCreate;
  };

  export class CreateThreeDsConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateThreeDsConfigurationError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteThreeDsConfigurationRequest = {
    /** The ID of the merchant account. */
    merchantAccountId: string;
    /** The ID of the 3DS configuration for a merchant account. */
    threeDsConfigurationId: string;
  };

  export class DeleteThreeDsConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteThreeDsConfigurationError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type EditThreeDsConfigurationRequest = {
    /** The ID of the merchant account. */
    merchantAccountId: string;
    /** The ID of the 3DS configuration for a merchant account. */
    threeDsConfigurationId: string;
    body: MerchantAccountThreeDsConfigurationUpdate;
  };

  export class EditThreeDsConfigurationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<EditThreeDsConfigurationError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListThreeDsConfigurationsRequest = {
    /** The ID of the merchant account. */
    merchantAccountId: string;
    /** ISO 4217 currency code (3 characters) to filter 3DS configurations. */
    currency?: Currency16;
  };

  export class ListThreeDsConfigurationsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListThreeDsConfigurationsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}

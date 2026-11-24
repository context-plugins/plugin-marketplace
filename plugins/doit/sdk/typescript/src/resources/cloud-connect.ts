import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { awsAccountResponseSchema, type AwsAccountResponse } from "../models/aws-account-response.js";
import {
  coreV1CloudconnectAwsAccountsRequestSchema,
  type CoreV1CloudconnectAwsAccountsRequest,
} from "../models/core-v1-cloudconnect-aws-accounts-request.js";
import {
  coreV1CloudconnectAwsAccountsRequest1Schema,
  type CoreV1CloudconnectAwsAccountsRequest1,
} from "../models/core-v1-cloudconnect-aws-accounts-request1.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  supportedFeaturesResponseSchema,
  type SupportedFeaturesResponse,
} from "../models/supported-features-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage cloud provider connections and check feature availability for connected accounts.
 */
export class CloudConnect {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create or update an AWS account role
   *
   * @remarks
   * Creates or updates a CloudConnect document for an AWS account. Unlike the CloudFormation
   * variant, this endpoint does not update Firestore channel documents or require a CloudFormation
   * stack ID.
   *
   * @returns OK - Role created/updated successfully.
   *
   * @throws {@link CloudConnect.CreateAccountRoleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAccountRole(
    request: CloudConnect.CreateAccountRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<AwsAccountResponse, CloudConnect.CreateAccountRoleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/core/v1/cloudconnect/aws/accounts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: coreV1CloudconnectAwsAccountsRequestSchema },
      },
      {
        success: { kind: "json", schema: awsAccountResponseSchema },
        errorFactory: CloudConnect.CreateAccountRoleError,
      },
      options,
    );
  }

  /**
   * Delete an AWS account role
   *
   * @remarks
   * Deletes a CloudConnect document for an AWS account.
   *
   * @returns OK - Role deleted successfully.
   *
   * @throws {@link CloudConnect.DeleteAccountRoleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAccountRole(
    request: CloudConnect.DeleteAccountRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CloudConnect.DeleteAccountRoleError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "accountID", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CloudConnect.DeleteAccountRoleError,
      },
      options,
    );
  }

  /**
   * Get an AWS account
   *
   * @remarks
   * Returns the current state of an AWS account including role, supported features, and optional S3
   * bucket configuration.
   *
   * @returns OK - Account details returned successfully.
   *
   * @throws {@link CloudConnect.GetAwsAccountError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAwsAccount(
    request: CloudConnect.GetAwsAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<AwsAccountResponse, CloudConnect.GetAwsAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "accountID", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: awsAccountResponseSchema },
        errorFactory: CloudConnect.GetAwsAccountError,
      },
      options,
    );
  }

  /**
   * Get supported features for a connected account
   *
   * @remarks
   * Returns the list of supported features and their permission status for a cloud account
   * connected via CloudConnect. The account must belong to the authenticated customer. Supports AWS
   * and Azure accounts.
   *
   * @returns OK - Supported features returned.
   *
   * @throws {@link CloudConnect.GetCloudConnectSupportedFeaturesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudConnectSupportedFeatures(
    request: CloudConnect.GetCloudConnectSupportedFeaturesRequest,
    options?: RequestOptions,
  ): ApiPromise<SupportedFeaturesResponse, CloudConnect.GetCloudConnectSupportedFeaturesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/core/v1/cloudconnect/supportedFeatures/{accountID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "accountID", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: supportedFeaturesResponseSchema },
        errorFactory: CloudConnect.GetCloudConnectSupportedFeaturesError,
      },
      options,
    );
  }

  /**
   * Update an AWS feature
   *
   * @remarks
   * Updates an AWS feature for an existing CloudConnect account. Unlike the CloudFormation variant,
   * this endpoint does not update Firestore channel documents, require a CloudFormation stack ID,
   * or handle StackSet member role ARNs.
   *
   * @returns OK - Feature updated successfully.
   *
   * @throws {@link CloudConnect.UpdateAwsFeatureError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAwsFeature(
    request: CloudConnect.UpdateAwsFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<AwsAccountResponse, CloudConnect.UpdateAwsFeatureError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "accountID", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: coreV1CloudconnectAwsAccountsRequest1Schema },
      },
      {
        success: { kind: "json", schema: awsAccountResponseSchema },
        errorFactory: CloudConnect.UpdateAwsFeatureError,
      },
      options,
    );
  }
}

export namespace CloudConnect {
  export type CreateAccountRoleRequest = {
    body: CoreV1CloudconnectAwsAccountsRequest;
  };

  export class CreateAccountRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAccountRoleError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAccountRoleRequest = {
    /** The AWS account ID. */
    accountId: string;
  };

  export class DeleteAccountRoleError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAccountRoleError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAwsAccountRequest = {
    /** The AWS account ID. */
    accountId: string;
  };

  export class GetAwsAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAwsAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCloudConnectSupportedFeaturesRequest = {
    /** The cloud provider account ID (AWS account ID or Azure tenant ID). */
    accountId: string;
  };

  export class GetCloudConnectSupportedFeaturesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudConnectSupportedFeaturesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateAwsFeatureRequest = {
    /** The AWS account ID. */
    accountId: string;
    body: CoreV1CloudconnectAwsAccountsRequest1;
  };

  export class UpdateAwsFeatureError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAwsFeatureError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

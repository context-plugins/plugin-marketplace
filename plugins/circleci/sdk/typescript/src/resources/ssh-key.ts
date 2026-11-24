import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  checkoutKeyCircleCiRestApiV1SshKeyApiSchema,
  type CheckoutKeyCircleCiRestApiV1SshKeyApi,
} from "../models/checkout-key-circle-ci-rest-api-v1-ssh-key-api.js";
import {
  projectProjectCheckoutKeyFingerprintResponseSchema,
  type ProjectProjectCheckoutKeyFingerprintResponse,
} from "../models/project-project-checkout-key-fingerprint-response.js";
import {
  projectProjectCheckoutKeyRequestSchema,
  type ProjectProjectCheckoutKeyRequest,
} from "../models/project-project-checkout-key-request.js";
import {
  projectProjectSshKeyRequestSchema,
  type ProjectProjectSshKeyRequest,
} from "../models/project-project-ssh-key-request.js";
import { vcsTypeSchema, type VcsType } from "../models/vcs-type.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing SSH keys and checkout keys for projects.
 */
export class SshKey {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add an SSH key
   *
   * @remarks
   * Adds an SSH key to the specified project for use in builds.
   *
   * @returns SSH key added successfully
   *
   * @throws {@link SshKey.AddSshKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addSshKey(
    request: SshKey.AddSshKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SshKey.AddSshKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/ssh-key"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectProjectSshKeyRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: SshKey.AddSshKeyError,
      },
      options,
    );
  }

  /**
   * Create a checkout key
   *
   * @remarks
   * Creates a new checkout key for the specified project.
   *
   * @returns Checkout key created successfully
   *
   * @throws {@link SshKey.CreateCheckoutKey2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCheckoutKey2(
    request: SshKey.CreateCheckoutKey2Request,
    options?: RequestOptions,
  ): ApiPromise<CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.CreateCheckoutKey2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/checkout-key"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: projectProjectCheckoutKeyRequestSchema },
      },
      {
        success: { kind: "json", schema: checkoutKeyCircleCiRestApiV1SshKeyApiSchema },
        errorFactory: SshKey.CreateCheckoutKey2Error,
      },
      options,
    );
  }

  /**
   * Delete a checkout key
   *
   * @remarks
   * Deletes a checkout key by its fingerprint.
   *
   * @returns Checkout key deleted successfully
   *
   * @throws {@link SshKey.DeleteCheckoutKey2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCheckoutKey2(
    request: SshKey.DeleteCheckoutKey2Request,
    options?: RequestOptions,
  ): ApiPromise<ProjectProjectCheckoutKeyFingerprintResponse, SshKey.DeleteCheckoutKey2Error> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
          { name: "fingerprint", value: request.fingerprint, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: projectProjectCheckoutKeyFingerprintResponseSchema },
        errorFactory: SshKey.DeleteCheckoutKey2Error,
      },
      options,
    );
  }

  /**
   * Get a checkout key
   *
   * @remarks
   * Returns a checkout key by its fingerprint.
   *
   * @returns Successfully retrieved checkout key
   *
   * @throws {@link SshKey.GetCheckoutKey2Error} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCheckoutKey2(
    request: SshKey.GetCheckoutKey2Request,
    options?: RequestOptions,
  ): ApiPromise<CheckoutKeyCircleCiRestApiV1SshKeyApi, SshKey.GetCheckoutKey2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
          { name: "fingerprint", value: request.fingerprint, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: checkoutKeyCircleCiRestApiV1SshKeyApiSchema },
        errorFactory: SshKey.GetCheckoutKey2Error,
      },
      options,
    );
  }

  /**
   * List checkout keys
   *
   * @remarks
   * Returns a list of checkout keys for the specified project.
   *
   * @returns Successfully retrieved checkout keys
   *
   * @throws {@link SshKey.ListCheckoutKeys2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCheckoutKeys2(
    request: SshKey.ListCheckoutKeys2Request,
    options?: RequestOptions,
  ): ApiPromise<CheckoutKeyCircleCiRestApiV1SshKeyApi[], SshKey.ListCheckoutKeys2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/project/{vcs-type}/{username}/{project}/checkout-key"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "vcs-type", value: request.vcsType, schema: vcsTypeSchema },
          { name: "username", value: request.username, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => checkoutKeyCircleCiRestApiV1SshKeyApiSchema)) },
        errorFactory: SshKey.ListCheckoutKeys2Error,
      },
      options,
    );
  }
}

export namespace SshKey {
  export type AddSshKeyRequest = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    body: ProjectProjectSshKeyRequest;
  };

  export class AddSshKeyError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AddSshKeyError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type CreateCheckoutKey2Request = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    body: ProjectProjectCheckoutKeyRequest;
  };

  export class CreateCheckoutKey2Error extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCheckoutKey2Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type DeleteCheckoutKey2Request = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The fingerprint of the checkout key */
    fingerprint: string;
  };

  export class DeleteCheckoutKey2Error extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCheckoutKey2Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type GetCheckoutKey2Request = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
    /** The fingerprint of the checkout key */
    fingerprint: string;
  };

  export class GetCheckoutKey2Error extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCheckoutKey2Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListCheckoutKeys2Request = {
    /** The version control system type */
    vcsType: VcsType;
    /** The organization or user name */
    username: string;
    /** The repository name */
    project: string;
  };

  export class ListCheckoutKeys2Error extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCheckoutKeys2Error> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}

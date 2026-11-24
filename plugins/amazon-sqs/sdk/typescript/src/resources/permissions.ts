import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAmazonSimpleQueueServicePermissionsApiSchema,
  type XAmzTargetAmazonSimpleQueueServicePermissionsApi,
} from "../models/xamz-target-amazon-simple-queue-service-permissions-api.js";
import {
  xAmzTarget1AmazonSimpleQueueServicePermissionsApiSchema,
  type XAmzTarget1AmazonSimpleQueueServicePermissionsApi,
} from "../models/xamz-target1-amazon-simple-queue-service-permissions-api.js";
import type { Servers } from "../servers.js";

export class Permissions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Permission
   *
   * @remarks
   * Adds a permission to a queue for a specific principal. This allows sharing access to the queue.
   * When you create a queue, you have full control access rights for the queue. Only you, the owner
   * of the queue, can grant or deny permissions to the queue. For more information about these
   * permissions, see Allow Developers to Write Messages to a Shared Queue in the Amazon SQS
   * Developer Guide. AddPermission generates a policy for you. You can use SetQueueAttributes to
   * upload your policy. For more information, see Using Custom Policies with the Amazon SQS Access
   * Policy Language in the Amazon SQS Developer Guide. An Amazon SQS policy can have a maximum of
   * seven actions per statement. To remove the ability to change queue permissions, you must deny
   * permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your IAM
   * policy. Amazon SQS AddPermission does not support adding a non-account principal. Cross-account
   * permissions don't apply to this action. For more information, see Grant cross-account
   * permissions to a role and a username in the Amazon SQS Developer Guide.
   *
   * @returns Success
   *
   * @throws {@link Permissions.AddPermissionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addPermission(
    request: Permissions.AddPermissionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.AddPermissionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AddPermission"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAmazonSimpleQueueServicePermissionsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.AddPermissionError,
      },
      options,
    );
  }

  /**
   * Remove Permission
   *
   * @remarks
   * Revokes any permissions in the queue policy that matches the specified Label parameter. Only
   * the owner of a queue can remove permissions from it. Cross-account permissions don't apply to
   * this action. For more information, see Grant cross-account permissions to a role and a username
   * in the Amazon SQS Developer Guide. To remove the ability to change queue permissions, you must
   * deny permission to the AddPermission, RemovePermission, and SetQueueAttributes actions in your
   * IAM policy.
   *
   * @returns Success
   *
   * @throws {@link Permissions.RemovePermissionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonSqsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removePermission(
    request: Permissions.RemovePermissionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Permissions.RemovePermissionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RemovePermission"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AmazonSimpleQueueServicePermissionsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Permissions.RemovePermissionError,
      },
      options,
    );
  }
}

export namespace Permissions {
  export type AddPermissionRequestParams = {
    xAmzTarget: XAmzTargetAmazonSimpleQueueServicePermissionsApi;
  };

  export class AddPermissionError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddPermissionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RemovePermissionRequestParams = {
    xAmzTarget: XAmzTarget1AmazonSimpleQueueServicePermissionsApi;
  };

  export class RemovePermissionError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemovePermissionError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * This resource represents package dependencies. Use this resource to associate package
 * dependencies with a component.
 */
export class PackageDependencies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Package Dependencies given a Source
   *
   * @remarks
   * Delete all the package dependencies associated with a particular source.The `sourceId`
   * parameter needs to be Base64 encoded.
   *
   * @returns Returned if the file upload is successful.
   *
   * @throws {@link PackageDependencies.DeleteLockFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteLockFile(
    request: PackageDependencies.DeleteLockFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PackageDependencies.DeleteLockFileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/compass/v1/package_dependencies/lock_file/{componentId}/{sourceId}",
        ),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "componentId", value: request.componentId, schema: s.string() },
          { name: "sourceId", value: request.sourceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: PackageDependencies.DeleteLockFileError,
      },
      options,
    );
  }

  /**
   * Upload Package Dependencies via Lock File
   *
   * @remarks
   * Upload package dependencies for a component.
   *
   * The file with package dependency information. Currently, we only accept package-lock.json files
   * that are below 2MB. \ \ The baseSourceUrl should be a url link to your lock file, ideally with
   * "#lines-" appended at the end, if from Bitbucket, or "#L" appended if a GitHub link. This will
   * let link to specific lines in your lock file where dependencies were found. \ \ The sourceId
   * should be a string that uniquely identifies the given lock file. We recommend using the
   * filepath to the lock file, with the "/" characters replaced with "_" characters.
   *
   * Example: This curl command uploads a lock file to populate package dependencies for the
   * component.
   * ```bash
   * curl --request PUT \
   * --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/package_dependencies/lock_file' \
   * --user 'email@example.com:' \
   * --header 'Content-Type: multipart/form-data' \
   * --form file=@/path/to/file/package-lock.json;type=application/json
   * --form componentId=
   * --form baseSourceUrl=
   * --form sourceId=
   * ```
   *
   * @returns Returned if the file upload is successful.
   *
   * @throws {@link PackageDependencies.UploadLockFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadLockFile(
    request: PackageDependencies.UploadLockFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, PackageDependencies.UploadLockFileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/compass/v1/package_dependencies/lock_file"),
        auth: this.#auth.basicAuth,
        pathParams: [],
        query: [
          { name: "sourceId", value: request.sourceId, schema: s.string() },
          { name: "baseSourceUrl", value: request.baseSourceUrl, schema: s.string() },
          { name: "componentId", value: request.componentId, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "empty" },
        errorFactory: PackageDependencies.UploadLockFileError,
      },
      options,
    );
  }
}

export namespace PackageDependencies {
  export type DeleteLockFileRequest = {
    componentId: string;
    sourceId: string;
  };

  export class DeleteLockFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLockFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UploadLockFileRequest = {
    sourceId: string;
    baseSourceUrl: string;
    componentId: string;
    file: FileInput;
  };

  export class UploadLockFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadLockFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}

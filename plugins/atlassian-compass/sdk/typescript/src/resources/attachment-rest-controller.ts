import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { attachmentSchema, type Attachment } from "../models/attachment.js";
import { errorResponseDtoSchema, type ErrorResponseDto } from "../models/error-response-dto.js";
import type { Servers } from "../servers.js";

export class AttachmentRestController {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete API spec for a component
   *
   * @remarks
   * Delete the API spec file for a component.
   *
   * @returns Returned if the API spec deletion is successful.
   *
   * @throws {@link AttachmentRestController.DeleteApiSpecError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteApiSpec(
    request: AttachmentRestController.DeleteApiSpecRequest,
    options?: RequestOptions,
  ): ApiPromise<string, AttachmentRestController.DeleteApiSpecError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/compass/v1/component/{componentId}/api_specs"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "componentId", value: request.componentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: AttachmentRestController.DeleteApiSpecError,
      },
      options,
    );
  }

  /**
   * Delete Forge App attachment
   *
   * @remarks
   * Delete file attached to a component. If you need to have attachment upload enabled for your
   * Compass Forge app, contact Atlassian support.
   *
   * @returns Returned if the file delete is successful.
   *
   * @throws {@link AttachmentRestController.DeleteAttachmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAttachment(
    request: AttachmentRestController.DeleteAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AttachmentRestController.DeleteAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}",
        ),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "componentId", value: request.componentId, schema: s.string() },
          { name: "forgeAppId", value: request.forgeAppId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AttachmentRestController.DeleteAttachmentError,
      },
      options,
    );
  }

  /**
   * Get Forge App attachment
   *
   * @remarks
   * Get a file attached to a component. If you need to have attachment upload enabled for your
   * Compass Forge app, contact Atlassian support.
   *
   * @returns Returned if the file exists.
   *
   * @throws {@link AttachmentRestController.GetAttachmentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAttachment(
    request: AttachmentRestController.GetAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Attachment, AttachmentRestController.GetAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}",
        ),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "componentId", value: request.componentId, schema: s.string() },
          { name: "forgeAppId", value: request.forgeAppId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: attachmentSchema },
        errorFactory: AttachmentRestController.GetAttachmentError,
      },
      options,
    );
  }

  /**
   * Upload Component API Spec
   *
   * @remarks
   * Upload api specs for a component.
   *
   * The request body should be a file with the api-spec content.
   *
   * Example: This curl command uploads a spec file (swagger.yaml) for the component.
   * ```bash
   * curl --request PUT \
   * --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/api_specs' \
   * --user 'email@example.com:' \
   * --header 'Content-Type: multipart/form-data' \
   * --form file=@/path/to/file/swagger.yaml
   * ```
   *
   * @returns Returned if the file upload is successful.
   *
   * @throws {@link AttachmentRestController.UploadApiSpecError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadApiSpec(
    request: AttachmentRestController.UploadApiSpecRequest,
    options?: RequestOptions,
  ): ApiPromise<string, AttachmentRestController.UploadApiSpecError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/compass/v1/component/{componentId}/api_specs"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "componentId", value: request.componentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: s.string() },
        errorFactory: AttachmentRestController.UploadApiSpecError,
      },
      options,
    );
  }

  /**
   * Upload Forge App attachment
   *
   * @remarks
   * Attach a file to a component. If you need to have attachment upload enabled for your Compass
   * Forge app, contact Atlassian support.
   *
   * The request body should be a file.
   *
   * Example: This curl command attaches a file to a component.
   * ```bash
   * curl --request PUT \
   * --url 'https://your-domain.atlassian.net/gateway/api/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}' \
   * --user 'email@example.com:' \
   * --header 'Content-Type: multipart/form-data' \
   * --form file=@/path/to/attachment.txt
   * ```
   *
   * @returns Returned if the file upload is successful.
   *
   * @throws {@link AttachmentRestController.UploadAttachmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AtlassianCompassError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadAttachment(
    request: AttachmentRestController.UploadAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<Attachment, AttachmentRestController.UploadAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default(
          "/compass/v1/component/{componentId}/app/{forgeAppId}/attachment/{key}",
        ),
        auth: this.#auth.basicAuth,
        pathParams: [
          { name: "componentId", value: request.componentId, schema: s.string() },
          { name: "forgeAppId", value: request.forgeAppId, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: attachmentSchema },
        errorFactory: AttachmentRestController.UploadAttachmentError,
      },
      options,
    );
  }
}

export namespace AttachmentRestController {
  export type DeleteApiSpecRequest = {
    componentId: string;
  };

  export class DeleteApiSpecError extends ApiError {
    declare readonly payload: Declared<"error403", string> | Declared<"error404", string> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiSpecError> = [
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.string() } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type DeleteAttachmentRequest = {
    componentId: string;
    forgeAppId: string;
    key: string;
  };

  export class DeleteAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseDto", ErrorResponseDto>
      | Declared<"errorResponseDto2", ErrorResponseDto>
      | Declared<"errorResponseDto3", ErrorResponseDto>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAttachmentError> = [
      { on: 400, kind: "errorResponseDto", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 403, kind: "errorResponseDto2", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 404, kind: "errorResponseDto3", decode: { kind: "json", schema: errorResponseDtoSchema } },
    ];
  }

  export type GetAttachmentRequest = {
    componentId: string;
    forgeAppId: string;
    key: string;
  };

  export class GetAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseDto", ErrorResponseDto>
      | Declared<"errorResponseDto2", ErrorResponseDto>
      | Declared<"errorResponseDto3", ErrorResponseDto>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAttachmentError> = [
      { on: 400, kind: "errorResponseDto", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 403, kind: "errorResponseDto2", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 404, kind: "errorResponseDto3", decode: { kind: "json", schema: errorResponseDtoSchema } },
    ];
  }

  export type UploadApiSpecRequest = {
    componentId: string;
    file: FileInput;
  };

  export class UploadApiSpecError extends ApiError {
    declare readonly payload:
      | Declared<"error400", string>
      | Declared<"error403", string>
      | Declared<"error422", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadApiSpecError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.string() } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: s.string() } },
      { on: 422, kind: "error422", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type UploadAttachmentRequest = {
    componentId: string;
    forgeAppId: string;
    key: string;
    file: FileInput;
  };

  export class UploadAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseDto", ErrorResponseDto>
      | Declared<"errorResponseDto2", ErrorResponseDto>
      | Declared<"errorResponseDto3", ErrorResponseDto>
      | Declared<"errorResponseDto4", ErrorResponseDto>
      | Declared<"errorResponseDto5", ErrorResponseDto>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadAttachmentError> = [
      { on: 400, kind: "errorResponseDto", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 403, kind: "errorResponseDto2", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 404, kind: "errorResponseDto3", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 422, kind: "errorResponseDto4", decode: { kind: "json", schema: errorResponseDtoSchema } },
      { on: 500, kind: "errorResponseDto5", decode: { kind: "json", schema: errorResponseDtoSchema } },
    ];
  }
}

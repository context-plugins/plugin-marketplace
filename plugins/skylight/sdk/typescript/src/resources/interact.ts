import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { clickRequestSchema, type ClickRequest } from "../models/click-request.js";
import { dragRequestSchema, type DragRequest } from "../models/drag-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  forbiddenErrorResponseSchema,
  type ForbiddenErrorResponse,
} from "../models/forbidden-error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { keyRequestSchema, type KeyRequest } from "../models/key-request.js";
import { mouseMoveRequestSchema, type MouseMoveRequest } from "../models/mouse-move-request.js";
import {
  packageInstallRequestSchema,
  type PackageInstallRequest,
} from "../models/package-install-request.js";
import {
  packageInstallResponseSchema,
  type PackageInstallResponse,
} from "../models/package-install-response.js";
import { screenshotResponseSchema, type ScreenshotResponse } from "../models/screenshot-response.js";
import { scrollRequestSchema, type ScrollRequest } from "../models/scroll-request.js";
import { standardResponseSchema, type StandardResponse } from "../models/standard-response.js";
import { typeRequestSchema, type TypeRequest } from "../models/type-request.js";
import type { Servers } from "../servers.js";

export class Interact {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Click
   *
   * @remarks
   * Perform a click operation at the specified coordinates or current position
   *
   * - If x and y are provided, click at those coordinates
   * - If x and y are omitted, click at the current cursor position
   * - Use button="left", clicks=1 for a single left click
   * - Use button="right", clicks=1 for a right click
   * - Use button="middle", clicks=1 for a middle click
   * - Use button="left", clicks=2 for a double click
   *
   * Requires API key authentication.
   *
   * @returns Successfully performed click operation
   *
   * @throws {@link Interact.ClickError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  click(
    request: Interact.ClickRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StandardResponse, Interact.ClickError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/click/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: clickRequestSchema },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Interact.ClickError,
      },
      options,
    );
  }

  /**
   * Drag
   *
   * @remarks
   * Perform a drag operation along a path of coordinates
   *
   * - path: List of points to drag through, each with 'x' and 'y' coordinates
   * - button: Mouse button to use for dragging (default: "left")
   *
   * Requires API key authentication.
   *
   * @returns Successfully performed drag operation
   *
   * @throws {@link Interact.DragError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  drag(
    request: Interact.DragRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StandardResponse, Interact.DragError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/drag/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dragRequestSchema },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Interact.DragError,
      },
      options,
    );
  }

  /**
   * Install Applications
   *
   * @remarks
   * Install Chocolatey packages on a Windows instance. Find a list of packages here:
   * https://community.chocolatey.org/packages.
   *
   * Requires API key authentication.
   *
   * @returns Packages installation initiated
   *
   * @throws {@link Interact.InstallError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  install(
    request: Interact.InstallRequest,
    options?: RequestOptions,
  ): ApiPromise<PackageInstallResponse, Interact.InstallError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/install/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: packageInstallRequestSchema },
      },
      {
        success: { kind: "json", schema: packageInstallResponseSchema },
        errorFactory: Interact.InstallError,
      },
      options,
    );
  }

  /**
   * Keypress
   *
   * @remarks
   * Press the specified keys simultaneously (e.g. ['ctrl', 'alt', 'delete'])
   *
   * Requires API key authentication.
   *
   * @returns Successfully pressed keys
   *
   * @throws {@link Interact.KeypressError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  keypress(
    request: Interact.KeypressRequest,
    options?: RequestOptions,
  ): ApiPromise<StandardResponse, Interact.KeypressError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/keypress/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: keyRequestSchema },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Interact.KeypressError,
      },
      options,
    );
  }

  /**
   * Move Mouse
   *
   * @remarks
   * Move the mouse to the specified coordinates
   *
   * Requires API key authentication.
   *
   * @returns Successfully moved mouse
   *
   * @throws {@link Interact.MoveError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  move(
    request: Interact.MoveRequest,
    options?: RequestOptions,
  ): ApiPromise<StandardResponse, Interact.MoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/move/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mouseMoveRequestSchema },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Interact.MoveError,
      },
      options,
    );
  }

  /**
   * Take Screenshot
   *
   * @remarks
   * Take a screenshot of the instance
   *
   * Requires API key authentication.
   *
   * @returns Screenshot image of the instance
   *
   * @throws {@link Interact.ScreenshotError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  screenshot(
    request: Interact.ScreenshotRequest,
    options?: RequestOptions,
  ): ApiPromise<ScreenshotResponse, Interact.ScreenshotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/screenshot/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: screenshotResponseSchema },
        errorFactory: Interact.ScreenshotError,
      },
      options,
    );
  }

  /**
   * Scroll
   *
   * @remarks
   * Scroll at the specified coordinates
   *
   * Requires API key authentication.
   *
   * @returns Successfully performed scroll
   *
   * @throws {@link Interact.ScrollError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scroll(
    request: Interact.ScrollRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StandardResponse, Interact.ScrollError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/scroll/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: scrollRequestSchema },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Interact.ScrollError,
      },
      options,
    );
  }

  /**
   * Type Text
   *
   * @remarks
   * Type the specified text with optional delay between keystrokes
   *
   * Requires API key authentication.
   *
   * @returns Successfully typed text
   *
   * @throws {@link Interact.TypeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  type(
    request: Interact.TypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StandardResponse, Interact.TypeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/interact/type/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: typeRequestSchema },
      },
      {
        success: { kind: "json", schema: standardResponseSchema },
        errorFactory: Interact.TypeError,
      },
      options,
    );
  }
}

export namespace Interact {
  export type ClickRequestParams = {
    instanceId: string;
    body: ClickRequest;
  };

  export class ClickError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ClickError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DragRequestParams = {
    instanceId: string;
    body: DragRequest;
  };

  export class DragError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DragError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InstallRequest = {
    instanceId: string;
    body: PackageInstallRequest;
  };

  export class InstallError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InstallError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type KeypressRequest = {
    instanceId: string;
    body: KeyRequest;
  };

  export class KeypressError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<KeypressError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type MoveRequest = {
    instanceId: string;
    body: MouseMoveRequest;
  };

  export class MoveError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<MoveError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ScreenshotRequest = {
    instanceId: string;
  };

  export class ScreenshotError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScreenshotError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ScrollRequestParams = {
    instanceId: string;
    body: ScrollRequest;
  };

  export class ScrollError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScrollError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TypeRequestParams = {
    instanceId: string;
    body: TypeRequest;
  };

  export class TypeError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TypeError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}

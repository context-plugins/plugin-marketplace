import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { screenshotRequestInternalSchema, type ScreenshotRequest } from "../models/screenshot-request.js";
import type { Servers } from "../servers.js";

export class Screenshot {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Render a web page as a PNG, JPEG, or WebP image
   *
   * @remarks
   * Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point —
   * layout checks, visual previews, or content that does not survive text extraction — and control
   * the viewport, when the page counts as ready, and whether to capture the full document or a
   * single element by CSS selector. When you want the page's text instead, call POST /crawl. Costs
   * 2 credits per request.
   *
   * @returns Successful response
   *
   * @throws {@link Screenshot.ScreenshotError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link Search1ApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  screenshot(
    request: Screenshot.ScreenshotRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Screenshot.ScreenshotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/screenshot"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: screenshotRequestInternalSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Screenshot.ScreenshotError,
      },
      options,
    );
  }
}

export namespace Screenshot {
  export type ScreenshotRequestParams = {
    body: ScreenshotRequest;
  };

  export class ScreenshotError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Declared<"apiErrorModel7", ApiErrorModel>
      | Declared<"apiErrorModel8", ApiErrorModel>
      | Declared<"apiErrorModel9", ApiErrorModel>
      | Declared<"apiErrorModel10", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScreenshotError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 402, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 403, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 500, kind: "apiErrorModel7", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 502, kind: "apiErrorModel8", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel9", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 504, kind: "apiErrorModel10", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}

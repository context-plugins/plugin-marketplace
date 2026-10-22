import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { captureParamsReqSchema, type CaptureParamsReq } from "../models/capture-params-req.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to data preview
 */
export class Preview {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Capture live data
   *
   * @remarks
   * Initiate a live data capture from Cribl Workers. Returns a stream of captured events in NDJSON
   * format that match the parameters specified in the request body.
   *
   * @returns Stream of captured events.
   *
   * @throws {@link Preview.CreateSystemCaptureError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSystemCapture(
    request: Preview.CreateSystemCaptureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Preview.CreateSystemCaptureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/system/capture"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: captureParamsReqSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Preview.CreateSystemCaptureError,
      },
      options,
    );
  }
}

export namespace Preview {
  export type CreateSystemCaptureRequest = {
    /** CaptureParamsReq object. */
    body: CaptureParamsReq;
  };

  export class CreateSystemCaptureError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSystemCaptureError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

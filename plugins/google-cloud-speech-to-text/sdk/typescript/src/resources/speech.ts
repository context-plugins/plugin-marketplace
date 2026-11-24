import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  longRunningRecognizeRequestSchema,
  type LongRunningRecognizeRequest,
} from "../models/long-running-recognize-request.js";
import { operationSchema, type Operation } from "../models/operation.js";
import { recognizeRequestSchema, type RecognizeRequest } from "../models/recognize-request.js";
import { recognizeResponseSchema, type RecognizeResponse } from "../models/recognize-response.js";
import type { Servers } from "../servers.js";

export class Speech {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Longrunningrecognize speech
   *
   * @remarks
   * Performs asynchronous speech recognition: receive results via the google.longrunning.Operations
   * interface. Returns either an `Operation.error` or an `Operation.response` which contains a
   * `LongRunningRecognizeResponse` message. For more information on asynchronous speech
   * recognition, see the how-to.
   *
   * @returns Successful response
   *
   * @throws {@link Speech.SpeechSpeechLongrunningrecognizeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechSpeechLongrunningrecognize(
    request: Speech.SpeechSpeechLongrunningrecognizeRequest,
    options?: RequestOptions,
  ): ApiPromise<Operation, Speech.SpeechSpeechLongrunningrecognizeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/speech:longrunningrecognize"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: longRunningRecognizeRequestSchema },
      },
      {
        success: { kind: "json", schema: operationSchema },
        errorFactory: Speech.SpeechSpeechLongrunningrecognizeError,
      },
      options,
    );
  }

  /**
   * Recognize speech
   *
   * @remarks
   * Performs synchronous speech recognition: receive results after all audio has been sent and
   * processed.
   *
   * @returns Successful response
   *
   * @throws {@link Speech.SpeechSpeechRecognizeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechSpeechRecognize(
    request: Speech.SpeechSpeechRecognizeRequest,
    options?: RequestOptions,
  ): ApiPromise<RecognizeResponse, Speech.SpeechSpeechRecognizeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/speech:recognize"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: recognizeRequestSchema },
      },
      {
        success: { kind: "json", schema: recognizeResponseSchema },
        errorFactory: Speech.SpeechSpeechRecognizeError,
      },
      options,
    );
  }
}

export namespace Speech {
  export type SpeechSpeechLongrunningrecognizeRequest = {
    body: LongRunningRecognizeRequest;
  };

  export class SpeechSpeechLongrunningrecognizeError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechSpeechLongrunningrecognizeError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechSpeechRecognizeRequest = {
    body: RecognizeRequest;
  };

  export class SpeechSpeechRecognizeError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechSpeechRecognizeError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}

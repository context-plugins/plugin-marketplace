import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { askRequestInternalSchema, type AskRequest } from "../models/ask-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { itemType3Schema, type ItemType3 } from "../models/item-type3.js";
import { modeSchema, type Mode } from "../models/mode.js";
import { streamSchema, type Stream } from "../models/stream.js";
import { askResponse1Schema, type AskResponse1 } from "../models/unions/ask-response1.js";
import type { Servers } from "../servers.js";

export class NlWeb {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Ask in natural language (NLWeb)
   *
   * @remarks
   * NLWeb /ask endpoint, conventional GET form: /ask?query=. Natural-language search over Agent
   * Ready's own content (methodology, check registry, specs, and the content library — explainers,
   * comparisons, how-to guides, glossary). Public — no API key required. Returns NLWeb result
   * objects with a nested Schema.org `schema_object`. Set stream=true for Server-Sent Events. Also
   * served at the root path /ask.
   *
   * @returns An NLWeb answer.
   *
   * @throws {@link NlWeb.AskGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  askGet(
    request: NlWeb.AskGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AskResponse1, NlWeb.AskGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/ask"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => modeSchema)) },
          { name: "itemType", value: request.itemType, schema: s.optional(s.lazy(() => itemType3Schema)) },
          { name: "stream", value: request.stream, schema: s.optional(s.lazy(() => streamSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: askResponse1Schema },
        errorFactory: NlWeb.AskGetError,
      },
      options,
    );
  }

  /**
   * Ask in natural language (NLWeb), JSON-body form
   *
   * @remarks
   * NLWeb /ask endpoint, JSON-body form: { query: { q }, prefer: { mode, streaming } }. Same
   * response as the GET form. Public — no API key required.
   *
   * @returns An NLWeb answer.
   *
   * @throws {@link NlWeb.AskPostError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  askPost(
    request: NlWeb.AskPostRequest,
    options?: RequestOptions,
  ): ApiPromise<AskResponse1, NlWeb.AskPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/ask"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: askRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: askResponse1Schema },
        errorFactory: NlWeb.AskPostError,
      },
      options,
    );
  }
}

export namespace NlWeb {
  export type AskGetRequest = {
    query: string;
    mode?: Mode;
    itemType?: ItemType3;
    stream?: Stream;
  };

  export class AskGetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AskGetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type AskPostRequest = {
    body: AskRequest;
  };

  export class AskPostError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"askResponse1", AskResponse1>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AskPostError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "askResponse1", decode: { kind: "json", schema: askResponse1Schema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}

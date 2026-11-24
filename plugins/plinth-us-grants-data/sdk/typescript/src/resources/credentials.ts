import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentKeyRequestInternalSchema, type AgentKeyRequest } from "../models/agent-key-request.js";
import { answerRequestSchema, type AnswerRequest } from "../models/answer-request.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { challengeIssuedSchema, type ChallengeIssued } from "../models/challenge-issued.js";
import { trialKeySchema, type TrialKey } from "../models/trial-key.js";
import { unlockResultSchema, type UnlockResult } from "../models/unlock-result.js";
import type { Servers } from "../servers.js";

/**
 * Getting a key, including the one an agent can mint for itself.
 */
export class Credentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Answer a challenge and unlock the key
   *
   * @remarks
   * Send the values of the fields the questions named. We re-read those calls to check, so nothing
   * is stored at issue time and nothing can drift from the data it described.
   *
   * @returns Unlocked, with the general call budget added.
   *
   * @throws {@link Credentials.AnswerChallengeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  answerChallenge(
    request: Credentials.AnswerChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<UnlockResult, Credentials.AnswerChallengeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/agent-key/answer"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: answerRequestSchema },
      },
      {
        success: { kind: "json", schema: unlockResultSchema },
        errorFactory: Credentials.AnswerChallengeError,
      },
      options,
    );
  }

  /**
   * How to mint a trial key by signing a request
   *
   * @remarks
   * Returns the signing requirements, the tier ladder and a worked example request. No key, no
   * account, no signature needed to read this.
   *
   * @returns How to get a key: the keyless challenge route, the signing alternative, and the tier
   * ladder.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAgentKey(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agent-key"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * How the challenge loop works
   *
   * @remarks
   * Readable without a key, so an agent that arrives here learns the shape rather than meeting a
   * 401.
   *
   * @returns The loop, in order.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeChallenge(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agent-key/challenge"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Mint a trial API key — no account, no host, no signature
   *
   * @remarks
   * Mints a short-lived, read-only evaluation key. No account, no card, no browser, and nothing
   * created in anyone else's name.
   *
   * **The ordinary route needs no credential of any kind.** POST here with `purpose` and `source`
   * and you get a key immediately — but LOCKED: it may make only the calls its challenge names.
   * Make them, read the fields the questions ask about, POST those values to
   * `/api/v1/agent-key/answer`, and the key unlocks for general use. When that budget is spent,
   * take another challenge. As often as you like, free.
   *
   * Every fiscal year in the corpus is readable; what is small is the row cap and the per-challenge
   * budget, both announced in `x_plinth.warnings` at `caveat` severity.
   *
   * **Signing is the alternative, not the requirement.** A caller that can publish an Ed25519 key
   * directory and sign per RFC 9421 (Web Bot Auth profile: cover `@authority` and
   * `signature-agent`, tag `web-bot-auth`, with `created`, `expires`, a `nonce` and a `keyid` that
   * is the base64url JWK SHA-256 thumbprint) is issued at a higher tier with a larger budget and no
   * challenges. That allowance IS a total and never refills. GET this path for the full ladder.
   *
   * @returns A trial key, its expiry, its budget, and the challenge it arrives locked to.
   *
   * @throws {@link Credentials.MintAgentKeyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  mintAgentKey(
    request: Credentials.MintAgentKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<TrialKey, Credentials.MintAgentKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/agent-key"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Signature-Agent", value: request.signatureAgent, schema: s.optional(s.string()) },
          { name: "Signature-Input", value: request.signatureInput, schema: s.optional(s.string()) },
          { name: "Signature", value: request.signature, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: agentKeyRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: trialKeySchema },
        errorFactory: Credentials.MintAgentKeyError,
      },
      options,
    );
  }

  /**
   * Take another challenge on a key you hold
   *
   * @remarks
   * A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is
   * unlocked again — as often as needed. Replacing an outstanding challenge is allowed; it grants
   * extra calls only if the previous questions turned out to be unanswerable from our side too.
   *
   * @returns Three calls this key may now make, and where to answer.
   *
   * @throws {@link Credentials.TakeChallengeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  takeChallenge(options?: RequestOptions): ApiPromise<ChallengeIssued, Credentials.TakeChallengeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/agent-key/challenge"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: challengeIssuedSchema },
        errorFactory: Credentials.TakeChallengeError,
      },
      options,
    );
  }
}

export namespace Credentials {
  export type AnswerChallengeRequest = {
    body: AnswerRequest;
  };

  export class AnswerChallengeError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<AnswerChallengeError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 409, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 429, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type MintAgentKeyRequest = {
    /**
     * The https origin publishing your key directory, as a structured-field string:
     * "https://your-host.example".
     */
    signatureAgent?: string;
    /**
     * RFC 9421 covered components and parameters, e.g. sig=("@authority"
     * "signature-agent");created=…;expires=…;keyid="…";alg="ed25519";nonce="…";tag="web-bot-auth"
     */
    signatureInput?: string;
    /** sig=:<base64 ed25519 signature>: Send all three signature headers or none. */
    signature?: string;
    body: AgentKeyRequest;
  };

  export class MintAgentKeyError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<MintAgentKeyError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 429, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 502, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 503, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export class TakeChallengeError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<TakeChallengeError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}

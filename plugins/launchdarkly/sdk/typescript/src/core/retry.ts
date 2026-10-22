import type { HttpMethod } from "./api-request.js";
import { ConfigurationError, type ConnectionError, type TimeoutError } from "./errors.js";
import type { HttpLogger } from "./http-logger.js";
import * as s from "./validation/index.js";
import type { Schema } from "./validation/schema.js";

const MAX_DELAY_MS = 60_000;
const MAX_TIMEOUT_MS = 2_147_483_647;
const MAX_BACKOFF_FACTOR = 100;
const MIN_STATUS = 100;
const MAX_STATUS = 599;
const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"] as const;
const DEFAULT_RETRY_OPTIONS: ResolvedRetryOptions = {
  timeout: 60_000,
  statusCodesToRetry: [408, 429, 500, 502, 503, 504],
  httpMethodsToRetry: ["GET", "HEAD", "PUT", "OPTIONS"],
  maxRetries: 3,
  delay: 1000,
  backoffFactor: 2,
  useExponentialBackoff: true,
  maxJitter: 0.25,
};

/**
 * How a failed request is retried.
 *
 * @remarks
 * Every field is optional, so any subset is accepted and "the defaults with two of them changed"
 * is a two-field literal. What the engine reads is this type **resolved**, with every field filled
 * in, so the policy can be read off the options rather than inferred from engine behaviour. It is
 * resolved at two layers: once when the client is built, over the engine's defaults, and again on
 * every call, over the client's resolved options, when a call passes its own `retry`, which is
 * {@link RequestRetryOptions}, three of these fields.
 *
 * A field a call leaves out keeps the client's value. A field given a value the engine cannot
 * honour falls back to what stands behind it — the default at the client, the client's value on a
 * call — and takes none of the fields beside it with it. The per-field blocks say which values
 * those are. `0`, `false` and an empty list are values, never misses.
 *
 * `timeout` is the one field that is not about retrying: it bounds every attempt, the only one
 * under `maxRetries: 0` included, so this type is what a single request may do as well as what a
 * retried one may.
 *
 * Two things are retried: a response **status**, and a **transport fault** — a connection failure
 * or a per-attempt timeout. An abort is never retried, nor is a fault the SDK itself caused, nor a
 * request whose body is a stream, because a stream cannot be replayed.
 *
 * Obtaining a credential comes before the attempt's timer starts, and a failure there is never
 * retried by the operation. The OAuth2 token request is a request of its own, timed and retried
 * under the client's policy, so a token endpoint that drops the connection or runs out its own
 * `timeout` ends the call with that request's `ConnectionError` or `TimeoutError`. A token
 * endpoint that answers with a refusal is an `AuthError` and ends the call too.
 */
export type RetryOptions = {
  /**
   * Milliseconds a single attempt may take, from sending the request to its response headers.
   *
   * @remarks
   * A value `setTimeout` cannot honour — negative, fractional, `NaN`, `Infinity`, or above
   * `2_147_483_647` — silently falls back to the default, or on a call to the client's value.
   * `0` is passed through literally, a zero-length deadline rather than "no timeout".
   *
   * Every attempt gets its own deadline, so this is the budget for one attempt and not for the
   * call. `maxRetries: 0` does not lift it — the single attempt is timed like any other.
   *
   * The timer starts once the credential is in hand and stops when the response headers arrive, so
   * it covers neither obtaining the credential nor reading any response body. The call's `signal`
   * bounds both, and an OAuth2 token request is also timed on its own.
   *
   * @default 60000
   */
  readonly timeout?: number;

  /**
   * Response statuses that are retried. Exactly these and no others.
   *
   * @remarks
   * There is no family rule: a status is retried if and only if it appears here. So `[429, 503]`
   * stops retrying 500 and 502. An empty list retries no status at all, while a list carrying
   * anything that is not a status code between 100 and 599 — and any value that is not a list of
   * them at all — falls back to the default.
   *
   * The default is the C# SDK's own set, each with a transient story — a timeout, a rate limit, an
   * overloaded or misbehaving origin. The rest of the 5xx family is deliberately not in it: 501
   * and 505 will not succeed on a second attempt, and 510 and 511 both mean the caller must change
   * something first. 409 is absent for its own reason — two of the three `ConflictReason` values
   * this API declares are permanent, and the engine cancels the body before it could tell which
   * one arrived.
   *
   * @default [408, 429, 500, 502, 503, 504]
   */
  readonly statusCodesToRetry?: readonly number[];

  /**
   * Request methods that are retried. Exactly these and no others.
   *
   * @remarks
   * The default is the conservative policy the C# SDK defaults to, which never sends a POST, a
   * PATCH or a DELETE twice. Every non-GET operation mints its own `Idempotency-Key`, which is
   * what makes widening it safe: name all seven methods and a write is retried like anything
   * else. An empty list disables retries entirely, while a list carrying an entry that is not one
   * of the seven methods — a lower-cased `"get"` among them — is rejected whole and falls back to
   * the default, exactly as a bad status list does.
   *
   * @default ["GET", "HEAD", "PUT", "OPTIONS"]
   */
  readonly httpMethodsToRetry?: readonly HttpMethod[];

  /**
   * How many further attempts a failed request may get, on top of the first one.
   *
   * @remarks
   * A value that is not a safe, non-negative integer falls back to the default. `0` sends every
   * request exactly once.
   *
   * @default 3
   */
  readonly maxRetries?: number;

  /**
   * Milliseconds to wait before the first retry, and the base the backoff curve grows from.
   *
   * @remarks
   * A value `setTimeout` cannot honour — negative, fractional, `NaN`, `Infinity`, or above
   * `2_147_483_647` — falls back to the default. `0` retries immediately.
   *
   * No computed wait exceeds **60 seconds**, whatever this and `backoffFactor` compute between
   * them. That ceiling is the engine's own rather than an option, and it bounds a `Retry-After`
   * by the same number, so a value above it is accepted here and then never reached. Jitter sits
   * on top of that ceiling rather than inside it, so the longest single wait is
   * `60_000 × (1 + maxJitter)` — 75 seconds at the default.
   *
   * @default 1000
   */
  readonly delay?: number;

  /**
   * What each successive delay is multiplied by, when `useExponentialBackoff` is set.
   *
   * @remarks
   * A value below 1 or above 100, or one that is not finite, falls back to the default. Growth
   * stops at the ceiling {@link RetryOptions.delay} describes.
   *
   * @default 2
   */
  readonly backoffFactor?: number;

  /**
   * Grow the delay by `backoffFactor` per attempt, rather than repeating `delay` unchanged.
   *
   * @default true
   */
  readonly useExponentialBackoff?: boolean;

  /**
   * The largest **fraction** of a delay that jitter may move it by at random.
   *
   * @remarks
   * A fraction between 0 and 1, and it is **additive**: a wait is never shorter than the delay it
   * spreads. `0.25` spreads a 1000ms delay off the curve over 1000-1250ms, and a 30s `Retry-After`
   * over 30-37.5s — a client that woke before the time the server named would be answering a
   * request to back off by backing off less.
   *
   * It is not a number of milliseconds: a value outside 0 to 1 falls back to the default, which
   * is the one mistake a reader of the C# `RetryOptions` is most likely to make, its `MaxJitter`
   * being a `TimeSpan`. `0` makes both exact, which is what a test wanting a predictable delay
   * should pass.
   *
   * @default 0.25
   */
  readonly maxJitter?: number;

  /**
   * Called before each retry sleep, with the attempt about to be made.
   *
   * @remarks
   * Runs after the failed attempt's release has begun — its response body's cancel started, its
   * timer already cleared — so a callback that throws cannot leak a connection or orphan a timer,
   * but it does end the call, surfacing as the error it threw. Keep it to logging and metrics.
   *
   * Called for a retried transport fault as well as a retried status; narrow on
   * {@link RetryAttempt.reason} before reading either.
   *
   * Anything other than a function falls back to no callback at all, which is what leaving it
   * out means too — the absence of a callback is this field's value rather than a missing one.
   *
   * @default undefined
   */
  readonly onRetry?: (attempt: RetryAttempt) => void;
};

/**
 * The part of {@link RetryOptions} a single call may override, through `RequestOptions.retry`.
 *
 * @remarks
 * Three fields, the ones whose right value differs from one operation to the next: how many
 * attempts this call gets, how long each may take, and which statuses are worth a second try
 * for this resource. The backoff curve, the method gate and `onRetry` are how the client paces
 * itself against one server, so they are set on the client alone.
 *
 * A field named here replaces the client's for this call, and one left out keeps the client's
 * value. The restriction is the type's: a value carrying another `RetryOptions` field, from
 * JavaScript or through a constant typed as the wider record, still has it honoured.
 */
export type RequestRetryOptions = Pick<RetryOptions, "maxRetries" | "timeout" | "statusCodesToRetry">;

/**
 * {@link RetryOptions} with every field filled in: what the engine reads, never what a caller
 * writes.
 *
 * @remarks
 * `RetryOptions` is itself the partial — every field optional, so any subset is accepted — and this
 * is its resolved twin, built once when the client is built and again, over that one, on every
 * call. The engine therefore reads a policy rather than re-deciding what an absent field meant, and
 * no read site needs a `!`.
 *
 * `onRetry` is the one field that stays optional: the absence of a callback is its value, so a
 * resolved record may leave the key out, and a missing key means the same as `undefined`.
 */
export type ResolvedRetryOptions = Required<Omit<RetryOptions, "onRetry">> & {
  readonly onRetry?: RetryOptions["onRetry"];
};

export function buildRetryOptions(
  retry: RetryOptions | undefined,
  fallbacks: ResolvedRetryOptions = DEFAULT_RETRY_OPTIONS,
): ResolvedRetryOptions {
  const schema: Schema<ResolvedRetryOptions> = s.of(
    s.fallback(
      s.object<ResolvedRetryOptions>({
        timeout: s.fallback(s.int().check(s.gte(0), s.lte(MAX_TIMEOUT_MS)), fallbacks.timeout),
        statusCodesToRetry: s.fallback(
          s.array(s.int().check(s.gte(MIN_STATUS), s.lte(MAX_STATUS))),
          fallbacks.statusCodesToRetry,
        ),
        httpMethodsToRetry: s.fallback(s.array(s.literal(HTTP_METHODS)), fallbacks.httpMethodsToRetry),
        maxRetries: s.fallback(s.int().check(s.gte(0)), fallbacks.maxRetries),
        delay: s.fallback(s.int().check(s.gte(0), s.lte(MAX_TIMEOUT_MS)), fallbacks.delay),
        backoffFactor: s.fallback(
          s.float64().check(s.gte(1), s.lte(MAX_BACKOFF_FACTOR)),
          fallbacks.backoffFactor,
        ),
        useExponentialBackoff: s.fallback(s.boolean(), fallbacks.useExponentialBackoff),
        maxJitter: s.fallback(s.float64().check(s.gte(0), s.lte(1)), fallbacks.maxJitter),
        onRetry: s.fallback(s.callback<(attempt: RetryAttempt) => void>(), fallbacks.onRetry),
      }),
      fallbacks,
    ),
  );
  try {
    return schema.decode(retry);
  } catch (err) {
    throw new ConfigurationError("The retry options could not be resolved.", { cause: err });
  }
}

/**
 * One retry, as {@link RetryOptions.onRetry} sees it.
 */
export type RetryAttempt = {
  /** Which retry this is: `1` for the first one, after the original attempt failed. */
  readonly attemptNumber: number;

  /** Milliseconds the engine is about to wait before re-sending. */
  readonly delay: number;

  /** What went wrong on the attempt being abandoned. */
  readonly reason: RetryReason;
};

/**
 * Why an attempt is being retried — a response the engine rejected, or no response at all.
 *
 * @remarks
 * Narrow on `kind` before reading the rest: a fault carries no status and no headers, because
 * nothing came back.
 */
export type RetryReason =
  | {
      /** A response arrived and its status is retryable. */
      readonly kind: "status";

      /** The status that triggered the retry. */
      readonly status: number;

      /**
       * Headers of the response being discarded.
       *
       * @remarks
       * The one place a retried-away response reaches the caller. Its body is already being
       * cancelled by the time this runs, so only the headers survive.
       */
      readonly headers: Headers;
    }
  | {
      /** No response arrived: the request failed at the transport layer. */
      readonly kind: "fault";

      /**
       * The classified failure, always a `connection` or a `timeout`.
       *
       * @remarks
       * An abort is never retried, and neither is a fault the SDK itself caused, so neither ever
       * reaches this callback.
       *
       * The OAuth2 token request's own retries arrive here too, since it runs under the client's
       * policy. A fault names the call that dialled, so one from the token request carries the
       * token endpoint's `uri` rather than the operation's.
       */
      readonly error: ConnectionError | TimeoutError;
    };

export type RespondedAttempt = {
  readonly kind: "response";
  readonly response: Response;
  readonly isStreaming: boolean;
  discard(): void;
};

export type FaultedAttempt = {
  readonly kind: "fault";
  readonly error: ConnectionError | TimeoutError;
  readonly isStreaming: boolean;
};

export class RetryPolicy {
  readonly #options: ResolvedRetryOptions;

  constructor(retry: RetryOptions | undefined, fallbacks: ResolvedRetryOptions) {
    this.#options = buildRetryOptions(retry, fallbacks);
  }

  async execute(
    method: HttpMethod,
    callerSignal: AbortSignal,
    startedAt: number,
    logger: HttpLogger,
    send: (timeout: number) => Promise<RespondedAttempt | FaultedAttempt>,
  ): Promise<Response> {
    for (let retriesMade = 0; ; retriesMade += 1) {
      const attempt = await send(this.#options.timeout);
      if (!shouldRetry(this.#options, retriesMade, method, attempt)) {
        if (attempt.kind === "fault") {
          logger.logFailure(attempt.error, startedAt);
          throw attempt.error;
        }
        return attempt.response;
      }
      let reason: RetryReason;
      switch (attempt.kind) {
        case "response":
          attempt.discard();
          reason = { kind: "status", status: attempt.response.status, headers: attempt.response.headers };
          break;
        case "fault":
          reason = { kind: "fault", error: attempt.error };
          break;
      }
      if (callerSignal.aborted) throw callerSignal.reason;
      const retry: RetryAttempt = {
        attemptNumber: retriesMade + 1,
        delay: retryDelayMs(this.#options, retriesMade, reason),
        reason,
      };
      logger.logRetry(retry, this.#options.maxRetries);
      this.#options.onRetry?.(retry);
      await sleep(retry.delay, callerSignal);
      if (callerSignal.aborted) throw callerSignal.reason;
    }
  }
}

function retryDelayMs(options: ResolvedRetryOptions, retriesMade: number, reason: RetryReason): number {
  const hint = reason.kind === "status" ? delayFromRetryAfterHeader(reason.headers, Date.now()) : undefined;
  const growth = options.useExponentialBackoff ? options.backoffFactor ** retriesMade : 1;
  const delay = Math.min(Math.max(hint ?? options.delay * growth, 0), MAX_DELAY_MS);
  return Math.ceil(delay * (1 + Math.random() * options.maxJitter));
}

function shouldRetry(
  options: ResolvedRetryOptions,
  attempt: number,
  method: HttpMethod,
  outcome: RespondedAttempt | FaultedAttempt,
): boolean {
  if (attempt >= options.maxRetries || outcome.isStreaming) return false;
  if (!options.httpMethodsToRetry.includes(method)) return false;
  return outcome.kind === "fault" || options.statusCodesToRetry.includes(outcome.response.status);
}

function delayFromRetryAfterHeader(headers: Headers, now: number): number | undefined {
  const value = headers.get("retry-after");
  if (value === null || value === "") return undefined;

  if (value[0]! >= "0" && value[0]! <= "9") {
    for (const c of value) if (c < "0" || c > "9") return undefined;
    return Number(value) * 1000;
  }

  const first = value[0]!.toLowerCase();
  if (first < "a" || first > "z") return undefined;
  const date = Date.parse(value);
  return Number.isNaN(date) ? undefined : date - now;
}

function sleep(ms: number, signal: AbortSignal): Promise<void> {
  if (signal.aborted) return Promise.resolve();
  return new Promise<void>((resolve) => {
    const timer = setTimeout(done, ms);
    signal.addEventListener("abort", done);
    function done(): void {
      clearTimeout(timer);
      signal.removeEventListener("abort", done);
      resolve();
    }
  });
}

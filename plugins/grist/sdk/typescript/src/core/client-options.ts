import { ConfigurationError } from "./errors.js";
import { buildLoggingOptions, type LoggingOptions, type ResolvedLoggingOptions } from "./logging.js";
import { buildRetryOptions, type RetryOptions, type ResolvedRetryOptions } from "./retry.js";
import {
  buildEventStreamOptions,
  type EventStreamOptions,
  type ResolvedEventStreamOptions,
} from "./event-stream.js";

/** The signature a replacement `fetch` must have, which is the global `fetch`'s own. */
export type FetchLike = typeof fetch;

/**
 * What the caller configures the engine with: every field optional, and one left out resolved to
 * the default its own block names.
 *
 * @remarks
 * The shell's `ClientOptions` intersects this directly, so a new engine option costs no emitted
 * line. {@link buildCoreClientOptions} fills every field in, and a value the engine cannot honour
 * falls back to its own default rather than being rejected.
 */
export type CoreClientOptions = {
  /**
   * How a request is timed and how a failed one is retried.
   *
   * @remarks
   * Any subset of {@link RetryOptions}. Retries are **on** by default — that type says what is
   * retried, what is not, and which value each field falls back to. Its `timeout` is the budget
   * for one attempt, so it applies whether or not a request is ever re-sent.
   */
  readonly retry?: RetryOptions | undefined;

  /**
   * How an event stream is watched for a silent server.
   *
   * @remarks
   * Any subset of {@link EventStreamOptions}, resolved once when the client is built and read only
   * by an operation that resolves to an `EventStream`. A field left out takes its default.
   */
  readonly eventStream?: EventStreamOptions | undefined;

  /** Logging of requests, responses and retries. Off by default, see {@link LoggingOptions}. */
  readonly logging?: LoggingOptions | undefined;

  /**
   * Replaces the global `fetch`. The one extension point for proxying or mocking.
   *
   * @remarks
   * It is called with one argument, the attempt's `Request`, and no `init`. A replacement must
   * forward that `Request`, or at least its `signal`, to whatever performs the request: one that
   * reads `init` forwards nothing, and drops the call's abort and its timeout. To add a header,
   * copy the `Request` with `new Request(request)` and set it on the copy's `headers`: passing
   * `{ headers }` to the copy replaces every header the SDK set.
   */
  readonly fetch?: FetchLike | undefined;
};

export type ResolvedCoreClientOptions = {
  readonly retry: ResolvedRetryOptions;
  readonly eventStream: ResolvedEventStreamOptions;
  readonly logging: ResolvedLoggingOptions;
  readonly fetch: FetchLike;
};

/**
 * Resolves the engine-wide options once, when the client is built, from what the caller passed.
 *
 * @remarks
 * `loggingEnvironmentVariable` is the name of the environment variable that can turn logging on.
 * It is read here, once, and only when `logging` sets neither `logger` nor `level`.
 *
 * @throws {@link ConfigurationError} when no `fetch` was supplied and the global one is missing,
 * or when reading `retry`, `eventStream` or `logging` throws. No value throws: every bounded field
 * resolves, its own default standing in for a value the engine cannot honour.
 */
export function buildCoreClientOptions(
  options: CoreClientOptions,
  loggingEnvironmentVariable: string,
): ResolvedCoreClientOptions {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new ConfigurationError("No fetch implementation available; pass ClientOptions.fetch.");
  }
  return {
    retry: buildRetryOptions(options.retry),
    eventStream: buildEventStreamOptions(options.eventStream),
    logging: buildLoggingOptions(options.logging, loggingEnvironmentVariable),
    fetch: fetchImpl,
  };
}

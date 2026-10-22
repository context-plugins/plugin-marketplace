import type { ApiError } from "./api-error.js";
import type { HttpMethod } from "./api-request.js";
import type { PayloadOf } from "./response-decoder.js";

export type RequestOutcome<T, E extends ApiError> =
  | { ok: true; status: number; headers: Headers; data: T }
  | { ok: false; status: number; headers: Headers; error: E };

/**
 * The non-throwing view of a call, returned by {@link ApiPromise.asApiResult}.
 *
 * @remarks
 * Narrow on `ok`. The success branch carries `value`. The failure branch is a plain object rather
 * than the error instance, carrying its `status`, `headers`, `message` and `payload` plus the
 * `method` and `uri` of the call, and `result.payload` narrows exactly as `err.payload` would.
 */
export type ApiResult<T, E extends ApiError> =
  | { ok: true; status: number; headers: Headers; value: T }
  | {
      ok: false;
      status: number;
      headers: Headers;
      message: string;
      method: HttpMethod;
      uri: string;
      payload: PayloadOf<E>;
    };

/**
 * The promise every operation returns: resolves with `T`, rejects with `E` or a `CoreError`.
 *
 * @remarks
 * It is a real `Promise`, so `await`, `.then` and `Promise.all` all work. Awaiting it throws `E` on
 * an error status and a `CoreError` when no usable response was produced, so a complete `catch`
 * needs both. A bug rejects as the raw error it threw, outside the family. Call
 * {@link ApiPromise.asApiResult} for a non-throwing {@link ApiResult} instead.
 *
 * `.then`, `.catch` and `.finally` hand back a plain `Promise`, which has no `asApiResult` on it.
 * Call that method on the value the operation returned.
 *
 * Nothing here suppresses an unhandled rejection. An abandoned call that fails is reported by the
 * runtime: `unhandledRejection` on Node, which by default ends the process, and
 * `unhandledrejection` in a browser.
 */
export class ApiPromise<T, E extends ApiError> extends Promise<T> {
  readonly #outcome: Promise<RequestOutcome<T, E>>;

  constructor(outcome: Promise<RequestOutcome<T, E>>) {
    super((resolve, reject) => {
      outcome.then((o) => (o.ok ? resolve(o.data) : reject(o.error)), reject);
    });
    this.#outcome = outcome;
  }

  static override get [Symbol.species](): PromiseConstructor {
    return Promise;
  }

  /**
   * Resolves to an {@link ApiResult} instead of throwing: an error status arrives as a value, not
   * as a rejection.
   *
   * @remarks
   * It is also the only way to read the HTTP status and response headers of a successful call. An
   * error status is the only failure it turns into a value. A request value that would not encode,
   * auth, a dropped connection, a timeout and a body that would not decode all still reject, and a
   * caller abort rejects with the signal's own `reason`.
   *
   * Call it on the value the operation returned, in the same turn: marking this promise handled is
   * its first act, so a call deferred past a turn leaves the rejection unhandled until it runs.
   */
  async asApiResult(): Promise<ApiResult<T, E>> {
    this.catch(() => {});
    const o = await this.#outcome;
    return o.ok
      ? {
          ok: true,
          value: o.data,
          status: o.status,
          headers: o.headers,
        }
      : {
          ok: false,
          status: o.error.status,
          headers: o.error.headers,
          message: o.error.message,
          method: o.error.method,
          uri: o.error.uri,
          payload: o.error.payload,
        };
  }
}

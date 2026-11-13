import type { ApiError } from "../api-error.js";
import { toApiResult, type ApiResult, type RequestOutcome } from "../api-promise.js";

/**
 * The lazy walk a paged operation returns: nothing is sent until a loop starts.
 *
 * @remarks
 * Iterating it yields the items of every page in order; {@link Pageable.pages} yields each
 * decoded page instead. Either loop throws `E` at the first error status, and a `CoreError` when
 * a page produced no usable response or a next link the API sent could not be followed, so a
 * complete `catch` needs both; a caller abort throws the signal's own `reason`. For the form
 * that turns an error status into a value, call
 * {@link Pageable.asApiResult}. Each new loop starts again from the first page. The request's
 * top-level fields are captured when the operation is called; a nested value — an array, a map or
 * a model inside a field — is read again when each page is requested.
 */
export class Pageable<TPage, TItem, E extends ApiError> implements AsyncIterable<TItem> {
  readonly #fetchPages: () => AsyncIterable<RequestOutcome<TPage, E>>;
  readonly #itemsSelector: (page: TPage) => readonly TItem[] | null | undefined;

  constructor(
    fetchPages: () => AsyncIterable<RequestOutcome<TPage, E>>,
    itemsSelector: (page: TPage) => readonly TItem[] | null | undefined,
  ) {
    this.#fetchPages = fetchPages;
    this.#itemsSelector = itemsSelector;
  }

  /** The items of every page in order, fetching each page as the previous one runs out. */
  async *[Symbol.asyncIterator](): AsyncIterator<TItem> {
    for await (const page of this.pages()) yield* this.#itemsSelector(page) ?? [];
  }

  /** Each page's decoded body, in order. Throws `E` on an error status. */
  async *pages(): AsyncIterable<TPage> {
    for await (const outcome of this.#fetchPages()) {
      if (!outcome.ok) throw outcome.error;
      yield outcome.data;
    }
  }

  /**
   * The same walk with an error status as a value instead of a throw: its item loop ends at
   * one, and its {@link PageableApiResult.pages} yields one {@link ApiResult} per page.
   */
  asApiResult(): PageableApiResult<TPage, TItem, E> {
    return new PageableApiResult(this.#fetchPages, this.#itemsSelector);
  }
}

/**
 * The result form of a {@link Pageable}, returned by {@link Pageable.asApiResult}.
 *
 * @remarks
 * An error status is the only failure it turns into a value. Iterating it yields the items of
 * every successful page; an error status ends the walk and contributes no items, so an item loop
 * that ends cannot tell the last page from a failed one. {@link PageableApiResult.pages} is the
 * view that shows which page failed. Everything else still throws from either loop, as it would
 * from an awaited call: a request value that would not encode, auth, a dropped connection, a
 * timeout, a body that would not decode and a next link that could not be followed all throw a
 * `CoreError`, and a caller abort throws the signal's own `reason`.
 */
export class PageableApiResult<TPage, TItem, E extends ApiError> implements AsyncIterable<TItem> {
  readonly #fetchPages: () => AsyncIterable<RequestOutcome<TPage, E>>;
  readonly #itemsSelector: (page: TPage) => readonly TItem[] | null | undefined;

  constructor(
    fetchPages: () => AsyncIterable<RequestOutcome<TPage, E>>,
    itemsSelector: (page: TPage) => readonly TItem[] | null | undefined,
  ) {
    this.#fetchPages = fetchPages;
    this.#itemsSelector = itemsSelector;
  }

  /**
   * The items of every successful page in order; an error status ends the walk silently, and
   * only a `CoreError` or a caller abort throws.
   */
  async *[Symbol.asyncIterator](): AsyncIterator<TItem> {
    for await (const outcome of this.#fetchPages()) {
      if (!outcome.ok) return;
      yield* this.#itemsSelector(outcome.data) ?? [];
    }
  }

  /**
   * One {@link ApiResult} per page, in order: the decoded body with its status and headers, or,
   * for an error status, the error's members as a value — after which the walk ends.
   */
  async *pages(): AsyncIterable<ApiResult<TPage, E>> {
    for await (const outcome of this.#fetchPages()) {
      yield toApiResult(outcome);
      if (!outcome.ok) return;
    }
  }
}

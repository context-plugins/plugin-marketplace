import type { HttpMethod, RequestOptions } from "./api-request.js";

/**
 * Hooks the client runs around each HTTP request, set on `ClientOptions.hooks` for every call or
 * on `RequestOptions.hooks` for one. The client's hooks run first, then the call's.
 */
export type HookOptions = {
  /** Hooks run before each attempt is sent. */
  readonly beforeRequest?: readonly BeforeRequestHook[] | undefined;

  /** Hooks run once each attempt's response headers arrive. */
  readonly afterResponse?: readonly AfterResponseHook[] | undefined;
};

/**
 * A hook run before an attempt is sent, with the request, the call's context and its signal.
 *
 * @remarks
 * Set headers on the request, or return a `Request` to send in its place. Build a replacement
 * with `new Request(request, { … })` so it keeps the call's signal.
 */
export type BeforeRequestHook = (
  request: Request,
  context: HookContext,
  signal: AbortSignal,
) => Request | void | Promise<Request | void>;

/**
 * A hook run once an attempt's response headers arrive, with the response, the call's context
 * and its signal.
 *
 * @remarks
 * Return a `Response` to use in its place. To read the body, read `response.clone()`, which
 * waits for the whole body: on an event stream or a download, read the status and headers only.
 */
export type AfterResponseHook = (
  response: Response,
  context: HookContext,
  signal: AbortSignal,
) => Response | void | Promise<Response | void>;

/** What a hook is told about the call it runs in. */
export type HookContext = {
  /** HTTP method of the call. */
  readonly method: HttpMethod;

  /** The URL the call dials, without its query. */
  readonly uri: string;

  /** The options the call was made with, or `undefined` when it was given none. */
  readonly options: Omit<RequestOptions, "signal"> | undefined;
};

export class HookRunner {
  readonly #beforeRequest: readonly BeforeRequestHook[];
  readonly #afterResponse: readonly AfterResponseHook[];
  readonly #context: HookContext;
  readonly #signal: AbortSignal;

  constructor(
    hooks: HookOptions | undefined,
    clientHooks: HookOptions | undefined,
    context: HookContext,
    signal: AbortSignal,
  ) {
    this.#beforeRequest = [...(clientHooks?.beforeRequest ?? []), ...(hooks?.beforeRequest ?? [])];
    this.#afterResponse = [...(clientHooks?.afterResponse ?? []), ...(hooks?.afterResponse ?? [])];
    this.#context = context;
    this.#signal = signal;
  }

  async beforeRequest(request: Request): Promise<readonly [Request, ...Request[]]> {
    const requests: [Request, ...Request[]] = [request];
    for (const hook of this.#beforeRequest) {
      const replacement = await hook(requests[0], this.#context, this.#signal);
      if (replacement) requests.unshift(replacement);
    }
    return requests;
  }

  async afterResponse(response: Response): Promise<Response> {
    let current = response;
    for (const hook of this.#afterResponse) {
      const replacement = await hook(current, this.#context, this.#signal);
      if (replacement) current = replacement;
    }
    return current;
  }
}

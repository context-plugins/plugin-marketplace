import type { ApiRequest, HttpMethod, RequestOptions, RawClientOptions } from "./api-request.js";
import { CoreError, ConnectionError, TimeoutError } from "./errors.js";
import type { ApiError } from "./api-error.js";
import { ResponseReader, type ResponseHandler } from "./response-decoder.js";
import { ApiPromise, type RequestOutcome } from "./api-promise.js";
import { buildBody } from "./request-body.js";
import { RetryPolicy } from "./retry.js";
import { UrlBuilder } from "./url.js";
import { HeadersBuilder } from "./headers.js";
import { HttpLogger } from "./http-logger.js";
import { authenticateRequest } from "./auth/schemes.js";

export class RawClient {
  readonly #config: RawClientOptions;
  readonly #urlBuilder: UrlBuilder;
  readonly #headersBuilder: HeadersBuilder;
  readonly #responseReader: ResponseReader;

  constructor(config: RawClientOptions) {
    this.#config = config;
    this.#urlBuilder = new UrlBuilder(config);
    this.#headersBuilder = new HeadersBuilder(config);
    this.#responseReader = new ResponseReader(config);
  }

  execute<T, E extends ApiError>(
    apiRequest: ApiRequest,
    responseHandler: ResponseHandler<T, E>,
    options?: RequestOptions,
  ): ApiPromise<T, E> {
    return new ApiPromise<T, E>(this.#dispatch<T, E>(apiRequest, responseHandler, options));
  }

  async #dispatch<T, E extends ApiError>(
    apiRequest: ApiRequest,
    responseHandler: ResponseHandler<T, E>,
    options: RequestOptions | undefined,
  ): Promise<RequestOutcome<T, E>> {
    const startedAt = Date.now();
    const callerSignal = options?.signal ?? neverAbortedSignal();
    const uploadController = new AbortController();
    const streamRequestController = new AbortController();
    const abortStreamRequest = (): void => streamRequestController.abort();

    const url = this.#urlBuilder.build(apiRequest);
    const { uri } = url;

    const body = buildBody(
      apiRequest.method,
      uri,
      apiRequest.body,
      AbortSignal.any([callerSignal, uploadController.signal]),
    );

    const logger = new HttpLogger(
      options?.logging,
      this.#config.logging,
      apiRequest.method,
      url.withQuery([]),
    );
    const headers = this.#headersBuilder.build(apiRequest, uri, body);
    const policy = new RetryPolicy(options?.retry, this.#config.retry);
    const response = await policy.execute(
      apiRequest.method,
      callerSignal,
      startedAt,
      logger,
      async (timeout) => {
        const authenticated = await authenticateRequest(
          apiRequest.method,
          apiRequest.auth,
          url,
          headers,
          callerSignal,
          startedAt,
          logger,
        );

        const isStreaming = body.streaming === true;
        const timeoutController = new AbortController();
        const signal = AbortSignal.any([
          callerSignal,
          timeoutController.signal,
          streamRequestController.signal,
        ]);
        if (isStreaming) {
          timeoutController.signal.addEventListener(
            "abort",
            () => uploadController.abort(timeoutController.signal.reason),
            { once: true },
          );
        }

        const request = new Request(authenticated.url, {
          method: apiRequest.method,
          headers: authenticated.headers,
          body: body.body,
          signal,
          ...(isStreaming ? { duplex: "half", window: null, redirect: "error" } : {}),
        });
        await logger.logRequest(request);

        const timer = startTimeout(timeoutController, timeout, apiRequest.method, uri);
        let response: Response;
        try {
          response = await this.#config.fetch.call(undefined, request);
        } catch (err) {
          if (err instanceof ConnectionError || err instanceof TimeoutError)
            return { kind: "fault", error: err, isStreaming };
          if (err instanceof CoreError) throw err;
          if (signal.reason instanceof TimeoutError)
            return { kind: "fault", error: signal.reason, isStreaming };
          if (signal.aborted) throw signal.reason;
          return {
            kind: "fault",
            error: new ConnectionError(
              `${apiRequest.method} ${uri} failed: ${
                err instanceof Error && err.message !== "" ? err.message : "Connection error."
              }`,
              { cause: err, method: apiRequest.method, uri },
            ),
            isStreaming,
          };
        } finally {
          clearTimeout(timer);
        }

        const discard = (): void => {
          void Promise.resolve(response.body?.cancel()).catch(() => {});
        };
        try {
          logger.logResponse(response);
        } catch (err) {
          discard();
          throw err;
        }
        if (response.status === 401) apiRequest.auth.invalidate?.();
        return { kind: "response", response, isStreaming, discard };
      },
    );

    if (isSuccess(response.status)) {
      const data = await this.#responseReader.read(
        responseHandler.success,
        response,
        apiRequest.method,
        uri,
        callerSignal,
        abortStreamRequest,
      );
      return { ok: true, status: response.status, headers: response.headers, data };
    }

    const error = await this.#responseReader.readError(
      responseHandler.errorFactory,
      response,
      apiRequest.method,
      uri,
      callerSignal,
      abortStreamRequest,
    );
    return { ok: false, status: response.status, headers: response.headers, error };
  }
}

function isSuccess(status: number): boolean {
  return status >= 200 && status <= 299;
}

function neverAbortedSignal(): AbortSignal {
  return new AbortController().signal;
}

function startTimeout(
  controller: AbortController,
  timeoutMs: number,
  method: HttpMethod,
  uri: string,
): ReturnType<typeof setTimeout> {
  return setTimeout(
    () =>
      controller.abort(
        new TimeoutError(`${method} ${uri} failed: Request timed out after ${timeoutMs}ms.`, {
          method,
          uri,
          timeout: timeoutMs,
        }),
      ),
    timeoutMs,
  );
}

import type { HttpMethod } from "./api-request.js";
import { ConfigurationError } from "./errors.js";
import {
  logLevels,
  type HttpResponseDetails,
  type Logger,
  type LogLevel,
  type RequestLoggingOptions,
  type ResolvedLoggingOptions,
} from "./logging.js";
import type { RetryAttempt } from "./retry.js";

const SAFE_HEADERS: ReadonlySet<string> = new Set([
  "accept",
  "accept-charset",
  "accept-encoding",
  "accept-language",
  "accept-ranges",
  "age",
  "allow",
  "cache-control",
  "connection",
  "content-disposition",
  "content-encoding",
  "content-language",
  "content-length",
  "content-md5",
  "content-range",
  "content-type",
  "date",
  "etag",
  "expect",
  "expires",
  "host",
  "idempotency-key",
  "if-match",
  "if-modified-since",
  "if-none-match",
  "if-range",
  "if-unmodified-since",
  "keep-alive",
  "last-modified",
  "max-forwards",
  "origin",
  "pragma",
  "range",
  "ratelimit-limit",
  "ratelimit-policy",
  "ratelimit-remaining",
  "ratelimit-reset",
  "request-id",
  "retry-after",
  "server",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "user-agent",
  "vary",
  "via",
  "warning",
  "www-authenticate",
  "traceparent",
  "tracestate",
  "x-correlation-id",
  "x-ratelimit-limit",
  "x-ratelimit-remaining",
  "x-ratelimit-reset",
  "x-request-id",
  "x-apimatic-lang",
  "x-apimatic-package-version",
  "x-apimatic-gen-version",
  "x-apimatic-os",
  "x-apimatic-runtime",
]);

const SAFE_QUERY_KEYS: ReadonlySet<string> = new Set([
  "cursor",
  "dates",
  "datetime",
  "limit",
  "offset",
  "page",
  "since",
  "size",
  "strings",
]);

export class HttpLogger {
  readonly #logger: Logger;
  readonly #logsInfo: boolean;
  readonly #logsWarn: boolean;
  readonly #logsError: boolean;
  readonly #logsRequestHeaders: boolean;
  readonly #logsRequestBody: boolean;
  readonly #logsResponseHeaders: boolean;
  readonly #loggableContentTypes: readonly string[];
  readonly #bodySizeLimit: number;
  readonly #redaction: Redaction;
  readonly #method: HttpMethod;
  readonly #url: URL;
  #sentAt = 0;

  constructor(
    requestLoggingOptions: RequestLoggingOptions | undefined,
    loggingOptions: ResolvedLoggingOptions,
    method: HttpMethod,
    url: URL,
  ) {
    this.#method = method;
    this.#url = url;
    const { level, logRequestHeaders, logResponseHeaders, logRequestBody } = applyRequestLoggingOptions(
      requestLoggingOptions,
      loggingOptions,
    );
    this.#logger = loggingOptions.logger;
    this.#logsInfo = enables(level, "info");
    this.#logsWarn = enables(level, "warn");
    this.#logsError = enables(level, "error");
    this.#logsRequestHeaders = enables(level, "debug") && logRequestHeaders;
    this.#logsRequestBody = enables(level, "debug") && logRequestBody;
    this.#logsResponseHeaders = enables(level, "debug") && logResponseHeaders;
    this.#loggableContentTypes = loggingOptions.loggableContentTypes.map((type) => type.toLowerCase());
    this.#bodySizeLimit = loggingOptions.bodySizeLimit;
    this.#redaction = new Redaction(loggingOptions);
  }

  async logRequest(request: Request): Promise<void> {
    if (this.#logsInfo) {
      const method = this.#method;
      const href = this.#redaction.redactUrl(this.#url);
      this.#logger.info(`sending ${method} ${href}`, { event: "HttpRequest", method, url: href });
    }

    if (this.#logsRequestHeaders) {
      this.#logger.debug("request headers", {
        ...this.#redaction.redactHeaders(request.headers),
        event: "RequestHeaders",
      });
    }

    if (this.#logsRequestBody && request.body !== null) {
      const mediaType = mediaTypeOf(request.headers.get("content-type"));
      if (mediaType !== "" && this.#loggableContentTypes.some((type) => mediaType.startsWith(type))) {
        this.#logger.debug("request body", {
          event: "RequestBody",
          mediaType,
          body: await this.#renderBody(request, mediaType),
        });
      }
    }
    this.#sentAt = Date.now();
  }

  logResponse(response: Response): void {
    if (response.ok ? this.#logsInfo : this.#logsWarn) {
      const method = this.#method;
      const href = this.#redaction.redactUrl(this.#url);
      const { status } = response;
      const durationMs = Date.now() - this.#sentAt;
      const details: HttpResponseDetails = { event: "HttpResponse", method, url: href, status, durationMs };
      if (response.ok) {
        this.#logger.info(`${method} ${href} succeeded with status ${status} in ${durationMs}ms`, details);
      } else {
        this.#logger.warn(`${method} ${href} failed with status ${status} in ${durationMs}ms`, details);
      }
    }

    if (this.#logsResponseHeaders) {
      this.#logger.debug("response headers", {
        ...this.#redaction.redactHeaders(response.headers),
        event: "ResponseHeaders",
      });
    }
  }

  logRetry(retry: RetryAttempt, maxRetries: number): void {
    if (this.#logsWarn) {
      const method = this.#method;
      const href = this.#redaction.redactUrl(this.#url);
      const { reason } = retry;
      this.#logger.warn(
        `${method} ${href} retrying in ${retry.delay}ms (retry ${retry.attemptNumber} of ${maxRetries}) after ${
          reason.kind === "status" ? `status ${reason.status}` : reason.error.name
        }`,
        {
          event: "HttpRetrying",
          method,
          url: href,
          delayMs: retry.delay,
          retry: retry.attemptNumber,
          maxRetries,
          ...(reason.kind === "status"
            ? { reason: "status", status: reason.status }
            : { reason: "fault", errorName: reason.error.name }),
        },
      );
    }
  }

  logFailure(error: Error, startedAt: number): void {
    if (this.#logsError) {
      const method = this.#method;
      const href = this.#redaction.redactUrl(this.#url);
      const durationMs = Date.now() - startedAt;
      this.#logger.error(`${method} ${href} failed after ${durationMs}ms: ${error.name}`, {
        event: "HttpFailed",
        method,
        url: href,
        durationMs,
        errorName: error.name,
      });
    }
  }

  async #renderBody(request: Request, mediaType: string): Promise<string> {
    const body = await request.clone().text();
    const redacted =
      mediaType === "application/x-www-form-urlencoded" ? this.#redaction.redactFormBody(body) : body;
    return truncateToBytes(redacted, this.#bodySizeLimit);
  }
}

class Redaction {
  readonly placeholder: string;
  readonly #redactedHeaders: ReadonlySet<string>;
  readonly #unmaskedHeaders: ReadonlySet<string>;
  readonly #redactedKeys: ReadonlySet<string>;

  constructor(options: ResolvedLoggingOptions) {
    this.placeholder = options.redactionPlaceholder;
    this.#redactedHeaders = new Set(options.redactedHeaders.map((name) => name.toLowerCase()));
    this.#unmaskedHeaders = new Set(options.unmaskHeaders.map((name) => name.toLowerCase()));
    this.#redactedKeys = new Set(options.redactedKeys.map((key) => key.toLowerCase()));
  }

  redactHeaders(headers: Headers): Record<string, string> {
    const redacted: Record<string, string> = {};
    for (const [name, value] of headers) {
      if (this.#isRedactedHeader(name)) {
        redacted[name] = this.placeholder;
        continue;
      }
      const previous = redacted[name];
      redacted[name] = previous === undefined ? value : `${previous}, ${value}`;
    }
    return redacted;
  }

  redactUrl(url: URL): string {
    const query = maskPairs(url.search.slice(1), this.placeholder, (key) => this.#isRedactedQueryKey(key));
    return `${url.origin}${url.pathname}${query === "" ? "" : `?${query}`}${url.hash}`;
  }

  redactFormBody(body: string): string {
    return maskPairs(body, this.placeholder, (key) => this.isRedactedKey(key));
  }

  isRedactedKey(key: string): boolean {
    return this.#redactedKeys.has(key.toLowerCase());
  }

  #isRedactedHeader(name: string): boolean {
    if (this.#unmaskedHeaders.has(name)) return false;
    return this.#redactedHeaders.has(name) || !SAFE_HEADERS.has(name);
  }

  #isRedactedQueryKey(key: string): boolean {
    return this.isRedactedKey(key) || !SAFE_QUERY_KEYS.has(key.toLowerCase());
  }
}

type AppliedLoggingOptions = Pick<
  ResolvedLoggingOptions,
  "level" | "logRequestHeaders" | "logResponseHeaders" | "logRequestBody"
>;

function applyRequestLoggingOptions(
  requestLoggingOptions: RequestLoggingOptions | undefined,
  loggingOptions: ResolvedLoggingOptions,
): AppliedLoggingOptions {
  let override: LogLevel | undefined;
  try {
    override = logLevels.find((candidate) => candidate === requestLoggingOptions?.level);
  } catch (err) {
    throw new ConfigurationError("The logging options could not be resolved.", { cause: err });
  }
  if (override === undefined) return loggingOptions;
  return { level: override, logRequestHeaders: true, logResponseHeaders: true, logRequestBody: true };
}

function enables(level: LogLevel, threshold: LogLevel): boolean {
  return logLevels.indexOf(level) >= logLevels.indexOf(threshold);
}

function mediaTypeOf(contentType: string | null): string {
  if (contentType === null) return "";
  return (contentType.split(";")[0] ?? "").trim().toLowerCase();
}

function truncateToBytes(body: string, limit: number): string {
  const totalBytes = new TextEncoder().encode(body).length;
  if (totalBytes <= limit) return body;
  let bytesUsed = 0;
  let charsKept = 0;
  for (const char of body) {
    const code = char.codePointAt(0) ?? 0;
    const charBytes = code < 0x80 ? 1 : code < 0x800 ? 2 : code < 0x10000 ? 3 : 4;
    if (bytesUsed + charBytes > limit) break;
    bytesUsed += charBytes;
    charsKept += char.length;
  }
  return `${body.slice(0, charsKept)} …(${totalBytes} bytes total)`;
}

function maskPairs(pairs: string, placeholder: string, isRedactedKey: (key: string) => boolean): string {
  if (pairs === "") return pairs;
  return pairs
    .split("&")
    .map((pair) => {
      const equals = pair.indexOf("=");
      if (equals === -1) return pair;
      const rawKey = pair.slice(0, equals);
      return isRedactedKey(paramName(rawKey)) ? `${rawKey}=${placeholder}` : pair;
    })
    .join("&");
}

function paramName(rawKey: string): string {
  let key: string;
  try {
    key = decodeURIComponent(rawKey.replaceAll("+", " "));
  } catch {
    key = rawKey;
  }
  const bracket = key.indexOf("[");
  return bracket === -1 ? key : key.slice(0, bracket);
}

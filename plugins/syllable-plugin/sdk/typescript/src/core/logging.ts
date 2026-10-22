import { ConfigurationError } from "./errors.js";
import * as host from "./runtime-environment.js";
import * as s from "./validation/index.js";

export const logLevels = ["off", "error", "warn", "info", "debug"] as const;

/** The built-in defaults behind {@link LoggingOptions}; spread a list to extend it. */
export const defaultLoggingOptions: ResolvedLoggingOptions = Object.freeze({
  logger: console,
  level: "off",
  logRequestHeaders: false,
  logResponseHeaders: false,
  logRequestBody: false,
  bodySizeLimit: 32_768,
  loggableContentTypes: Object.freeze(["application/json", "application/x-www-form-urlencoded"]),
  redactedHeaders: Object.freeze([]),
  unmaskHeaders: Object.freeze([]),
  redactedKeys: Object.freeze([
    "sig",
    "signature",
    "access_token",
    "apikey",
    "api_key",
    "client_secret",
    "password",
    "refresh_token",
    "code",
    "assertion",
    "client_assertion",
  ]),
  redactionPlaceholder: "***",
});

/** How the client logs its HTTP traffic, set through `ClientOptions.logging`. */
export type LoggingOptions = {
  readonly logger?: Logger;
  readonly level?: LogLevel;
  readonly logRequestHeaders?: boolean;
  readonly logResponseHeaders?: boolean;
  readonly logRequestBody?: boolean;
  readonly bodySizeLimit?: number;
  readonly loggableContentTypes?: readonly string[];
  readonly redactedHeaders?: readonly string[];
  readonly unmaskHeaders?: readonly string[];
  readonly redactedKeys?: readonly string[];
  readonly redactionPlaceholder?: string;
};

/** The part of {@link LoggingOptions} a call may override through `RequestOptions.logging`. */
export type RequestLoggingOptions = Pick<LoggingOptions, "level">;

/** Where the client writes its log lines; `console` already has this shape. */
export type Logger = {
  error(message: string, details: LogDetails): void;
  warn(message: string, details: LogDetails): void;
  info(message: string, details: LogDetails): void;
  debug(message: string, details: LogDetails): void;
};

/** The structured fields passed with every log line; narrow on `event` to read the rest. */
export type LogDetails =
  | HttpRequestDetails
  | RequestHeadersDetails
  | RequestBodyDetails
  | HttpResponseDetails
  | ResponseHeadersDetails
  | HttpRetryingDetails
  | HttpFailedDetails;

/** Logged at `info` as a request is sent. */
export type HttpRequestDetails = {
  readonly event: "HttpRequest";
  readonly method: string;
  readonly url: string;
};

/** Logged at `debug` with a request's headers, one field per header. */
export type RequestHeadersDetails = {
  readonly event: "RequestHeaders";
  readonly [header: string]: string;
};

/** Logged at `debug` with a request's body. */
export type RequestBodyDetails = {
  readonly event: "RequestBody";
  readonly mediaType: string;
  readonly body: string;
};

/** Logged at `info` when a response arrives, or `warn` for an error status. */
export type HttpResponseDetails = {
  readonly event: "HttpResponse";
  readonly method: string;
  readonly url: string;
  readonly status: number;
  readonly durationMs: number;
};

/** Logged at `debug` with a response's headers, one field per header. */
export type ResponseHeadersDetails = {
  readonly event: "ResponseHeaders";
  readonly [header: string]: string;
};

/** Logged at `warn` before a failed attempt is retried. */
export type HttpRetryingDetails = {
  readonly event: "HttpRetrying";
  readonly method: string;
  readonly url: string;
  readonly delayMs: number;
  readonly retry: number;
  readonly maxRetries: number;
} & (
  | { readonly reason: "status"; readonly status: number }
  | { readonly reason: "fault"; readonly errorName: string }
);

/** Logged at `error` when a call ends without a response. */
export type HttpFailedDetails = {
  readonly event: "HttpFailed";
  readonly method: string;
  readonly url: string;
  readonly durationMs: number;
  readonly errorName: string;
};

export type LogSeverity = "error" | "warn" | "info" | "debug";

/** The most detailed level the client logs, or `"off"` to log nothing. */
export type LogLevel = LogSeverity | "off";

export type ResolvedLoggingOptions = Required<LoggingOptions>;

export function buildLoggingOptions(
  options: LoggingOptions | undefined,
  environmentVariable: string,
): ResolvedLoggingOptions {
  let logger: Logger | undefined;
  let levelInCode: boolean;
  try {
    logger = options?.logger;
    levelInCode = logLevels.some((level) => level === options?.level);
  } catch (err) {
    throw new ConfigurationError("The logging options could not be resolved.", { cause: err });
  }
  if (logger !== undefined) {
    return validateLoggingOptions(options, { ...defaultLoggingOptions, level: "debug" });
  }
  if (levelInCode) {
    return validateLoggingOptions(options, defaultLoggingOptions);
  }
  const level = environmentLogLevel(environmentVariable);
  if (level === undefined) return validateLoggingOptions(options, defaultLoggingOptions);
  const headers = level === "debug";
  return validateLoggingOptions(options, {
    ...defaultLoggingOptions,
    level,
    logRequestHeaders: headers,
    logResponseHeaders: headers,
  });
}

function validateLoggingOptions(
  options: LoggingOptions | undefined,
  fallbacks: Omit<ResolvedLoggingOptions, "logger">,
): ResolvedLoggingOptions {
  const schema = s.of(
    s.fallback(
      s.object<Omit<ResolvedLoggingOptions, "logger">>({
        level: s.fallback(s.literal(logLevels), fallbacks.level),
        logRequestHeaders: s.fallback(s.boolean(), fallbacks.logRequestHeaders),
        logResponseHeaders: s.fallback(s.boolean(), fallbacks.logResponseHeaders),
        logRequestBody: s.fallback(s.boolean(), fallbacks.logRequestBody),
        bodySizeLimit: s.fallback(s.int().check(s.gte(0)), fallbacks.bodySizeLimit),
        loggableContentTypes: s.fallback(s.array(s.string()), fallbacks.loggableContentTypes),
        redactedHeaders: s.fallback(s.array(s.string()), fallbacks.redactedHeaders),
        unmaskHeaders: s.fallback(s.array(s.string()), fallbacks.unmaskHeaders),
        redactedKeys: s.fallback(s.array(s.string()), fallbacks.redactedKeys),
        redactionPlaceholder: s.fallback(s.string(), fallbacks.redactionPlaceholder),
      }),
      fallbacks,
    ),
  );
  try {
    const logger = options?.logger;
    return {
      ...schema.decode(options),
      logger: logger === undefined ? defaultLoggingOptions.logger : logger,
    };
  } catch (err) {
    throw new ConfigurationError("The logging options could not be resolved.", { cause: err });
  }
}

function environmentLogLevel(name: string): LogLevel | undefined {
  const value = host.environmentVariable(name);
  if (value === undefined) return undefined;
  const level = logLevels.find((candidate) => candidate === value.toLowerCase());
  if (level === undefined) {
    console.warn(
      `${name} is set to ${JSON.stringify(value)}, which is not a log level. ` +
        `Expected one of: ${logLevels.join(", ")}. Logging stays off.`,
    );
  }
  return level;
}

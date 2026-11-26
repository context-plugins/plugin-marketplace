import type { AuthParams, AuthScheme, HttpMethod, MissingCredentials } from "../api-request.js";
import type { BasicAuthCredentials, SecretProvider } from "./credentials.js";
import type { RequestHeaders } from "../headers.js";
import type { RequestUrl } from "../url.js";
import type { HttpLogger } from "../http-logger.js";
import { AuthError, ConfigurationError, ConnectionError, TimeoutError } from "../errors.js";

const NO_PARAMS: AuthParams = { headers: [], query: [], cookies: [] };

export const noneAuth: AuthScheme = {
  resolve: () => NO_PARAMS,
  missingCredentials: () => [],
};

export function unconfiguredAuth(scheme: string): AuthScheme {
  return {
    resolve() {
      throw new Error(`The ${scheme} credential is not configured.`);
    },
    missingCredentials: () => [[scheme]],
  };
}

export function bearerAuth(scheme: string, secret: SecretProvider | undefined): AuthScheme {
  if (!hasSecret(secret)) return unconfiguredAuth(scheme);
  return {
    async resolve(signal) {
      return header("Authorization", `Bearer ${await resolveSecret(scheme, secret, signal)}`);
    },
    missingCredentials: () => [],
  };
}

export function basicAuth(scheme: string, credentials: BasicAuthCredentials | undefined): AuthScheme {
  if (credentials === undefined) return unconfiguredAuth(scheme);
  if (credentials.username.includes(":")) {
    throw new ConfigurationError("A basic-auth username cannot contain a colon (RFC 7617 section 2).");
  }
  return {
    resolve: () => header("Authorization", basicCredential(credentials.username, credentials.password)),
    missingCredentials: () => [],
  };
}

export function apiKeyHeaderAuth(
  scheme: string,
  config: { name: string; secret: SecretProvider | undefined },
): AuthScheme {
  if (!hasSecret(config.secret)) return unconfiguredAuth(scheme);
  return {
    async resolve(signal) {
      return header(config.name, await resolveSecret(scheme, config.secret, signal));
    },
    missingCredentials: () => [],
  };
}

export function apiKeyQueryAuth(
  scheme: string,
  config: { name: string; secret: SecretProvider | undefined },
): AuthScheme {
  if (!hasSecret(config.secret)) return unconfiguredAuth(scheme);
  return {
    async resolve(signal) {
      return {
        headers: [],
        query: [[config.name, await resolveSecret(scheme, config.secret, signal)]],
        cookies: [],
      };
    },
    missingCredentials: () => [],
  };
}

export function apiKeyCookieAuth(
  scheme: string,
  config: { name: string; secret: SecretProvider | undefined },
): AuthScheme {
  if (!hasSecret(config.secret)) return unconfiguredAuth(scheme);
  return {
    async resolve(signal) {
      return {
        headers: [],
        query: [],
        cookies: [[config.name, await resolveSecret(scheme, config.secret, signal)]],
      };
    },
    missingCredentials: () => [],
  };
}

export function allAuth(...schemes: readonly AuthScheme[]): AuthScheme {
  return {
    async resolve(signal) {
      const parts: AuthParams[] = [];
      for (const scheme of schemes) parts.push(await scheme.resolve(signal));
      return {
        headers: parts.flatMap((part) => part.headers),
        query: parts.flatMap((part) => part.query),
        cookies: parts.flatMap((part) => part.cookies),
      };
    },
    missingCredentials() {
      const names = schemes.flatMap((scheme) => scheme.missingCredentials().flat());
      return names.length === 0 ? [] : [names];
    },
    invalidate: (rejected) => invalidateEach(schemes, rejected),
  };
}

export function anyAuth(...schemes: readonly AuthScheme[]): AuthScheme {
  return {
    async resolve(signal) {
      const failures: unknown[] = [];
      for (const scheme of schemes) {
        if (scheme.missingCredentials().length > 0) continue;
        try {
          return await scheme.resolve(signal);
        } catch (err) {
          if (signal.aborted) throw signal.reason;
          if (err instanceof TimeoutError) throw err;
          failures.push(err);
        }
      }
      if (failures.length === 0) throw new Error("None of the accepted credentials is configured.");
      if (failures.length === 1) throw failures[0];
      throw new AggregateError(failures, "No authentication scheme succeeded.");
    },
    missingCredentials: () =>
      schemes.some((scheme) => scheme.missingCredentials().length === 0)
        ? []
        : schemes.flatMap((scheme) => scheme.missingCredentials()),
    invalidate: (rejected) => invalidateEach(schemes, rejected),
  };
}

export function orAnonymous(scheme: AuthScheme): AuthScheme {
  return {
    resolve: (signal) => (scheme.missingCredentials().length === 0 ? scheme.resolve(signal) : NO_PARAMS),
    missingCredentials: () => [],
    invalidate: (rejected) => scheme.invalidate?.(rejected) ?? false,
  };
}

export type AuthenticatedRequest = {
  readonly url: URL;
  readonly headers: Headers;
};

export async function authenticateRequest(
  method: HttpMethod,
  auth: AuthScheme,
  url: RequestUrl,
  headers: RequestHeaders,
  signal: AbortSignal,
  startedAt: number,
  logger: HttpLogger,
): Promise<AuthenticatedRequest> {
  const missing = auth.missingCredentials();
  if (missing.length > 0) {
    const { uri } = url;
    const error = new AuthError(`${method} ${uri} failed: ${describeMissing(missing)}`, { method, uri });
    logger.logFailure(error, startedAt);
    throw error;
  }
  try {
    const credential = await auth.resolve(signal);
    return {
      url: url.withQuery(credential.query),
      headers: headers.withCredential(credential.headers, credential.cookies),
    };
  } catch (err) {
    if (signal.aborted) throw signal.reason;
    if (err instanceof ConnectionError || err instanceof TimeoutError) throw err;
    if (err instanceof AuthError) {
      logger.logFailure(err, startedAt);
      throw err;
    }
    const { uri } = url;
    const error = new AuthError(
      `${method} ${uri} failed: ${
        err instanceof Error && err.message !== "" ? err.message : "A credential could not be obtained."
      }`,
      { cause: err, method, uri },
    );
    logger.logFailure(error, startedAt);
    throw error;
  }
}

export function header(name: string, value: string): AuthParams {
  return { headers: [[name, value]], query: [], cookies: [] };
}

export function basicCredential(username: string, password: string): string {
  return `Basic ${base64(new TextEncoder().encode(`${username}:${password}`))}`;
}

export function base64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

async function resolveSecret(
  scheme: string,
  secret: SecretProvider | undefined,
  signal: AbortSignal,
): Promise<string> {
  const value: unknown = typeof secret === "function" ? await secret(signal) : secret;
  if (value !== undefined && typeof value !== "string") {
    throw new TypeError(`A credential must be a string, received ${typeof value}.`);
  }
  if (value === undefined || value === "") {
    throw new Error(`The ${scheme} credential provider returned no value.`);
  }
  return value;
}

function hasSecret(secret: SecretProvider | undefined): boolean {
  return typeof secret === "function" || (secret !== undefined && secret !== "");
}

function invalidateEach(schemes: readonly AuthScheme[], rejected: string | null): boolean {
  let revocable = false;
  for (const scheme of schemes) {
    if (scheme.invalidate?.(rejected) === true) revocable = true;
  }
  return revocable;
}

function describeMissing(alternatives: MissingCredentials): string {
  if (alternatives.length > 1) {
    return `None of the accepted credentials is configured: ${alternatives.map(listed).join(", or ")}.`;
  }
  const names = alternatives[0] ?? [];
  return names.length === 1
    ? `The ${listed(names)} credential is not configured.`
    : `The ${listed(names)} credentials are not configured.`;
}

function listed(names: readonly string[]): string {
  if (names.length < 2) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names.slice(-1).join("")}`;
}

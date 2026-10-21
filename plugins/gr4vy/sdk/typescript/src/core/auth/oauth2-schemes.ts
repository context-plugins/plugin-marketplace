import type { AuthParams, AuthScheme } from "../api-request.js";
import type {
  OAuth2RefreshableTokenStrategy,
  OAuth2TokenStrategy,
  OAuthToken,
  OAuthTokenRefreshable,
} from "./oauth2-strategies.js";
import { header, noneAuth } from "./schemes.js";

const EXPIRY_BUFFER_MS = 30_000;

export function oauth2Scheme<TCredentials>(
  credentials: TCredentials | undefined,
  strategy: OAuth2TokenStrategy<TCredentials>,
): AuthScheme {
  if (credentials === undefined) return noneAuth;
  return cachedTokenScheme((signal) => strategy.getToken(credentials, signal));
}

export function oauth2RefreshableScheme<TCredentials>(
  credentials: TCredentials | undefined,
  strategy: OAuth2RefreshableTokenStrategy<TCredentials>,
): AuthScheme {
  if (credentials === undefined) return noneAuth;
  return cachedTokenScheme<OAuthTokenRefreshable>(async (signal, previous) => {
    const refreshToken = previous?.refreshToken;
    if (refreshToken === undefined) return strategy.getToken(credentials, signal);

    const refreshed = await strategy.tryRefreshToken(credentials, refreshToken, signal);
    if (refreshed === null) return strategy.getToken(credentials, signal);
    return refreshed.refreshToken === undefined ? { ...refreshed, refreshToken } : refreshed;
  });
}

function cachedTokenScheme<TToken extends OAuthToken>(
  acquire: (signal: AbortSignal, previous?: TToken) => Promise<TToken>,
): AuthScheme {
  let cached: { token: TToken; expiresAt: number } | undefined;
  let inflight: Promise<TToken> | undefined;

  async function obtainAndCacheToken(signal: AbortSignal): Promise<TToken> {
    try {
      const token = await acquire(signal, cached?.token);
      cached = { token, expiresAt: expiryOf(token) };
      return token;
    } finally {
      inflight = undefined;
    }
  }

  return {
    async resolve(signal) {
      if (cached !== undefined && Date.now() < cached.expiresAt) return bearer(cached.token);
      inflight ??= obtainAndCacheToken(signal);
      return bearer(await untilAborted(inflight, signal));
    },
    hasCredentials: () => true,
    invalidate: () => {
      cached = undefined;
    },
  };
}

function untilAborted<T>(promise: Promise<T>, signal: AbortSignal): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const onAbort = (): void => reject(signal.reason);
    signal.addEventListener("abort", onAbort, { once: true });
    if (signal.aborted) onAbort();
    promise.then(resolve, reject).finally(() => signal.removeEventListener("abort", onAbort));
  });
}

function bearer(token: OAuthToken): AuthParams {
  return header("Authorization", `Bearer ${token.accessToken}`);
}

function expiryOf(token: OAuthToken): number {
  if (token.expiresIn === undefined || token.expiresIn <= 0) return Number.POSITIVE_INFINITY;
  const lifetimeMs = token.expiresIn * 1000;
  return Date.now() + Math.max(lifetimeMs - EXPIRY_BUFFER_MS, lifetimeMs / 2);
}

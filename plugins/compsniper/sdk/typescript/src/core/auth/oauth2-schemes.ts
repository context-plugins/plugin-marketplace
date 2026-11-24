import type { AuthParams, AuthScheme } from "../api-request.js";
import type {
  OAuth2RefreshableTokenStrategy,
  OAuth2TokenStrategy,
  OAuthToken,
  OAuthTokenRefreshable,
} from "./oauth2-strategies.js";
import { header, unconfiguredAuth } from "./schemes.js";

const EXPIRY_BUFFER_MS = 30_000;

export type ScopedAuthScheme = AuthScheme & {
  forScopes(...scopes: readonly string[]): AuthScheme;
};

type ScopedCredentials = { readonly scope?: string | undefined };

export function oauth2Scheme<TCredentials extends ScopedCredentials>(
  scheme: string,
  credentials: TCredentials | undefined,
  strategy: OAuth2TokenStrategy<TCredentials>,
): ScopedAuthScheme {
  if (credentials === undefined) return ignoringScopes(unconfiguredAuth(scheme));

  const unscoped = cachedTokenScheme((signal) => strategy.getToken(credentials, signal, credentials.scope));
  if (hasScope(credentials.scope)) return ignoringScopes(unscoped);

  const slots = new Map<string, AuthScheme>();
  const scoped: ScopedAuthScheme = {
    ...unscoped,
    forScopes(...scopes) {
      if (scopes.length === 0) return scoped;
      const scope = [...scopes].sort().join(" ");
      let slot = slots.get(scope);
      if (slot === undefined) {
        slot = cachedTokenScheme((signal) => strategy.getToken(credentials, signal, scope));
        slots.set(scope, slot);
      }
      return slot;
    },
  };
  return scoped;
}

export function oauth2RefreshableScheme<TCredentials extends ScopedCredentials>(
  scheme: string,
  credentials: TCredentials | undefined,
  strategy: OAuth2RefreshableTokenStrategy<TCredentials>,
  scope?: string,
): AuthScheme {
  if (credentials === undefined) return unconfiguredAuth(scheme);

  let refreshToken: string | undefined;
  const remember = (token: OAuthTokenRefreshable): OAuthTokenRefreshable => {
    refreshToken = token.refreshToken ?? undefined;
    return token;
  };

  return cachedTokenScheme(async (signal) => {
    const requested = hasScope(credentials.scope) ? credentials.scope : scope;
    const previous = refreshToken;
    if (previous === undefined) return remember(await strategy.getToken(credentials, signal, requested));

    const refreshed = await strategy.tryRefreshToken(credentials, previous, signal, requested);
    if (refreshed === null) {
      refreshToken = undefined;
      return remember(await strategy.getToken(credentials, signal, requested));
    }
    return remember({ ...refreshed, refreshToken: refreshed.refreshToken ?? previous });
  });
}

function ignoringScopes(scheme: AuthScheme): ScopedAuthScheme {
  const scoped: ScopedAuthScheme = { ...scheme, forScopes: () => scoped };
  return scoped;
}

function cachedTokenScheme<TToken extends OAuthToken>(
  acquire: (signal: AbortSignal) => Promise<TToken>,
): AuthScheme {
  let cached: { token: TToken; expiresAt: number } | undefined;
  let inflight: Promise<TToken> | undefined;
  let retired: string | undefined;

  async function obtainAndCacheToken(signal: AbortSignal): Promise<TToken> {
    try {
      const acquired = await acquire(signal);
      const token = { ...acquired, accessToken: acquired.accessToken.trim() };
      if (cached !== undefined) retired = authorization(cached.token);
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
    missingCredentials: () => [],
    invalidate(rejected) {
      if (cached !== undefined && rejected === authorization(cached.token)) {
        retired = rejected;
        cached = undefined;
        return true;
      }
      return rejected !== null && rejected === retired;
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
  return header("Authorization", authorization(token));
}

function authorization(token: OAuthToken): string {
  return `Bearer ${token.accessToken}`;
}

function hasScope(scope: string | undefined): scope is string {
  return scope !== undefined && scope !== "";
}

function expiryOf(token: OAuthToken): number {
  if (token.expiresIn === undefined || token.expiresIn <= 0) return Number.POSITIVE_INFINITY;
  const lifetimeMs = token.expiresIn * 1000;
  return Date.now() + Math.max(lifetimeMs - EXPIRY_BUFFER_MS, lifetimeMs / 2);
}

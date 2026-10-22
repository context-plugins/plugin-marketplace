/**
 * A credential, or a function that produces one.
 *
 * @remarks
 * A function is called on **every** request and its result is never cached, so a key or token can
 * be rotated without rebuilding the client. An empty string counts as absent.
 *
 * The function is handed the call's `signal`, or one that never aborts when the call was given
 * none. The SDK waits for the function to settle, so a function that does I/O should honour that
 * signal for a cancelled call to end promptly.
 */
export type TokenProvider = string | ((signal: AbortSignal) => string | Promise<string>);

/** Username and password for HTTP Basic, sent base64 in the Authorization header. */
export type BasicAuthCredentials = {
  readonly username: string;
  readonly password: string;
};

/** Credentials for the OAuth 2.0 client-credentials grant (RFC 6749 section 4.4). */
export type OAuth2ClientCredentials = {
  readonly clientId: string;
  readonly clientSecret: string;
  /** Space-separated scopes to request. Omit to accept the server default. */
  readonly scope?: string | undefined;
};

/**
 * Credentials for the OAuth 2.0 resource-owner password grant (RFC 6749 section 4.3).
 *
 * @remarks
 * Legacy: the grant hands the user password to the client. Prefer the authorization-code grant.
 */
export type OAuth2PasswordCredentials = {
  readonly clientId: string;
  readonly clientSecret?: string | undefined;
  readonly username: string;
  readonly password: string;
  /** Space-separated scopes to request. Omit to accept the server default. */
  readonly scope?: string | undefined;
};

/** PKCE challenge method (RFC 7636). {@link PkceMethod.S256} unless the server cannot do it. */
export const PkceMethod = {
  S256: "S256",
  Plain: "plain",
} as const;
export type PkceMethod = (typeof PkceMethod)[keyof typeof PkceMethod];

/**
 * Sends the user to the authorization URL and returns the code they come back with.
 *
 * @remarks
 * The SDK builds the URL and hands it over; it never opens it itself. Typically this opens a
 * browser, waits for the redirect, and returns its `code` query parameter.
 *
 * `signal` is the one the call was given, or one that never aborts when it was given none. No
 * timeout covers the prompt, so it may wait on the user for as long as that signal allows.
 */
export type AuthorizationCodePrompt = (authorizationUrl: string, signal: AbortSignal) => Promise<string>;

/**
 * Credentials for the OAuth 2.0 authorization-code grant (RFC 6749 section 4.1) with PKCE.
 *
 * @remarks
 * The only grant that needs a human — supply {@link AuthorizationCodePrompt} as
 * `promptForAuthorizationCode` — and the only one whose token response may carry a refresh token.
 * PKCE is on by default (`pkce` defaults to `S256`); setting it to `null` disables it and then a
 * `clientSecret` is required.
 */
export type OAuth2AuthorizationCodeCredentials = {
  readonly clientId: string;
  readonly clientSecret?: string | undefined;
  readonly redirectUri: string;
  /** Space-separated scopes to request. Omit to accept the server default. */
  readonly scope?: string | undefined;
  readonly state?: string | undefined;
  readonly pkce?: PkceMethod | null | undefined;
  readonly promptForAuthorizationCode: AuthorizationCodePrompt;
};

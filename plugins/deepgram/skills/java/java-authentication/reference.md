# Java authentication — full reference

Companion to **java-authentication**. Covers the OAuth grant flows that need extra steps, token
persistence, combined scheme requirements, environment configuration, and no-auth. Confirm every name
against the `DeepgramClient.Builder` setters, the `com.deepgram.agent.authentication/` source, and `doc/auth/*.md`
in the cloned SDK.

## How credentials are wired (recap)

Each scheme generates a `{Scheme}Model` with a `Builder` inner class. Required fields are constructor
arguments; optional fields use fluent builder methods. Build the model and pass it to the matching setter
on `DeepgramClient.Builder` before calling `.build()`. The client is **immutable** after construction. To
change credentials later, call `client.newBuilder().{scheme}Credentials(newModel).build()`.

## OAuth 2.0 — client credentials grant (CCG)

```java
import java.util.function.BiFunction;
import java.util.function.Consumer;

DeepgramClient client = new DeepgramClient.Builder()
    .oAuthCCGCredentials(new OAuthCCGModel.Builder(
            System.getenv("{CLIENT_ID_ENV}"),
            System.getenv("{CLIENT_SECRET_ENV}")
        )
        .oAuthToken(loadTokenFromDatabase())       // seed a stored token (optional)
        .oAuthClockSkew(10L)                        // seconds of slack on expiry check (optional)
        .oAuthOnTokenUpdate(token -> {             // Consumer<OAuthToken>
            saveTokenToDatabase(token);
        })
        .oAuthTokenProvider((lastToken, credMgr) -> {  // BiFunction<OAuthToken, OAuthCCGCredentials, OAuthToken>
            OAuthToken stored = loadTokenFromDatabase();
            if (stored != null && !credMgr.isTokenExpired(stored)) {
                return stored;
            }
            return credMgr.fetchToken();
        })
        .build())
    .build();
```

| Builder method | Type | Purpose |
| --- | --- | --- |
| `.oAuthToken(OAuthToken)` | optional | Seed a previously stored token (skips the initial fetch) |
| `.oAuthClockSkew(long)` | optional | Seconds of slack applied when checking expiry |
| `.oAuthTokenProvider(BiFunction)` | optional | Supply / refresh the token yourself; receives the last token and an `OAuthCCGCredentials` that exposes `fetchToken()` and `isTokenExpired(OAuthToken)` |
| `.oAuthOnTokenUpdate(Consumer)` | optional | Callback fired whenever the token updates — use it to persist the token |

The token is fetched **automatically** on the first endpoint call that requires this scheme and refreshed
near expiry. Both callbacks are optional; omit them if you don't need persistence.

## OAuth 2.0 — authorization code grant (ACG)

ACG is a redirect flow. The SDK does **not** perform the browser redirect; your application does.

### 1. Initialize the client

```java
DeepgramClient client = new DeepgramClient.Builder()
    .oAuthACGCredentials(new OAuthACGModel.Builder(
            System.getenv("{CLIENT_ID_ENV}"),
            System.getenv("{CLIENT_SECRET_ENV}"),
            "{redirectUri}"
        )
        .oAuthScopes(Arrays.asList(OAuthScopeDeepgramEnum.READ_SCOPE))  // per-API scope enum
        .build())
    .build();
```

### 2. Obtain user consent

```java
String authUrl = client.getOAuthACGCredentials().buildAuthorizationUrl();
httpServletResponse.sendRedirect(authUrl);
```

### 3. Exchange the authorization code

After the user approves and your callback route receives `?code=...`:

```java
try {
    String code = request.getParameter("code");
    OAuthToken token = client.getOAuthACGCredentials().fetchToken(code);  // throws

    // Re-build the client with the fetched token:
    client = client.newBuilder()
        .oAuthACGCredentials(client.getOAuthACGModel().toBuilder()
            .oAuthToken(token)
            .build())
        .build();
    session.setAttribute("access_token", token);
} catch (Throwable e) {
    // handle error
}
```

### 4. Refresh an expired token

```java
if (client.getOAuthACGCredentials().isTokenExpired()) {
    try {
        OAuthToken token = client.getOAuthACGCredentials().refreshToken();  // throws
        client = client.newBuilder()
            .oAuthACGCredentials(client.getOAuthACGModel().toBuilder()
                .oAuthToken(token)
                .build())
            .build();
        session.setAttribute("access_token", token);
    } catch (Throwable e) {
        // handle error
    }
}
```

### Restore a stored token

```java
OAuthToken stored = (OAuthToken) session.getAttribute("access_token");
client = client.newBuilder()
    .oAuthACGCredentials(client.getOAuthACGModel().toBuilder()
        .oAuthToken(stored)
        .build())
    .build();
```

## OAuth 2.0 — resource owner password credentials grant (ROPCG)

```java
DeepgramClient client = new DeepgramClient.Builder()
    .oAuthROPCGCredentials(new OAuthROPCGModel.Builder(
            System.getenv("{CLIENT_ID_ENV}"),
            System.getenv("{CLIENT_SECRET_ENV}"),
            System.getenv("{USERNAME_ENV}"),
            System.getenv("{PASSWORD_ENV}")
        )
        .oAuthToken(loadTokenFromDatabase())  // seed stored token (optional)
        .build())
    .build();
```

Fetch the token explicitly (or let the first endpoint call do it automatically):

```java
try {
    OAuthToken token = client.getOAuthROPCGCredentials().fetchToken();  // no code arg
    client = client.newBuilder()
        .oAuthROPCGCredentials(client.getOAuthROPCGModel().toBuilder()
            .oAuthToken(token)
            .build())
        .build();
} catch (Throwable e) {
    // handle error
}
```

Refresh:

```java
if (client.getOAuthROPCGCredentials().isTokenExpired()) {
    OAuthToken token = client.getOAuthROPCGCredentials().refreshToken();
    // re-build the client as shown above
}
```

## OAuth 2.0 — bearer token

When you already hold a token (no grant flow):

```java
.oAuthBearerTokenCredentials(new OAuthBearerTokenModel.Builder(
        System.getenv("{ACCESS_TOKEN_ENV}")
    )
    .build())
```

## Basic / custom header / custom query parameter

| Scheme | Builder call | Wire behaviour |
| --- | --- | --- |
| Basic | `.basicAuthCredentials(new BasicAuthModel.Builder(user, pass).build())` | `Authorization: Basic base64(user:pass)` |
| Custom header | `.apiHeaderCredentials(new ApiHeaderModel.Builder(token, apiKey).build())` | Values injected as request headers |
| Custom query param | `.apiKeyCredentials(new ApiKeyModel.Builder(token, apiKey).build())` | Values appended as query parameters |

Constructor parameters and wire names come from the API's scheme — confirm in `doc/auth/custom-*.md`.

## Combined scheme requirements (AND / OR)

Each operation's doc states its requirement. Configure accordingly:

```java
// AND — configure all three:
new DeepgramClient.Builder()
    .basicAuthCredentials(new BasicAuthModel.Builder(user, pass).build())
    .apiKeyCredentials(new ApiKeyModel.Builder(token, apiKey).build())
    .apiHeaderCredentials(new ApiHeaderModel.Builder(token2, apiKey2).build())
    .build();

// OR — configure any one:
new DeepgramClient.Builder()
    .apiKeyCredentials(new ApiKeyModel.Builder(token, apiKey).build())
    .build();

// Nested: CustomAuth OR OAuthBearerToken OR (basicAuth AND apiKey AND apiHeader)
// — configure whichever branch you prefer.
```

The SDK applies the appropriate scheme(s) per request automatically.

## Loading credentials from environment variables

APIMatic Java SDKs have no built-in `fromEnvironment()` factory. The generated test
base class shows the idiom — read each credential via `System.getenv(...)` and pass to the builder:

```java
String username = System.getenv("MY_SDK_USERNAME");
String password = System.getenv("MY_SDK_PASSWORD");
if (username != null && password != null) {
    builder.basicAuthCredentials(new BasicAuthModel.Builder(username, password).build());
}
```

Grep the generated `BaseControllerTest.java` in `src/test/` for the exact variable names the SDK authors
used — those names are a reliable convention for that SDK.

## No auth

If the API (or an operation) requires no authentication, construct the client with no credentials. Some
generated SDKs mark a no-auth operation as deprecated for security reasons — heed that notice:

```java
DeepgramClient client = new DeepgramClient.Builder()
    .environment(Environment.PRODUCTION)
    .build();
```

## Security checklist

- Never hardcode secrets — use `System.getenv(...)`, a secrets manager, or dependency-injected config.
- Persist OAuth tokens via `oAuthOnTokenUpdate` so refreshes survive restarts; seed via `.oAuthToken(...)`.
- Treat the client as immutable; rotate credentials by rebuilding via `client.newBuilder()`.
- Reload `access_token` from storage at application startup and re-inject before making calls.
- Request only the OAuth scopes your application needs.

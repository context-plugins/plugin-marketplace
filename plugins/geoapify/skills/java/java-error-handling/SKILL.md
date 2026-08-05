---
name: java-error-handling
description: Handle errors from an APIMatic-generated Java SDK — every synchronous operation declares both ApiException (the base for all non-2xx responses) and IOException (transport/network failures) as checked exceptions; typed per-operation exception subclasses in the SDK's exceptions/ package extend ApiException and add Jackson-annotated payload fields accessible via getters; getResponseCode() returns the HTTP status code and getHttpContext() gives the full request/response pair; async CompletableFuture operations wrap both into CompletionException. Load it even after reading a method's throws clause in the source, since it won't tell you that getResponseCode() — not getStatusCode() — is the right accessor, or that typed exceptions are caught before ApiException in the same catch chain.
---

# Java SDK — Error Handling

## Exception hierarchy

```
Exception
├── io.apimatic.core.types.CoreApiException
│   └── com.geoapify.api.exceptions.ApiException          ← base for all non-2xx API responses
│       └── com.geoapify.api.exceptions.{Name}Exception   ← typed subclass with payload fields
└── IOException                                     ← transport / network failures
```

Every **synchronous** operation declares two checked exceptions:

```java
public T {operation}(...) throws ApiException, IOException
```

You must catch or re-declare **both**. `ApiException` is the base for all API-level errors (non-2xx
responses). `IOException` covers transport-level failures — connection refused, DNS failure, socket timeout.

The async variant (`{operation}Async(...)`) returns `CompletableFuture<T>` and throws no checked exceptions —
both `ApiException` and `IOException` surface as the cause of a `CompletionException`.

## ApiException — the right accessors

Confirmed from `MultiAuth-Sample/src/main/java/localhost3000/exceptions/ApiException.java`:

```java
// ApiException extends CoreApiException — use these accessors:
int    statusCode = e.getResponseCode();     // HTTP status code (e.g. 404, 500)
String message    = e.getMessage();          // error reason string
HttpContext ctx   = e.getHttpContext();       // full request + response pair
```

> **`getResponseCode()`, not `getStatusCode()`** — the correct method is `getResponseCode()`, inherited
> from `CoreApiException`. The ApiException doc confirms this; using `getStatusCode()` will not compile.

`getHttpContext()` returns the SDK's `com.geoapify.api.http.client.HttpContext`, which carries:
- `ctx.getRequest()` — the outgoing `HttpRequest` (method, URL, headers)
- `ctx.getResponse()` — the incoming `HttpResponse` (status, headers, raw body)

## Typed exception subclasses

When the API spec declares a structured error response for a specific operation, APIMatic generates a typed
subclass of `ApiException` in the `exceptions/` package. Confirmed from `MultiAuth-Sample`:
`OAuthProviderException` extends `ApiException` and adds `@JsonGetter`-annotated fields populated
automatically by Jackson deserialization of the error response body:

```java
// OAuthProviderException (confirmed source):
//   OAuthProviderErrorEnum getError()
//   String getErrorDescription()
//   String getErrorUri()

import localhost3000.exceptions.OAuthProviderException;
import localhost3000.exceptions.ApiException;

try {
    // ... operation that can throw OAuthProviderException ...
} catch (OAuthProviderException e) {
    // Typed fields from the generated error model — read them via getters:
    OAuthProviderErrorEnum code = e.getError();           // enum error code
    String desc = e.getErrorDescription();                 // human-readable message
    int status  = e.getResponseCode();                     // HTTP status code
    System.err.println("OAuth error " + code + " (" + status + "): " + desc);
} catch (ApiException e) {
    // All other non-2xx responses:
    System.err.println("API error " + e.getResponseCode() + ": " + e.getMessage());
} catch (IOException e) {
    // Transport failure — no response received:
    System.err.println("IO error: " + e.getMessage());
}
```

**Always catch typed subclasses before `ApiException`** — `ApiException` is the parent and will swallow
the subclass if placed first in the catch chain.

Open `exceptions/{Name}Exception.java` in the SDK source for the exact fields and getters — never assume
field names from the operation name alone.

## Catching `ApiException` without a typed subclass

Most read, list, and delete operations declare only `ApiException`:

```java
import localhost3000.exceptions.ApiException;
import java.io.IOException;

try {
    String result = controller.customAuthentication();
} catch (ApiException e) {
    int status = e.getResponseCode();
    if (status == 401) {
        // credentials rejected
    } else if (status == 429) {
        // rate limited — back off before retry
    } else {
        System.err.printf("API error %d: %s%n", status, e.getMessage());
    }
} catch (IOException e) {
    System.err.println("Network error: " + e.getMessage());
}
```

## Transport failures — `IOException`

`IOException` is thrown when no HTTP response is received — the connection could not be established, the
DNS lookup failed, or a socket timeout occurred before the server responded. It is a separate exception from
`ApiException`; a server that responds with 500 throws `ApiException`, not `IOException`.

```java
try {
    result = controller.getCalculate(input);
} catch (ApiException e) {
    // Non-2xx response was received
} catch (IOException e) {
    // No response received — network or timeout
    System.err.println("Transport failure: " + e.getMessage());
}
```

## Async error handling — `CompletableFuture`

Async operations wrap both `ApiException` and `IOException` inside `CompletionException`. Unwrap via
`.getCause()`:

```java
controller.{operation}Async(input)
    .thenAccept(result -> {
        // success path
    })
    .exceptionally(ex -> {
        Throwable cause = ex.getCause();
        if (cause instanceof OAuthProviderException oe) {
            System.err.println("OAuth error: " + oe.getError());
        } else if (cause instanceof ApiException ae) {
            System.err.println("API error " + ae.getResponseCode() + ": " + ae.getMessage());
        } else if (cause instanceof IOException ioe) {
            System.err.println("IO error: " + ioe.getMessage());
        }
        return null;
    });
```

When blocking on a `CompletableFuture` with `.get()`, catch `ExecutionException` and unwrap with
`.getCause()` to reach the original `ApiException` or `IOException`.

## How the SDK determines which exception to throw

The SDK deserialises the response body into the declared typed exception class when the HTTP status code
matches a documented error response; otherwise it falls back to the base `ApiException`. The typed payload
fields (`getError()`, `getErrorDescription()`, etc.) are populated via Jackson from the response body — they
are `null` if the body does not contain those keys.

## Retry overlap

The SDK retries on status codes `408`, `413`, `429`, `500`, `502`, `503`, `504`, `521`, `522`, `524` for
`GET` and `PUT` methods. After all retry attempts are exhausted, the final non-2xx response is thrown as
`ApiException`. The number of retries defaults to `0` (no retry). See **java-configuration-resilience**
for retry configuration.

## Quick reference

| Scenario | Exception | Key accessor |
|---|---|---|
| Non-2xx response, no typed model | `ApiException` | `getResponseCode()`, `getMessage()` |
| Non-2xx response, typed error body | `{Name}Exception extends ApiException` | typed getters + `getResponseCode()` |
| Transport / network failure | `IOException` | `getMessage()` |
| Async failure | `CompletionException` | `.getCause()` to reach above types |
| Request + response context | `ApiException` | `getHttpContext().getRequest()` / `.getResponse()` |

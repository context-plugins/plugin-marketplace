---
name: dotnet-error-handling
description: Handle errors from an APIMatic-generated C#/.NET SDK (APIMATIC v3.0) — every non-2xx response throws ApiException from AIceptionInteractive.Standard.Exceptions (or a typed subclass like OAuthProviderException for documented status codes), whose HttpContext.Response carries the status code, headers, and raw body; the typed subclass adds deserialized payload fields; transport errors are separate HttpRequestException. Use the moment you write a try/catch, need the HTTP status code, or want to distinguish a typed API error from a network failure — load it even after reading the exception type in the source, since the declared type won't tell you how to read the response body, that typed subclasses add JSON-deserialized payload fields, or how to check for them with an is cast.
---

# Error handling for an APIMatic C#/.NET SDK

Endpoint methods **throw on non-success responses**. The base exception class is `ApiException` from
`AIceptionInteractive.Standard.Exceptions`, which wraps `CoreApiException<HttpRequest, HttpResponse, HttpContext>`
from the `APIMatic.Core` runtime. Operations with documented error status codes may throw a typed
**subclass** that adds deserialized payload fields.

> Throughout, `{...}` tokens are placeholders for names from your SDK.

## The base exception: `ApiException`

```csharp
using AIceptionInteractive.Standard.Exceptions;

public class ApiException : CoreApiException<HttpRequest, HttpResponse, HttpContext>
```

Key properties:

| Property | Type | Description |
| --- | --- | --- |
| `ResponseCode` | `int` | HTTP status code |
| `HttpContext` | `HttpContext` | The full request + response context |
| `HttpContext.Response` | `HttpResponse` | Response with `StatusCode`, `Headers`, `RawBody` |
| `Message` | `string` | Exception message (reason phrase) |

```csharp
try
{
    var result = await ctrl.{Operation}Async(/* params */);
}
catch (ApiException e)
{
    Console.WriteLine(e.ResponseCode);                    // HTTP status code (int)
    Console.WriteLine(e.Message);                         // reason phrase
    Console.WriteLine(e.HttpContext.Response.StatusCode); // also the status code
    // raw body is in e.HttpContext.Response.RawBody (Stream)
}
```

## Typed exception subclasses

When an API documents specific error status codes, APIMatic generates a **typed subclass** of
`ApiException` in `AIceptionInteractive.Standard.Exceptions` for each. These subclasses add `[JsonProperty]`
properties that are deserialized from the error response body:

```csharp
// OAuthProviderException.cs (example from MultiAuth-Sample):
public class OAuthProviderException : ApiException
{
    [JsonProperty("error")]
    public OAuthProviderErrorEnum Error { get; set; }

    [JsonProperty("error_description", NullValueHandling = NullValueHandling.Ignore)]
    public string ErrorDescription { get; set; }

    [JsonProperty("error_uri", NullValueHandling = NullValueHandling.Ignore)]
    public string ErrorUri { get; set; }
}
```

Catch the **typed subclass first**, then fall back to `ApiException`:

```csharp
using AIceptionInteractive.Standard.Exceptions;
using AIceptionInteractive.Standard.Models;

try
{
    var result = await ctrl.{Operation}Async(/* params */);
}
catch (OAuthProviderException e)
{
    // Typed payload fields — deserialized from the error body:
    Console.WriteLine(e.Error);              // OAuthProviderErrorEnum value
    Console.WriteLine(e.ErrorDescription);  // optional string
    Console.WriteLine(e.ResponseCode);      // HTTP status code (inherited)
}
catch (ApiException e)
{
    // Base catch for other non-2xx statuses
    Console.WriteLine(e.ResponseCode);
    Console.WriteLine(e.Message);
}
```

**Using `is` to check the type** also works (useful when you have `ApiException` in scope):

```csharp
catch (ApiException e)
{
    if (e is OAuthProviderException provEx)
    {
        Console.WriteLine(provEx.Error);
    }
}
```

## Which typed exceptions does an operation throw?

The `doc/controllers/*.md` for the operation and the `ErrorCase` registrations inside the controller
`.cs` tell you which typed exceptions apply. Grep `doc/models/*.md` for `Exception` in the filename,
and check `Exceptions/` for the available subclasses. If an operation has no registered `ErrorCase`
for a status code, it falls back to the base `ApiException`.

## Transport and network errors

These are **not** `ApiException` — they are .NET standard exceptions:

```csharp
try
{
    var result = await ctrl.{Operation}Async(/* params */);
}
catch (OAuthProviderException e) { /* typed API error */ }
catch (ApiException e)           { /* other API error */ }
catch (HttpRequestException e)   { /* network/DNS/TLS failure */ }
catch (TaskCanceledException e)  { /* timeout or cancellation */ }
```

`TaskCanceledException` covers both an explicitly cancelled `CancellationToken` and a timeout
(when the `HttpClient`'s timeout fires). Check `e.CancellationToken.IsCancellationRequested` to
distinguish the two if needed.

## Notes

- Retries for transient statuses happen **before** the exception is thrown — but retries are
  **off by default** (`NumberOfRetries = 0`). When enabled, only `GET` and `PUT` are retried by
  default. See **dotnet-configuration-resilience**.
- The `ApiException.HttpContext.Response` is populated even when the typed subclass is thrown — you
  can always read the raw status and headers from it.
- `ApiException.ToString()` formats the status code and message; the typed subclass overrides it to
  include its payload fields.
- Exception subclass files live in `AIceptionInteractive.Standard/Exceptions/` — open them to see the exact
  `[JsonProperty]` payload properties and their types.

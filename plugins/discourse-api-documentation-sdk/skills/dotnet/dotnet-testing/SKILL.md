---
name: dotnet-testing
description: Unit-test code that uses an APIMatic-generated C#/.NET SDK by injecting a fake HttpClient — the client's HttpClient constructor argument is the test seam (no SDK mocking helpers) — stub success and error responses with a custom HttpMessageHandler, assert the outgoing request, assert SdkException<TError> on error paths, and register a stub client in DI. Use when writing, mocking, or stubbing tests for calls made through an APIMatic .NET SDK client — load it even after reading the constructor in the source, since the seam alone won't tell you to match the project's test stack or assert the right exception per operation.
---

# Testing code that uses an APIMatic .NET SDK

The client takes an `HttpClient` in its constructor, which is the seam for testing: pass an `HttpClient`
backed by a fake `HttpMessageHandler`, so no real network calls happen. The SDK ships no mocking helpers —
this is standard .NET.

**Match the project's existing test stack — don't impose one.** Check the test project's package references
and existing tests, then mirror both its **test framework** (xUnit / NUnit / MSTest) and its **assertion
style**: if it uses an assertion library such as FluentAssertions or Shouldly, write assertions that way
(e.g. `result.StatusCode.Should().Be(HttpStatusCode.OK)`) rather than the framework's built-in asserts. The
code samples below use xUnit `[Fact]` + the built-in `Assert` **purely for reference** — they show the SDK
testing seam and *what* to assert, not a mandated framework or assertion library. Substitute your
`DiscourseApiDocumentationClient`/`DiscourseApiDocumentationClientOptions` as well.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `DiscourseApiDocumentationClient`,
> `{ApiGroup}`, `{Operation}`) — replace it with the concrete identifier from the source.

## A reusable stub handler

```csharp
using System.Net;

public sealed class StubHandler : HttpMessageHandler
{
    private readonly Func<HttpRequestMessage, HttpResponseMessage> _responder;
    public HttpRequestMessage? LastRequest { get; private set; }

    public StubHandler(Func<HttpRequestMessage, HttpResponseMessage> responder) => _responder = responder;

    protected override Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request, CancellationToken ct)
    {
        LastRequest = request;
        return Task.FromResult(_responder(request));
    }
}

static DiscourseApiDocumentationClient ClientReturning(HttpStatusCode status, string json)
{
    var handler = new StubHandler(_ => new HttpResponseMessage(status)
    {
        Content = new StringContent(json, System.Text.Encoding.UTF8, "application/json")
    });
    return new DiscourseApiDocumentationClient(new HttpClient(handler), new DiscourseApiDocumentationClientOptions { /* auth not needed for stubs */ });
}
```

## Test a success path

```csharp
[Fact]
public async Task ReturnsDeserializedBody()
{
    var client = ClientReturning(HttpStatusCode.OK, """{ "{resource}": { "id": 123 } }""");

    var response = await client.{ApiGroup}.{Operation}(/* args */, ct: default);

    Assert.Equal(123, response.{Resource}?.Id);
}
```

## Test an error path

Endpoint methods throw `SdkException<TError>` on non-2xx (see `dotnet-error-handling`). `TError` is the
operation's `{Operation}Error` model (**Case A**) for operations that have a generated `{Operation}Error`
type, or `RawError` **directly** (**Case B**) otherwise — so assert the type that matches your operation.

**Case A — typed `{Operation}Error`:**

```csharp
using DiscourseApiDocumentation.Core.Exceptions;     // SdkException<TError>
using DiscourseApiDocumentation.Errors;              // {Operation}Error types

[Fact]
public async Task ThrowsOnApiError()
{
    var client = ClientReturning(HttpStatusCode.UnprocessableEntity, """{ "errors": ["bad input"] }""");

    var ex = await Assert.ThrowsAsync<SdkException<{Operation}Error>>(
        () => client.{ApiGroup}.{Operation}(/* args */, ct: default));

    // ex.Error is the typed ApiError. For a status the operation maps to a typed body (e.g. 422), assert the
    // typed accessor — its name embeds the body type, so open the {Operation}Error under Errors/ for the
    // exact name. TryGetRawError is FALSE for those statuses, so don't assert through it here:
    Assert.True(ex.Error.TryGetSomeTypedBody(out var typed));
    // ...assert on 'typed'. (Only statuses the operation maps to RawError populate TryGetRawError.)
}
```

**Case B — `SdkException<RawError>`** (e.g. read/list/find/archive/delete operations). Here `ex.Error` *is*
the `RawError` — there is no `TryGet*` / `TryGetRawError`; read it directly:

```csharp
using DiscourseApiDocumentation.Core.Exceptions;
using DiscourseApiDocumentation.Core.ErrorResponse;

var ex = await Assert.ThrowsAsync<SdkException<RawError>>(
    () => client.{ApiGroup}.{Operation}(/* args */, ct: default));

Assert.Equal(HttpStatusCode.UnprocessableEntity, ex.Error.StatusCode);
// You can also assert the deserialized error body: ex.Error.ReadAsString() / ex.Error.ReadAsJson<MyDto>().
```

## Test the result-style (`ApiResult`) variant

If the operation exposes the optional non-throwing `{Operation}Result` sibling (see `dotnet-error-handling`),
there is nothing to catch — stub the response and assert on the returned `ApiResult<TResponse, TError>`
directly. The status code and headers are available on both the success and failure outcomes.

```csharp
using DiscourseApiDocumentation.Core.Models;        // ApiResult<TResponse, TError>
using DiscourseApiDocumentation.Core.ErrorResponse; // RawError (Case B)
using DiscourseApiDocumentation.Errors;             // {Operation}Error (Case A only)

[Fact]
public async Task ResultVariantReportsFailureWithoutThrowing()
{
    var client = ClientReturning(HttpStatusCode.UnprocessableEntity, """{ "errors": ["bad input"] }""");

    var result = await client.{ApiGroup}.{Operation}Result(/* args */, ct: default);

    Assert.False(result.TryGetResponse(out _));
    Assert.True(result.TryGetError(out var error));   // 'error' is the same TError as the throwing path
    Assert.Equal(HttpStatusCode.UnprocessableEntity, result.StatusCode);
    // 'error' is a typed {Operation}Error (Case A) or a RawError (Case B) — assert accordingly.
}
```

## Assert the outgoing request

Because the stub captures `LastRequest`, you can assert method, path, query, headers, and body:

```csharp
var handler = new StubHandler(_ => new HttpResponseMessage(HttpStatusCode.OK)
                                   { Content = new StringContent("{}") });
var client = new DiscourseApiDocumentationClient(new HttpClient(handler), new DiscourseApiDocumentationClientOptions());

await client.{ApiGroup}.{Operation}(/* args */, ct: default);

Assert.Equal(HttpMethod.Post, handler.LastRequest!.Method);
Assert.Contains("/expected/path", handler.LastRequest!.RequestUri!.AbsolutePath);
Assert.Contains("per_page=20", handler.LastRequest!.RequestUri!.Query);  // query params are snake_case on the wire

// Assert the serialized request body of a POST/PUT/PATCH:
var sentJson = await handler.LastRequest!.Content!.ReadAsStringAsync();
Assert.Contains("\"expected_field\"", sentJson);
```

## Notes

- Mocking libraries (Moq, NSubstitute) work too — mock `HttpMessageHandler.SendAsync` (it's `protected`,
  so use `Protected()` with Moq). The hand-written stub above avoids that friction.
- A stubbed retryable response (`408/429/5xx`) on a retryable method will be retried by the SDK before the
  call returns — retries apply to `GET/HEAD/PUT/OPTIONS` only by default, so a `POST` won't retry unless you
  add its method to `HttpMethodsToRetry` (see `dotnet-configuration-resilience`). To observe retries firing,
  have the stub return `503` then `200` and count invocations.
- For DI-based code, the SDK's `AddDiscourseApiDocumentationClient` resolves the **default (unnamed)** `IHttpClientFactory`
  client, so register your stub on that one, then resolve `DiscourseApiDocumentationClient` from the provider:
  ```csharp
  services.AddDiscourseApiDocumentationClient(o => { /* ... */ });
  services.AddHttpClient(Options.DefaultName).ConfigurePrimaryHttpMessageHandler(() => stubHandler);
  var client = services.BuildServiceProvider().GetRequiredService<DiscourseApiDocumentationClient>();
  ```
- To look up an operation's signature, its request type, or a `{Operation}Error`'s accessor names, read the
  SDK source `.cs` files — don't decompile or reflect over the installed package, which drops the XML-doc
  comments and the request-builder details.
- Prefer this `HttpClient`-seam approach over wrapping the SDK in your own interface unless you need to
  abstract the SDK for other reasons.

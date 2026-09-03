---
name: dotnet-testing
description: Testing code that calls an APIMatic-generated .NET SDK in C# — which seam to fake, covering error and edge paths, asserting real behaviour rather than execution, and keeping tests independent of SDK internals. Load before writing tests for the integration layer.
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
`{Api}Client`/`{Api}ClientOptions` as well.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g. `{Api}Client`,
> `{ApiGroup}`, `{Operation}`) — replace it with the concrete identifier from the source.

## A reusable stub handler

```csharp
using System.Net;

public sealed class StubHandler : HttpMessageHandler
{
    private readonly Func<HttpRequestMessage, HttpResponseMessage> _responder;

    // Every request, in order — retries append, so this is what you count.
    public List<HttpRequestMessage> Requests { get; } = new();

    // The serialized body of each request, captured while it is still readable.
    public List<string?> Bodies { get; } = new();
    public string? LastBody => Bodies.Count == 0 ? null : Bodies[^1];
    public HttpRequestMessage? LastRequest => Requests.Count == 0 ? null : Requests[^1];

    public StubHandler(Func<HttpRequestMessage, HttpResponseMessage> responder) => _responder = responder;

    protected override Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request, CancellationToken ct)
    {
        Requests.Add(request);
        // Buffer the body NOW — see the note below; it is gone by the time your test runs.
        Bodies.Add(request.Content is null ? null : request.Content.ReadAsStringAsync().Result);
        var response = _responder(request);
        response.RequestMessage = request;   // real HttpClient sets this; some retry predicates read it
        return Task.FromResult(response);
    }
}

static {Api}Client ClientReturning(HttpStatusCode status, string json)
{
    var handler = new StubHandler(_ => new HttpResponseMessage(status)
    {
        Content = new StringContent(json, System.Text.Encoding.UTF8, "application/json")
    });
    return new {Api}Client(new HttpClient(handler), new {Api}ClientOptions { /* auth not needed for stubs */ });
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
using {RootNamespace}.Core.Exceptions;     // SdkException<TError>
using {RootNamespace}.Errors;              // {Operation}Error types

[Fact]
public async Task ThrowsOnApiError()
{
    var client = ClientReturning(HttpStatusCode.UnprocessableEntity, """{ "errors": ["bad input"] }""");

    var ex = await Assert.ThrowsAsync<SdkException<{Operation}Error>>(
        () => client.{ApiGroup}.{Operation}(/* args */, ct: default));

    // ex.Error is the typed ApiError. For a status the operation maps to a typed body (e.g. 422), assert the
    // typed accessor — its name embeds the body type; the contract sheet lists the exact accessor name.
    // TryGetRawError is FALSE for those statuses, so don't assert through it here:
    Assert.True(ex.Error.TryGetSomeTypedBody(out var typed));
    // ...assert on 'typed'. TryGetRawError fires ONLY for a status that falls to the error factory's
    // default arm. A status with its own RawError accessor — TryGetNoContent, say — populates that
    // accessor and leaves TryGetRawError false, so assert the specific one.
}
```

**Case B — `SdkException<RawError>`** (e.g. read/list/find/archive/delete operations). Here `ex.Error` *is*
the `RawError` — there is no `TryGet*` / `TryGetRawError`; read it directly:

```csharp
using {RootNamespace}.Core.Exceptions;
using {RootNamespace}.Core.ErrorResponse;

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
using {RootNamespace}.Core.Models;        // ApiResult<TResponse, TError>
using {RootNamespace}.Core.ErrorResponse; // RawError (Case B)
using {RootNamespace}.Errors;             // {Operation}Error (Case A only)

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
var client = new {Api}Client(new HttpClient(handler), new {Api}ClientOptions());

await client.{ApiGroup}.{Operation}(/* args */, ct: default);

Assert.Equal(HttpMethod.Post, handler.LastRequest!.Method);
Assert.Contains("/expected/path", handler.LastRequest!.RequestUri!.AbsolutePath);
Assert.Contains("per_page=20", handler.LastRequest!.RequestUri!.Query);  // query params are snake_case on the wire

// Assert the serialized request body of a POST/PUT/PATCH:
var sentJson = handler.LastBody;   // NOT LastRequest.Content — see below
Assert.Contains("\"expected_field\"", sentJson);
```

## Notes

- ⚠ **Read the request body inside the handler, never off the captured request afterwards.** The SDK
  disposes the request content in a `finally` that runs per attempt, *inside* the pipeline — so by the time
  your awaited call returns, `handler.LastRequest.Content.ReadAsStringAsync()` throws
  `ObjectDisposedException`. That is why the stub above buffers `Bodies` during `SendAsync`. Everything
  else on the captured `HttpRequestMessage` — method, URI, headers — survives and can be asserted normally.
- Mocking libraries (Moq, NSubstitute) work too — mock `HttpMessageHandler.SendAsync` (it's `protected`,
  so use `Protected()` with Moq). The hand-written stub above avoids that friction.
- A stubbed retryable response — the default set is exactly `408, 429, 500, 502, 503, 504`, not all `5xx`
  — on a retryable method will be retried by the SDK before the call returns. `HttpMethodsToRetry` (`GET/HEAD/PUT/OPTIONS` by default) gates **every** trigger, so a
  `POST` retries on nothing — not a `503`, not a thrown `HttpRequestException`, not the per-attempt timeout
  — unless you add its verb to the list (see `dotnet-configuration-resilience`). To observe retries firing,
  stub a `GET` that returns `503` then `200` and count invocations.
- **Status faults and transport faults are separate retry triggers** — the SDK distinguishes them itself
  (`RetryAttempt.Reason` is `RetryReason.Status(...)` *or* `RetryReason.Failure(Exception)`), and a third,
  the per-attempt timeout, arrives as `RetryReason.Failure(TimeoutRejectedException)`. A test that stubs a
  `503` therefore proves nothing about what happens when the *connection* fails. The verb filter holds all
  three at one send for a `POST` — which is exactly the property worth locking down with a test, because it
  is a *configuration* guarantee and someone widening `HttpMethodsToRetry` for the read path silently
  removes it:
  ```csharp
  // Transport fault: the stub throws instead of answering, then we count what the server actually received.
  var handler = new StubHandler(_ => throw new HttpRequestException("connection reset"));
  var client = new {Api}Client(new HttpClient(handler), new {Api}ClientOptions());

  await Assert.ThrowsAnyAsync<Exception>(() => client.{ApiGroup}.{Operation}(body, ct: default));

  Assert.Equal(1, handler.Requests.Count(r => r.Method == HttpMethod.Post));   // no resend
  ```
- For DI-based code, the SDK's `Add{Api}Client` resolves the **default (unnamed)** `IHttpClientFactory`
  client, so register your stub on that one, then resolve `{Api}Client` from the provider:
  ```csharp
  services.Add{Api}Client(o => { /* ... */ });
  services.AddHttpClient(Options.DefaultName).ConfigurePrimaryHttpMessageHandler(() => stubHandler);
  var client = services.BuildServiceProvider().GetRequiredService<{Api}Client>();
  ```
- To look up an operation's signature, its request type, or a `{Operation}Error`'s accessor names, take them
  from the contract sheet (grounded from the SDK map/source) — not a decompiled or
  reflected view of the installed package, and not memory.
- Prefer this `HttpClient`-seam approach over wrapping the SDK in your own interface unless you need to
  abstract the SDK for other reasons.

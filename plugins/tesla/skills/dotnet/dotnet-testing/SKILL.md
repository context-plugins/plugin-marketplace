---
name: dotnet-testing
description: Load before writing tests for code that calls an APIMatic .NET SDK in C# — the HttpClient stub seam, error and retry paths, faking the clock, constructing SDK exceptions directly, and asserting the outgoing request.
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
    return new {Api}Client(new HttpClient(handler), new {Api}ClientOptions
    {
        {Credential} = "test-token",   // one placeholder per credential the operations under test require
    });
}
```

**Set every credential the operations under test require, even against a stub.** An unset required
credential throws `AuthSchemeException` before the stub sees a request. A value set in code also shields
the test from any `{API}_*` environment variable on the machine — `{API}` being the SDK name in upper snake
case. For an OAuth2 scheme, see *Test a client with OAuth credentials*: the placeholder makes the stub's
first request the token `POST`.

## Test a success path

```csharp
[Fact]
public async Task ReturnsDeserializedBody()
{
    var client = ClientReturning(HttpStatusCode.OK, """{ "{resource}": { "id": 123 } }""");

    var response = await client.{ApiGroup}.{Operation}(request, cancellationToken: default);

    Assert.Equal(123, response.{Resource}?.Id);
}
```

## Test an error path

Endpoint methods throw `ApiException<TError>` on non-2xx — `{Operation}Error` (**Case A**) or `RawError`
(**Case B**); see `dotnet-error-handling` — so assert the type that matches your operation. The exception
carries `StatusCode`, `Headers`, `ContentType`, `Method` and `RequestUri`.

**Case A — typed `{Operation}Error`:**

```csharp
using {RootNamespace}.Core.Exceptions;     // ApiException<TError>
using {RootNamespace}.Errors;              // {Operation}Error types

[Fact]
public async Task ThrowsOnApiError()
{
    var client = ClientReturning(HttpStatusCode.UnprocessableEntity, """{ "errors": ["bad input"] }""");

    var ex = await Assert.ThrowsAsync<ApiException<{Operation}Error>>(
        () => client.{ApiGroup}.{Operation}(request, cancellationToken: default));

    Assert.Equal(HttpStatusCode.UnprocessableEntity, ex.StatusCode);   // the status is on the exception
    // Assert the accessor for this status (name from the contract sheet); TryGetRawError is false here.
    Assert.True(ex.Error.TryGetSomeTypedBody(out var typed));
    // ...assert on 'typed'.
}
```

**Case B — `ApiException<RawError>`.** Here `ex.Error` *is*
the `RawError` — there is no `TryGet*` / `TryGetRawError`; read it directly:

```csharp
using {RootNamespace}.Core.Exceptions;
using {RootNamespace}.Core.ErrorResponse;

var ex = await Assert.ThrowsAsync<ApiException<RawError>>(
    () => client.{ApiGroup}.{Operation}(request, cancellationToken: default));

Assert.Equal(HttpStatusCode.UnprocessableEntity, ex.StatusCode);   // same value as ex.Error.StatusCode
// You can also assert the deserialized error body: ex.Error.ReadAsString() / ex.Error.ReadAsJson<MyDto>().
```

**A body that does not match the model is a third outcome.** A 2xx whose JSON does not fit the response type,
or an error body that does not fit `{Operation}Error`, throws `ResponseDeserializationException` (see
`dotnet-error-handling`); its `StatusCode` says which. A `OneOf` or `AnyOf` response type is the exception: a
body no variant accepts lands in its Unknown slot (see `dotnet-models`), so assert `TryGetUnknown` there
instead of a throw. Lock it down for any operation whose provider is known to drift:

```csharp
var client = ClientReturning(HttpStatusCode.OK, """{ "{resource}": "not-an-object" }""");

var ex = await Assert.ThrowsAsync<ResponseDeserializationException>(
    () => client.{ApiGroup}.{Operation}(request, cancellationToken: default));

Assert.Equal(HttpStatusCode.OK, ex.StatusCode);
Assert.Equal(typeof({ReturnType}), ex.TargetType);
```

## Test the result-style (`ApiResult`) variant

If the operation has a `{Operation}Result` sibling (see `dotnet-error-handling`), there is nothing to catch —
assert on the returned `ApiResult<TResponse, TError>`; status and headers are on both outcomes:

```csharp
using {RootNamespace}.Core.Models;        // ApiResult<TResponse, TError>
using {RootNamespace}.Core.ErrorResponse; // RawError (Case B)
using {RootNamespace}.Errors;             // {Operation}Error (Case A only)

[Fact]
public async Task ResultVariantReportsFailureWithoutThrowing()
{
    var client = ClientReturning(HttpStatusCode.UnprocessableEntity, """{ "errors": ["bad input"] }""");

    var result = await client.{ApiGroup}.{Operation}Result(request, cancellationToken: default);

    Assert.False(result.TryGetResponse(out _));
    Assert.True(result.TryGetError(out var error));   // 'error' is the same TError as the throwing path
    Assert.Equal(HttpStatusCode.UnprocessableEntity, result.StatusCode);
    // 'error' is a typed {Operation}Error (Case A) or a RawError (Case B) — assert accordingly.
}
```

## Test a client with OAuth credentials

With OAuth credentials set, the first request your stub sees is the token `POST`. `ClientReturning` answers
every request alike, so give `StubHandler` a responder that returns queued responses, a token response such as
`{ "access_token": "t", "token_type": "Bearer" }` first. The token is cached, so two calls make three
requests. An authorization-code client also needs a `PromptForAuthorizationCode` that returns a fixed code.
A `401` on an authenticated call makes the SDK drop the token, fetch a new one and re-send once, so a stub that
answers `401` sees a second token request and a second call before the `401` reaches the test.
For a bad-credentials test, answer the token request with a 4xx and assert `AuthSchemeException`; for a missing
credential, leave the property unset (and its `{API}_*` environment variable too) and assert
`AuthSchemeException` before any request reaches the stub.

## Fake the clock

The SDK reads time through exactly one seam — `{Api}ClientOptions.TimeProvider` (default
`TimeProvider.System`). Retry backoff, `Retry-After`, the per-attempt timeout, the SSE idle timeout, OAuth2
token expiry and the logged request durations all follow it, so one fake provider drives them together with
no real sleeps. Use a provider that **implements timers** — `FakeTimeProvider` from
`Microsoft.Extensions.TimeProvider.Testing` — because the retry delay and the idle window are timers on the
provider: a `GetUtcNow`-only fake throws when the SDK asks it for a timer.

```csharp
using Microsoft.Extensions.Time.Testing;   // FakeTimeProvider (Microsoft.Extensions.TimeProvider.Testing)

var clock = new FakeTimeProvider();
var responses = new Queue<HttpStatusCode>([HttpStatusCode.ServiceUnavailable, HttpStatusCode.OK]);
var handler = new StubHandler(_ => new HttpResponseMessage(responses.Dequeue()) { Content = new StringContent("{}") });
var client = new {Api}Client(new HttpClient(handler), new {Api}ClientOptions
{
    {Credential} = "test-token",   // as in ClientReturning
    TimeProvider = clock,
});

var call = client.{ApiGroup}.{Operation}(request, cancellationToken: default);   // a GET: retryable
clock.Advance(TimeSpan.FromSeconds(2));                              // past the 1s backoff (+ up to 500ms jitter)
await call;

Assert.Equal(2, handler.Requests.Count);
```

The awaited call does not complete until the fake clock moves past the backoff — start the call, `Advance`,
then `await`. Under DI, register the fake as the container's `TimeProvider` (either order) or set
`o.TimeProvider = clock` in the configure callback (see **dotnet-configuration-resilience** § *The clock*).

## Construct an SDK exception directly

When the code under test takes the SDK's exception as *input* — an error-mapping boundary, a retry policy of
your own — build the leaf directly instead of driving a stub through the whole client. Every leaf has a
public primary constructor taking the message and its cause (`(string message, Exception? innerException =
null)` on most; `ResponseDeserializationException` requires the cause, `AuthSchemeException` takes the list
of scheme failures) and sets its `required` members through the object initializer; there is no
`[SetsRequiredMembers]` shortcut, so a fake states the full call identity exactly as the SDK does (the
`For(...)` factories are `internal` because they take engine types):

```csharp
using {RootNamespace}.Core.Exceptions;

var timeout = new SdkTimeoutException("GET https://api.example.com/widgets received no response within 10 s.")
{
    Method = HttpMethod.Get,
    RequestUri = new Uri("https://api.example.com/widgets"),
    Timeout = TimeSpan.FromSeconds(10),
};

var unreadable = new ResponseDeserializationException(
    "GET https://api.example.com/widgets returned a body that could not be deserialized into Widget.",
    new System.Text.Json.JsonException("..."))
{
    Method = HttpMethod.Get,
    RequestUri = new Uri("https://api.example.com/widgets"),
    StatusCode = HttpStatusCode.OK,
    Headers = new HttpResponseMessage().Headers,
    ContentType = null,
    TargetType = typeof(Widget),
};
```

`ApiException<TError>` is the one leaf you cannot fabricate: neither `RawError` nor a `{Operation}Error` has
a public constructor. Produce it through the stub handler as in *Test an error path* above.

## Assert the outgoing request

Because the stub captures `LastRequest`, you can assert method, path, query, headers, and body:

```csharp
var handler = new StubHandler(_ => new HttpResponseMessage(HttpStatusCode.OK)
                                   { Content = new StringContent("{}") });
var client = new {Api}Client(new HttpClient(handler), new {Api}ClientOptions { {Credential} = "test-token" });

await client.{ApiGroup}.{Operation}(request, cancellationToken: default);

Assert.Equal(HttpMethod.Post, handler.LastRequest!.Method);
Assert.Contains("/expected/path", handler.LastRequest!.RequestUri!.AbsolutePath);
Assert.Contains("per_page=20", handler.LastRequest!.RequestUri!.Query);  // the wire name, not the C# property

// Assert the serialized request body of a POST/PUT/PATCH:
var sentJson = handler.LastBody;   // NOT LastRequest.Content — see below
Assert.Contains("\"expected_field\"", sentJson);
```

## Notes

- ⚠ **Read the request body inside the handler, never off the captured request afterwards.** The SDK
  disposes the request content after each attempt, so once your awaited call returns,
  `handler.LastRequest.Content.ReadAsStringAsync()` throws `ObjectDisposedException` — hence `Bodies` in the
  stub above. Method, URI and headers on the captured `HttpRequestMessage` survive and can be asserted.
- Mocking libraries (Moq, NSubstitute) work too — mock `HttpMessageHandler.SendAsync` (it's `protected`,
  so use `Protected()` with Moq). The hand-written stub above avoids that friction.
- **Retries run before the call returns.** A stubbed `408`/`429`/`500`/`502`/`503`/`504` (not every `5xx`) on
  `GET`/`HEAD`/`PUT`/`OPTIONS` is retried — stub `503` then `200` and count requests; a `POST` is retried on
  nothing but an OAuth2 `401`, which every verb re-sends once (see `dotnet-configuration-resilience`). Status and transport faults are separate triggers
  (`RetryAttempt.Reason` is `RetryReason.Status(...)` or `RetryReason.Failure(...)`), so a `503` stub proves
  nothing about a connection failure — and the one-send `POST` is worth a test, since widening
  `HttpMethodsToRetry` silently removes it. A thrown `HttpRequestException` surfaces as
  `SdkConnectionException` with the raw exception as `InnerException`, and an exhausted per-attempt timeout
  as `SdkTimeoutException`:
  ```csharp
  // Transport fault: the stub throws instead of answering, then we count what the server actually received.
  var handler = new StubHandler(_ => throw new HttpRequestException("connection reset"));
  var client = new {Api}Client(new HttpClient(handler), new {Api}ClientOptions { {Credential} = "test-token" });

  var ex = await Assert.ThrowsAsync<SdkConnectionException>(
      () => client.{ApiGroup}.{Operation}(request, cancellationToken: default));

  Assert.IsType<HttpRequestException>(ex.InnerException);
  Assert.Equal(1, handler.Requests.Count(r => r.Method == HttpMethod.Post));   // no resend
  ```
- **Your own cancellation surfaces as `OperationCanceledException`**, never an `SdkException` — assert the
  framework type, and expect a `catch (SdkException)` in the code under test *not* to fire.
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

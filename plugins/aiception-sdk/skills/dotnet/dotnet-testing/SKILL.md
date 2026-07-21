---
name: dotnet-testing
description: Unit-test code that uses an APIMatic-generated C#/.NET SDK (APIMATIC v3.0) by injecting a fake HttpClient via .HttpClientConfig(c => c.HttpClientInstance(...)) — that HttpClient backed by a stub HttpMessageHandler is the test seam (no SDK mocking helpers); stub success and error responses with a custom handler, assert the outgoing request, assert ApiException or a typed subclass on error paths, and use HttpCallback for response inspection. Use when writing, stubbing, or verifying tests for calls through an APIMatic .NET SDK — load it even after reading the client constructor in the source, since the seam alone won't tell you how to match the project's test stack (NUnit with Assert.AreEqual, as the generated tests show), how to build the stub client, or how to assert a typed exception subclass.
---

# Testing code that uses an APIMatic C#/.NET SDK

The SDK builds its `HttpClient` from `HttpClientConfiguration`. Pass your own `HttpClient` (backed
by a fake `HttpMessageHandler`) via `.HttpClientConfig(c => c.HttpClientInstance(...))`. **That
`HttpClient` is the test seam** — no real network calls happen. The SDK ships no consumer-facing
mocking helpers.

**Match the project's existing test stack.** The generated test files (in `*.Tests/`) use
**NUnit 3** (`[TestFixture]`, `[Test]`, `[OneTimeSetUp]`, `Assert.AreEqual`, `Assert.IsNotNull`,
`Assert.AreEqual(200, HttpCallBack.Response.StatusCode)`). Mirror both the framework and the
assertion style the project already uses. Code samples below use the generated test conventions as
reference; substitute your `AIceptionInteractiveClient`, model names, and controller names.

> Throughout, `{...}` tokens are placeholders for names from your SDK.

## A reusable stub handler

```csharp
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

public sealed class StubHandler : HttpMessageHandler
{
    private readonly HttpStatusCode _status;
    private readonly string _body;
    public HttpRequestMessage LastRequest { get; private set; }

    public StubHandler(HttpStatusCode status, string body)
    {
        _status = status;
        _body = body;
    }

    protected override Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request, CancellationToken cancellationToken)
    {
        LastRequest = request;
        return Task.FromResult(new HttpResponseMessage(_status)
        {
            Content = new StringContent(_body, System.Text.Encoding.UTF8, "application/json")
        });
    }
}

static AIceptionInteractiveClient ClientReturning(HttpStatusCode status, string body)
{
    var handler = new StubHandler(status, body);
    var httpClient = new HttpClient(handler);
    return new AIceptionInteractiveClient.Builder()
        .HttpClientConfig(c => c.HttpClientInstance(httpClient))
        // Credentials are irrelevant for a stubbed transport:
        // .BasicAuthCredentials(new BasicAuthModel.Builder("u", "p").Build())
        .Build();
}
```

## Using HttpCallback for response inspection (NUnit style)

The generated `ControllerTestBase` pattern registers an `HttpCallback` and asserts on its response
after each call — useful when the operation returns bare `Task<T>` and you need to confirm the HTTP
status:

```csharp
using AIceptionInteractive.Standard;
using AIceptionInteractive.Standard.Http.Client;
using NUnit.Framework;

[TestFixture]
public class MyControllerTest
{
    private AIceptionInteractiveClient _client;
    internal HttpCallback HttpCallBack { get; private set; } = new HttpCallback();

    [OneTimeSetUp]
    public void SetUp()
    {
        var handler = new StubHandler(HttpStatusCode.OK, "\"You've passed the test!\"");
        _client = new AIceptionInteractiveClient.Builder()
            .HttpClientConfig(c => c.HttpClientInstance(new HttpClient(handler)))
            .HttpCallback(HttpCallBack)
            .Build();
    }

    [Test]
    public async Task TestOperation()
    {
        string result = null;
        try
        {
            result = await _client.{Resource}Controller.{Operation}Async();
        }
        catch (ApiException) { }

        Assert.AreEqual(200, HttpCallBack.Response.StatusCode, "Status should be 200");
        Assert.IsNotNull(result, "Result should exist");
    }
}
```

## Test a success path (plain assert)

```csharp
[Test]
public async Task ReturnsDeserializedBody()
{
    var client = ClientReturning(HttpStatusCode.OK,
        """{ "access_token": "tok123", "token_type": "Bearer" }""");

    var result = await client.{Resource}Controller.{Operation}Async();

    Assert.IsNotNull(result);
    Assert.AreEqual("tok123", result.AccessToken);
}
```

## Test an error path — base ApiException

```csharp
using AIceptionInteractive.Standard.Exceptions;

[Test]
public async Task ThrowsApiException()
{
    var client = ClientReturning(HttpStatusCode.Unauthorized, "{}");

    ApiException ex = null;
    try
    {
        await client.{Resource}Controller.{Operation}Async();
    }
    catch (ApiException e)
    {
        ex = e;
    }

    Assert.IsNotNull(ex, "Should throw ApiException");
    Assert.AreEqual(401, ex.ResponseCode);
}
```

## Test an error path — typed exception subclass

When an operation has a documented error response with a typed model (e.g. `OAuthProviderException`
for OAuth errors), catch the subclass first:

```csharp
using AIceptionInteractive.Standard.Exceptions;

[Test]
public async Task ThrowsTypedExceptionWithPayload()
{
    var client = ClientReturning(HttpStatusCode.BadRequest,
        """{ "error": "invalid_request", "error_description": "Bad params" }""");

    OAuthProviderException ex = null;
    try
    {
        await client.OAuthAuthorizationController.{Token}Async(/* params */);
    }
    catch (OAuthProviderException e)
    {
        ex = e;
    }

    Assert.IsNotNull(ex, "Should throw OAuthProviderException");
    Assert.AreEqual(400, ex.ResponseCode);
    Assert.AreEqual(OAuthProviderErrorEnum.InvalidRequest, ex.Error);
    Assert.AreEqual("Bad params", ex.ErrorDescription);
}
```

Open `Exceptions/` in the generated source to find which typed subclasses exist for your SDK and
which `[JsonProperty]` payload fields each one exposes.

## Assert the outgoing request

The stub captures `LastRequest`. Assert the method, path, and (for POST/PUT/PATCH) the serialized
body:

```csharp
[Test]
public async Task SendsCorrectRequest()
{
    var handler = new StubHandler(HttpStatusCode.OK, "{}");
    var client = new AIceptionInteractiveClient.Builder()
        .HttpClientConfig(c => c.HttpClientInstance(new HttpClient(handler)))
        .Build();

    await client.{Resource}Controller.{Operation}Async(/* args */);

    Assert.AreEqual(HttpMethod.Post, handler.LastRequest.Method);
    StringAssert.Contains("/expected/path", handler.LastRequest.RequestUri.AbsolutePath);

    // For requests with a body:
    string sent = await handler.LastRequest.Content.ReadAsStringAsync();
    StringAssert.Contains("\"expected_field\"", sent);
}
```

## Notes

- **Retries are off by default** (`NumberOfRetries = 0`), so a stubbed `5xx` fails immediately —
  no need to disable retries in tests. If your production client enables retries, build the test
  client without calling `.NumberOfRetries(...)` (or set it to `0` explicitly). See
  **dotnet-configuration-resilience**.
- To test that retries *do* fire, have the stub return `503` then `200` (count `SendAsync` calls)
  — remember that by default only `GET` and `PUT` are retried; `POST` won't retry without adding
  it to `RequestMethodsToRetry`.
- The generated `ControllerTestBase` uses `CreateFromEnvironment()` to build the live client; for
  unit tests, build a fresh stub client as shown above — don't share the live client.
- To look up an operation's signature or a typed exception's payload fields, open the `.cs` files
  in the cloned SDK source — the generated XML-doc comments and `ErrorCase` registrations in the
  controller are the source of truth.

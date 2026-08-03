---
name: java-testing
description: Unit-test code that uses an APIMatic-generated Java SDK — the test seam is HttpCallback (specifically the generated HttpCallbackCatcher), injected via .httpCallback(catcher) on the client builder; the catcher captures the last HttpRequest and HttpResponse after each call so you can assert HTTP verb, URL, headers, and response status without a mock server; for full HTTP-level tests use a MockWebServer pointed at via Environment or a custom OkHttpClient. Load it even after reading HttpCallbackCatcher in the source, since the seam alone won't tell you how to wire it into the client builder, how to assert request details from HttpRequest, or that retries must be disabled to make stubbed error responses fail fast.
---

# Java SDK — Testing

## The real test seam: `HttpCallback`

The SDK does not expose its internal OkHttp client for mocking. The officially generated test seam is
**`HttpCallback`** — an interface injected via `.httpCallback(...)` on the client builder. The SDK calls
`onBeforeRequest(Request)` just before sending and `onAfterResponse(Context)` just after receiving a
response.

The generated SDK ships a ready-made implementation called **`HttpCallbackCatcher`** in the test source
tree (`src/test/java/.../testing/HttpCallbackCatcher.java`). It captures the last `HttpRequest` and
`HttpResponse` from `onAfterResponse`, making them available to your assertions.

Confirmed from `MultiAuth-Sample` and `typeCombinator-global` test sources — both contain
`HttpCallbackCatcher` and `BaseControllerTest` using this pattern.

## `HttpCallbackCatcher` — what it captures

```java
// Confirmed source: localhost3000/testing/HttpCallbackCatcher.java
public class HttpCallbackCatcher implements HttpCallback {
    private HttpRequest request;
    private HttpResponse response;

    @Override
    public void onBeforeRequest(Request request) { /* no-op */ }

    @Override
    public void onAfterResponse(Context context) {
        // captures both request and response from the context
        setRequest((HttpRequest) context.getRequest());
        setResponse((HttpResponse) context.getResponse());
    }

    public HttpRequest  getRequest()  { return request;  }
    public HttpResponse getResponse() { return response; }
}
```

After each controller call, `httpCallbackCatcher.getResponse()` holds the response and
`httpCallbackCatcher.getRequest()` holds the outgoing request.

## Wiring the catcher into the client — `BaseControllerTest` pattern

The generated `BaseControllerTest` shows the canonical way to wire `HttpCallbackCatcher` into the SDK
client. Replicate this structure in your own test base:

```java
// Confirmed from MultiAuth-Sample: BaseControllerTest.java + AuthenticationControllerTest.java

import app.zuplo.tesserplatformv1pull51me98e48a7.TesserApiV1Client;
import localhost3000.testing.HttpCallbackCatcher;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Rule;
import org.junit.rules.Timeout;

public class BaseControllerTest {
    // Shared fixture — set up once for the test class
    protected static HttpCallbackCatcher httpResponse;

    @BeforeClass
    public static void setUp() throws Exception {
        httpResponse = new HttpCallbackCatcher();
    }

    @AfterClass
    public static void tearDown() throws Exception {
        httpResponse = null;
    }

    protected static TesserApiV1Client createConfiguration() {
        // Build the client with the catcher injected:
        return new TesserApiV1Client.Builder()
            // ... auth credentials, environment, etc. ...
            .httpCallback(httpResponse)   // ← the seam
            .build();
    }
}
```

The catcher is `@BeforeClass` / `@AfterClass` scoped because it is shared across all tests in the class.
After each test that makes a controller call, `httpResponse.getResponse()` holds the last response.

## Asserting the response — `JUnit 4` pattern (confirmed in SDK test source)

```java
// Confirmed from AuthenticationControllerTest.java
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import io.apimatic.core.utilities.TestHelper;

@Test
public void testCustomAuthentication() throws Exception {
    String result = null;
    try {
        result = controller.customAuthentication();
    } catch (ApiException e) {
        // swallow — test will fail below if response is null
    }

    // Assert the response was received:
    assertNotNull("Response is null", httpResponse.getResponse());

    // Assert the HTTP status code:
    assertEquals("Status is not 200", 200, httpResponse.getResponse().getStatusCode());

    // Assert the deserialized result:
    assertNotNull("Result does not exist", result);

    // Assert the raw response body (using SDK's TestHelper):
    assertEquals("Response body does not match",
        "You've passed the test!",
        TestHelper.convertStreamToString(httpResponse.getResponse().getRawBody()));
}
```

`TestHelper.convertStreamToString(InputStream)` is available from `io.apimatic.core.utilities.TestHelper`
— already a dependency of the SDK.

## Controller test class structure

```java
import app.zuplo.tesserplatformv1pull51me98e48a7.TesserApiV1Client;
import localhost3000.controllers.AuthenticationController;
import localhost3000.exceptions.ApiException;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class AuthenticationControllerTest extends BaseControllerTest {
    private static TesserApiV1Client client;
    private static AuthenticationController controller;

    @BeforeClass
    public static void setUpClass() {
        client     = createConfiguration();
        controller = client.getAuthenticationController();
    }

    @AfterClass
    public static void tearDownClass() {
        controller = null;
    }

    @Test
    public void testSomeEndpoint() throws Exception {
        String result = null;
        try {
            result = controller.someEndpoint();
        } catch (ApiException e) {
            // empty — assertions below will fail if something went wrong
        }
        assertNotNull("Response is null", httpResponse.getResponse());
        assertEquals("Status is not 200", 200, httpResponse.getResponse().getStatusCode());
        assertNotNull("Result does not exist", result);
    }
}
```

## Asserting error responses

To test that the SDK throws the correct exception on a non-2xx response from the real server (or a test
server), catch the expected exception type inside the test and assert its properties:

```java
@Test
public void testEndpointThrowsOnUnauthorized() throws Exception {
    try {
        controller.protectedEndpoint();
        fail("Expected ApiException was not thrown");
    } catch (ApiException e) {
        assertEquals(401, e.getResponseCode());
    } catch (IOException e) {
        fail("Unexpected IOException: " + e.getMessage());
    }
}
```

For typed subclass exceptions (e.g. `OAuthProviderException`), catch the typed exception first:

```java
try {
    controller.someOAuthEndpoint();
    fail("Expected OAuthProviderException");
} catch (OAuthProviderException e) {
    assertNotNull(e.getError());
    assertEquals(401, e.getResponseCode());
} catch (ApiException e) {
    fail("Expected typed OAuthProviderException, got base ApiException");
} catch (IOException e) {
    fail("Unexpected IOException");
}
```

## Configuration from environment variables

The generated `BaseControllerTest.createConfigurationFromEnvironment()` builds the client from environment
variables — confirmed in both `MultiAuth-Sample` and `typeCombinator-global`. This is the standard pattern
for running the SDK test suite against a live server in CI:

```java
// Pattern confirmed in BaseControllerTest.createConfigurationFromEnvironment():
final String timeout = System.getenv("MULTI_AUTH_SAMPLE_LIB_TIMEOUT");
if (timeout != null) {
    builder.httpClientConfig(configBuilder -> configBuilder.timeout(Long.parseLong(timeout)));
}
```

In your own tests, prefer reading credentials and URLs from environment variables rather than hardcoding
them — the generated test base sets the precedent.

## Using a real test server vs the HttpCallback seam

The SDK test suite in the generated source uses the **HttpCallback seam** to verify HTTP status codes and
raw response bodies after calling real server endpoints. It does not use `MockWebServer` or `WireMock` — the
generated tests are integration tests, not unit tests with HTTP stubs.

For **unit tests** that do not require a real server:

| Approach | When to use |
|---|---|
| `HttpCallbackCatcher` + real/local server | Integration tests — verifies full serialization round-trip |
| `MockWebServer` (OkHttp) | Unit tests — inject a custom `OkHttpClient` pointing at `MockWebServer` |
| Mockito mock of the controller | Pure unit tests of business logic — bypasses HTTP entirely |

To point the SDK at a `MockWebServer`, inject a custom `OkHttpClient` via `httpClientInstance`:

```java
import okhttp3.mockwebserver.MockWebServer;
import okhttp3.OkHttpClient;

MockWebServer server = new MockWebServer();
server.start();

OkHttpClient mockClient = new OkHttpClient.Builder()
    .build();

TesserApiV1Client client = new TesserApiV1Client.Builder()
    .httpClientConfig(configBuilder -> configBuilder
        .httpClientInstance(mockClient, false)
        .numberOfRetries(0))    // disable retries so stubs fail fast
    .build();
// Note: you also need to point the SDK's base URL at server.url("/") —
// check if the SDK Builder accepts a custom base URL or use an Environment constant.
```

## JUnit version

The SDK test source uses **JUnit 4** (`org.junit.Test`, `@BeforeClass`, `@AfterClass`, `org.junit.rules.Timeout`). The `pom.xml` declares `junit:junit:4.13.2`. If your project uses JUnit 5, adapt the lifecycle annotations (`@BeforeAll`, `@AfterAll`, `@Test` from `org.junit.jupiter`).

## Key rules

- **Always set `numberOfRetries(0)` in tests** that use stubs or `MockWebServer` — retry backoff makes
  stubbed error responses slow and non-deterministic.
- **The catcher captures the last call only** — in a test that makes multiple controller calls, only the
  last call's request and response are available via `getRequest()` / `getResponse()`.
- **`httpResponse.getResponse()` may be `null`** if an exception was thrown before the SDK received a
  response (e.g. `IOException` from a transport failure). Always `assertNotNull` before reading
  `.getStatusCode()`.

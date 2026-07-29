---
name: java-client-initialization
description: Construct and configure an APIMatic-generated Java SDK client — build via the inner ThePlaidAPIClient.Builder() class (never a public constructor), set httpClientConfig via a lambda (not a config object), choose an Environment constant, access controllers via client.get{Resource}Controller(), call client.shutdown() at process exit, clone a live client with client.newBuilder(), and wire the client into Spring or plain-constructor DI. Use the moment you call new ThePlaidAPIClient.Builder(), pick an environment, or wire the client into your application — load it even after reading the constructor in the source, since the signature shows the arguments but not the builder pattern, the httpClientConfig lambda, or the lifetime/reuse rules.
---

# Initializing an APIMatic Java SDK client

This applies to **any** APIMatic-generated Java SDK (APIMATIC v3.0). Replace placeholders with the
real names from the SDK you are using:

- `ThePlaidAPIClient` — the gateway class (e.g. `APIMATICCalculatorClient`, `MultiAuthSampleClient`).
- `com.plaid.production` — the root Java package (e.g. `io.apimatic.examples`, `localhost3000`).
- `{Resource}Controller` — a controller class accessed via `client.get{Resource}Controller()`.

## The builder pattern

APIMatic Java SDKs have **no public constructor** on the client class. You must use the inner
`ThePlaidAPIClient.Builder` class. A minimal initialization:

```java
import com.plaid.production.ThePlaidAPIClient;
import com.plaid.production.Environment;

ThePlaidAPIClient client = new ThePlaidAPIClient.Builder()
    .environment(Environment.PRODUCTION)
    .httpClientConfig(configBuilder -> configBuilder
            .timeout(30))
    .build();
```

The `Builder` is the only entry point — confirm its fluent methods in `ThePlaidAPIClient.java`. The common
builder methods (confirm the exact set in the cloned source):

| Builder method | Sets |
| --- | --- |
| `.environment(Environment.X)` | API environment (selects the base URL) |
| `.httpClientConfig(configBuilder -> ...)` | timeout, retries, OkHttp instance, proxy — see **java-configuration-resilience** |
| `.{schemeNameCamelCase}Credentials(new {Scheme}Model.Builder(...).build())` | one per auth scheme the API uses — see **java-authentication** |
| `.httpCallback(callback)` | `HttpCallback` for request/response logging/capture — see **java-testing** |
| other per-API methods | API-specific parameters (e.g. `.port("80")`, `.suites(SuiteCodeEnum.HEARTS)`) — check `ThePlaidAPIClient.java` |

Call `.build()` to produce an immutable `ThePlaidAPIClient` instance.

## Choosing the environment / base URL

Environments are constants of the `enum Environment` in the root package (e.g.
`Environment.PRODUCTION`, `Environment.TESTING`). The default is per-API — check `Environment.java`
or `doc/client.md` in the cloned source. Select one on the builder:

```java
ThePlaidAPIClient client = new ThePlaidAPIClient.Builder()
    .environment(Environment.PRODUCTION)
    .build();
```

The base URL is derived from the selected environment (and any server-parameter builder methods like
`.port(...)`). Call `client.getBaseUri()` to inspect the resolved URL. There is no free-form base-URL
override; to target a mock server see **java-testing** and **java-configuration-resilience**.

## Setting HttpClientConfiguration

HTTP client options (timeout, retries, OkHttp instance, proxy) are configured via a **lambda** on
the builder — do **not** try to construct `HttpClientConfiguration` directly:

```java
ThePlaidAPIClient client = new ThePlaidAPIClient.Builder()
    .httpClientConfig(configBuilder -> configBuilder
            .timeout(30)                        // seconds; 0 = no timeout (default)
            .numberOfRetries(3)                 // default is 0 (retries OFF)
            .backOffFactor(2)
            .retryInterval(1))
    .build();
```

The lambda receives an `HttpClientConfiguration.Builder`; chain its fluent methods and return — the
SDK calls `.build()` internally. See **java-configuration-resilience** for the full option set,
default values, and which HTTP methods are retried.

## Accessing controllers

Operations are grouped under **controller accessor methods** on the client — one per API resource
group. Call the accessor to get the controller, then call the operation on it:

```java
{Resource}Controller ctrl = client.get{Resource}Controller();
{ResponseType} result = ctrl.{operation}(/* params */);          // sync, throws ApiException, IOException
CompletableFuture<{ResponseType}> future = ctrl.{operation}Async(/* params */);  // async
```

The controller's internal `GlobalConfiguration` is wired by the client — you never pass it manually.
Open `doc/client.md` for the full list of `get{Resource}Controller()` accessors.

## Shutting down

The SDK holds an OkHttp connection pool. Call `client.shutdown()` at process exit (or
`@PreDestroy` in a Spring bean) to cleanly close it:

```java
client.shutdown();
```

## Client lifetime and cloning

The client is **immutable after `build()`** and **safe for concurrent use** — the OkHttp connection
pool is shared internally. Build **once at startup** and reuse for the process lifetime; never
build a new client per request.

To produce a variant of a live client with a few options changed (e.g. attach a fetched OAuth token),
call `client.newBuilder()`, which returns a `Builder` pre-seeded from the current client's state:

```java
// clone with an updated credential:
client = client.newBuilder()
    .oAuthACGCredentials(client.getOAuthACGModel().toBuilder()
            .oAuthToken(fetchedToken)
            .build())
    .build();
```

## Dependency injection

Java has no built-in DI framework. Pass the client by constructor parameter or bind it as a singleton
in your DI container.

**Spring `@Bean` (recommended):**

```java
@Configuration
public class ApiConfig {
    @Bean
    public ThePlaidAPIClient apiClient() {
        return new ThePlaidAPIClient.Builder()
            .environment(Environment.PRODUCTION)
            // auth credentials — see java-authentication
            .build();
    }

    @PreDestroy
    public void shutdown(@Autowired ThePlaidAPIClient client) {
        client.shutdown();
    }
}
```

Inject `ThePlaidAPIClient` into your services as a normal Spring dependency. Build only one bean.

## Next

- Configure authentication → **java-authentication**
- Make your first call → **java-calling-endpoints**
- Tune retries/timeouts/transport → **java-configuration-resilience**

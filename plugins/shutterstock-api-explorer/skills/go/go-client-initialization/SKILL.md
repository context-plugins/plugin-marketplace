---
name: go-client-initialization
description: Construct and configure an APIMatic-generated Go SDK client — build a Configuration with CreateConfiguration / CreateConfigurationFromEnvironment and With... options, pass it to NewClient to get a ClientInterface, choose an Environment, supply a custom http transport/timeout via HttpConfiguration, access controller groups via client accessor methods, and reuse the long-lived goroutine-safe client. Use the moment you call NewClient, build a Configuration, pick an environment, or wire the client into your application — load it even after reading the constructor in the source, since the signature shows the arguments but not the build-Configuration-first pattern or the lifetime/reuse rules.
---

# Initializing an APIMatic Go SDK client

This applies to **any** APIMatic-generated Go SDK (APIMATIC v3.0). Replace placeholders with the real
names from the SDK you are using:

- `shutterstockapiexplorer` — the root package name (e.g. `multiauthsample`).
- `github.com/context-plugins/shutterstock-api-explorer-go-sdk` — the Go import path for the root package; `github.com/context-plugins/shutterstock-api-explorer-go-sdk/models` for request/response types.
- `{Resource}Controller` — a controller accessor method on the client.

## The two-step shape: build a Configuration, then a client

APIMatic Go SDKs do **not** take options on the client constructor. You build an immutable
`Configuration` value and pass it to `NewClient`, which returns a `ClientInterface`:

```go
import "github.com/context-plugins/shutterstock-api-explorer-go-sdk"

client := shutterstockapiexplorer.NewClient(
    shutterstockapiexplorer.CreateConfiguration(
        shutterstockapiexplorer.WithEnvironment(shutterstockapiexplorer.PRODUCTION),
        // auth options — see go-authentication
        // http options — see below and go-configuration-resilience
    ),
)
```

`CreateConfiguration(...ConfigurationOptions)` starts from `DefaultConfiguration()` and applies each
`With...` option. The common options (confirm the exact set in `configuration.go`):

| Option | Sets |
| --- | --- |
| `WithEnvironment(env)` | the API environment (selects the base URL) |
| `WithHttpConfiguration(httpCfg)` | timeout, transport, retry policy (see go-configuration-resilience) |
| `With{Scheme}Credentials(creds)` | one per auth scheme the API uses (see go-authentication) |
| `WithAccessToken(token)` | a global access-token header, when the API defines one |
| other `With...` | API-specific server parameters (e.g. `WithPort`, `WithSuites`) — check the source |

`ClientInterface` is a factory for controllers and the holder of configuration. Open `client.go` to see
its accessor methods.

## Configuration from environment variables

`CreateConfigurationFromEnvironment(...)` is the same as `CreateConfiguration` but pre-populates fields
from environment variables named `SHUTTERSTOCKAPIEXPLORER_...` (e.g. `MULTIAUTHSAMPLE_ENVIRONMENT`,
`MULTIAUTHSAMPLE_USERNAME`). Any `With...` options you pass override the env values. Grep
`CreateConfigurationFromEnvironment` in `configuration.go` for the exact variable names:

```go
client := shutterstockapiexplorer.NewClient(shutterstockapiexplorer.CreateConfigurationFromEnvironment())
```

## Accessing controllers

Operations are grouped under **controller accessor methods** on the client — one per API resource group.
Call the accessor to get the controller, then call the operation on it (see **go-calling-endpoints**):

```go
ctrl := client.{Resource}Controller()
apiResponse, err := ctrl.{Operation}(ctx, ...)
```

OAuth grant types are exposed as managers (`client.OAuth{CCG|ACG|ROPCG}Manager()`) used to fetch tokens —
see **go-authentication**. Open `client.go` for the full list of accessors.

## Choosing the environment / base URL

Environments are constants of the `Environment` string type in the root package (e.g. `shutterstockapiexplorer.PRODUCTION`,
`shutterstockapiexplorer.TESTING`) — the names and the default are per-API; the default is whatever `DefaultConfiguration()`
sets. Select one with `WithEnvironment`:

```go
client := shutterstockapiexplorer.NewClient(
    shutterstockapiexplorer.CreateConfiguration(shutterstockapiexplorer.WithEnvironment(shutterstockapiexplorer.PRODUCTION)),
)
```

Some SDKs also expose server parameters (e.g. a port) as their own `With...` options that feed into the
base-URL template. To point the SDK at a mock or proxy that the `Environment` constants don't cover, see
**go-testing** (run an `httptest.Server`) and **go-configuration-resilience**. Inspect `configuration.go`
for the exported `Environment` constants and any server parameters.

## Custom http transport / timeout

The SDK builds its `*http.Client` from `HttpConfiguration`. Set a timeout or a custom transport (proxy,
TLS, logging) by passing an `HttpConfiguration` built with `CreateHttpConfiguration`:

```go
client := shutterstockapiexplorer.NewClient(
    shutterstockapiexplorer.CreateConfiguration(
        shutterstockapiexplorer.WithHttpConfiguration(
            shutterstockapiexplorer.CreateHttpConfiguration(
                shutterstockapiexplorer.WithTimeout(30),                  // seconds; 0 = no timeout (the default)
                shutterstockapiexplorer.WithTransport(myRoundTripper),    // default: http.DefaultTransport
            ),
        ),
    ),
)
```

Retries also live on `HttpConfiguration` — see **go-configuration-resilience**.

## Client lifetime and reuse

The `Configuration` and the client are **read-only after construction** and the client is safe for
concurrent use by multiple goroutines. Construct it **once** at application startup and reuse it for the
process lifetime — do **not** build a new client per request or per goroutine (that throws away
connection pooling and any cached OAuth token).

```go
// startup — construct once:
var apiClient = shutterstockapiexplorer.NewClient(shutterstockapiexplorer.CreateConfigurationFromEnvironment())

// handlers / services — reuse the shared instance:
func (s *Service) DoWork(ctx context.Context) error {
    apiResponse, err := apiClient.{Resource}Controller().{Operation}(ctx, ...)
    // ...
}
```

To produce a variant of an existing client with a few options changed (e.g. an OAuth token added after a
manual token fetch), use `client.CloneWithConfiguration(opts...)` rather than rebuilding from scratch.

## Dependency injection

Go has no DI framework in the standard library. Pass the `ClientInterface` (or your own narrow interface
over it) by value via struct fields or constructor parameters:

```go
type Service struct {
    api shutterstockapiexplorer.ClientInterface
}

func NewService(api shutterstockapiexplorer.ClientInterface) *Service {
    return &Service{api: api}
}
```

For wire/fx-based DI, provide the client from a single provider that constructs it once.

## Next

- Configure authentication → **go-authentication**
- Make your first call → **go-calling-endpoints**
- Tune retries/timeouts/transport → **go-configuration-resilience**

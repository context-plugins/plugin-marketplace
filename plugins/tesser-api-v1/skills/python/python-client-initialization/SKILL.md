---
name: python-client-initialization
description: Construct and configure an APIMatic-generated Python SDK client — pass keyword args (credentials objects + environment= + timeout/retry/proxy kwargs) directly to the Tesserapiv1Client constructor or to a separate Configuration object, use from_environment() to read from a .env file and env vars, access controllers via @LazyProperty properties (not constructors), pass a custom requests.Session via http_client_instance, and reuse the long-lived client. Use the moment you write Tesserapiv1Client(...), build a Configuration, pick an environment, or wire the client into your application — load it even after reading the constructor in the source, since the signature shows the kwargs but not the credential-objects pattern, the @LazyProperty controller access, or the lifetime/reuse rules.
---

# Initializing an APIMatic Python SDK client

> `Tesserapiv1Client` is the SDK's client class — **read the real name** from `tesserapiv1/tesserapiv1_client.py`
> (it is derived from the package name, not the API title, so do not guess it from the API name).

This applies to **any** APIMatic-generated Python SDK (APIMATIC v3.0). Replace placeholders with
the real names from the SDK you are using:

- `tesserapiv1` — the root package name (e.g. `multiauthsample`, `batester`).
- `Tesserapiv1Client` — the generated client class (read it from the `class …Client` declaration in `tesserapiv1/tesserapiv1_client.py`).
- `{resource}` — a controller property name on the client (e.g. `authentication`, `transaction`).

## The constructor shape

The `Tesserapiv1Client` constructor accepts all configuration as **keyword arguments** — there is no
separate builder. You can pass them flat (the client creates a `Configuration` internally) or pass a
pre-built `Configuration` object:

```python
from tesserapiv1.tesserapiv1_client import Tesserapiv1Client
from tesserapiv1.configuration import Environment
from tesserapiv1.http.auth.basic_auth import BasicAuthCredentials  # per-scheme import

# Flat kwargs — the client wraps them in a Configuration internally:
client = Tesserapiv1Client(
    basic_auth_credentials=BasicAuthCredentials(
        username='Username',
        password='Password'
    ),
    environment=Environment.PRODUCTION,
    timeout=60,
    max_retries=0,
)
```

Or pass a pre-built `Configuration` object directly (preferred when you need `clone_with` later):

```python
from tesserapiv1.configuration import Configuration, Environment

config = Configuration(
    basic_auth_credentials=BasicAuthCredentials(username='...', password='...'),
    environment=Environment.PRODUCTION,
    timeout=60,
)
client = Tesserapiv1Client(config=config)
```

Both patterns are equivalent — the client uses `config or Configuration(...)` in its `__init__`.
Confirm the exact kwarg names from `tesserapiv1/tesserapiv1_client.py` in the cloned source.

## Common constructor kwargs

These kwargs are present on every generated client (confirm defaults from the source):

| Kwarg | Type | Default | Purpose |
| --- | --- | --- | --- |
| `environment` | `Environment` enum | `Environment.PRODUCTION` | selects the base URL |
| `timeout` | `float` | `60` | per-request timeout in seconds |
| `max_retries` | `int` | `0` | number of retries; **0 disables retries** |
| `backoff_factor` | `float` | `2` | exponential backoff multiplier |
| `retry_statuses` | `list[int]` | `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` | statuses that trigger retry |
| `retry_methods` | `list[str]` | `["GET", "PUT"]` | methods that are retried |
| `http_client_instance` | `requests.Session` | `None` | inject a custom Session |
| `override_http_client_configuration` | `bool` | `False` | whether to apply SDK retry/timeout settings to a custom Session |
| `http_call_back` | `HttpCallBack` | `None` | callback hook (the test seam) |
| `proxy_settings` | `ProxySettings` | `None` | optional proxy configuration |
| `logging_configuration` | `LoggingConfiguration` | `None` | structured request/response logging |
| `{scheme}_credentials` | `{Scheme}Credentials` | `None` | per auth scheme (see **python-authentication**) |

API-specific server parameters (e.g. `port`, `suites`) are also kwargs — check the source.

## Environment-based initialization

`from_environment()` is a class method on both `Tesserapiv1Client` and `Configuration` that reads
configuration from a `.env` file and environment variables automatically. Pass `dotenv_path` if your
`.env` file is not in the working directory; pass keyword overrides to replace any env-var value:

```python
from tesserapiv1.tesserapiv1_client import Tesserapiv1Client

# Read everything from environment variables / .env:
client = Tesserapiv1Client.from_environment()

# Override specific values:
client = Tesserapiv1Client.from_environment(
    dotenv_path='/path/to/.env',
    timeout=30,
)
```

Environment variable names follow a scheme-specific naming convention (e.g.
`BASIC_AUTH_USERNAME`, `O_AUTH_CCG_O_AUTH_CLIENT_ID`, `ENVIRONMENT`, `TIMEOUT`) — grep
`from_environment` in `tesserapiv1/configuration.py` for the exact names.

## Accessing controllers

Controllers are `@LazyProperty` properties on `Tesserapiv1Client`. Access them as attributes —
**do not instantiate them yourself**:

```python
# Correct — access the controller as a property:
result = client.authentication.custom_authentication()

# Wrong — don't do this (controllers are not intended for direct construction by callers):
# ctrl = AuthenticationController(...)
```

Open `tesserapiv1/tesserapiv1_client.py` to see all available `@LazyProperty` controller names. Each one is
initialized lazily on first access and cached for the lifetime of the client.

OAuth auth managers (for CCG, ACG, ROPCG) are exposed as plain `@property` attributes on the client
(e.g. `client.o_auth_ccg`, `client.o_auth_acg`) — use them to call `fetch_token()`,
`is_token_expired()`, etc.

## Choosing the environment / base URL

`Environment` is an `Enum` subclass in `tesserapiv1/configuration.py`. **Read the enum in `configuration.py`
for the real member names before choosing one** — a member's name does not necessarily tell you which
host it resolves to, so match it against the base URL it actually resolves to rather than its name:

```python
from tesserapiv1.configuration import Environment

client = Tesserapiv1Client(environment=Environment.PRODUCTION)
```

To inspect the URL each environment resolves to, read the `environments` dict in
`tesserapiv1/configuration.py`. There is no free-form base-URL override; to target a custom host (mock
server, proxy), inject a custom `requests.Session` via `http_client_instance` that redirects
requests, or use `ProxySettings`.

## Custom HTTP session

Pass a custom `requests.Session` to `http_client_instance` when you need proxy routing, custom TLS
settings, shared connection pools, or logging hooks. Set `override_http_client_configuration=True` to
allow the SDK to apply its own retry/timeout settings to your session:

```python
import requests
from tesserapiv1.tesserapiv1_client import Tesserapiv1Client

session = requests.Session()
session.verify = '/path/to/cert.pem'   # custom TLS CA bundle

client = Tesserapiv1Client(
    http_client_instance=session,
    override_http_client_configuration=True,
    timeout=30,
    max_retries=3,
)
```

## Cloning the configuration

`Configuration` exposes `clone_with(**overrides)` to produce a modified copy with minimal
boilerplate — useful after fetching an OAuth token that must be re-attached:

```python
# After fetching a new OAuth token:
new_creds = client.config.o_auth_ccg_credentials.clone_with(o_auth_token=token)
new_config = client.config.clone_with(o_auth_ccg_credentials=new_creds)
client = Tesserapiv1Client(config=new_config)
```

## Client lifetime and reuse

The client wraps a `requests.Session` internally. Create it **once** at application startup and
reuse it — do **not** build a new client per request (that wastes connection-pool resources and
destroys any cached OAuth token).

```python
# Module-level singleton (scripts and simple services):
client = Tesserapiv1Client.from_environment()

def process():
    result = client.{resource}.{operation}(...)
```

For web frameworks, register the client in a DI container or application state that is initialized
once and shared across handlers.

## Next

- Configure credentials → **python-authentication**
- Make your first call → **python-calling-endpoints**
- Tune retries/timeouts/logging → **python-configuration-resilience**
